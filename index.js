import readingTime from "reading-time";
import {HebrewCalendar, HDate, Location, Event,Zmanim,ParshaEvent} from '@hebcal/core';

window.onload = function(){
	 Test();
};


function Test(){
    // set the date to show in PST timezone
	let date = new Date();
	let timezoneOffset = date.getTimezoneOffset();

	let pstOffset = -420; // this is the offset for the Pacific Standard Time timezone
	let adjustedTime = new Date(date.getTime() + (pstOffset + timezoneOffset) * 60 * 1000);
	
	// display the date and time in PST timezone
	let options22 = {
	  day: 'numeric',
	  month: 'numeric',
	  year: 'numeric',
	  hour: 'numeric',
	  minute: 'numeric',
	  second: 'numeric',
	  timeZone: 'America/Los_Angeles',
	 
	};
	let pstDateTime = date.toLocaleString('en-US', options22);

	
	var today = date
	const today3 = date
	
	var endofweek = 7 - today.getDay()  -1
	
	var time = "";
	const nextThreeDays = new Date(today.setDate(today.getDate() + endofweek))
	today = date
	const sunday = new Date(today.setDate(today.getDate() - endofweek))
	today = date
	var friday = new Date(today.setDate(today.getDate() +  endofweek-1))


	        const {GeoLocation, Zmanim} = require('@hebcal/core');
			const latitude = 34.171210;
			const longitude = -118.539940;
			const tzid = 'America/Los_Angeles';
			const gloc = new GeoLocation(null, latitude, longitude, 0, tzid);
			const zmanim = new Zmanim(gloc, today3, false);
zmanim.setUseElevation(true)

	const options = {
			
			isHebrewYear: false,
			candlelighting: true,
			location: Location.lookup('Los Angeles'),
			sedrot: true,
			omer: false,
			start: sunday,
			end: nextThreeDays,
			locale:"he",
			addHebrewDates:true
		  };
		  const events = HebrewCalendar.calendar(options);
	console.log(events)
		  var count = 0;
		  for (const ev of events) {
			
			const hd = ev.getDate();
			const date = hd.greg();
	
			if(ev.render('en').includes('Parashat'))
			{
				

			}
			if(ev.render('en').includes('Candle'))
			{ 
				document.getElementById("CandleLighting").innerText = ev.render('en').split(': ')[1]
				document.getElementById("HebrewParsha").innerText = ev.memo
				document.getElementById("ShabbatMonthDate").innerText =friday.toDateString() + " | " + hd.toString()

				
			}
			if(ev.render('en').includes('Havdalah'))
			{
				//document.getElementById("RightDate").innerText = time + " | " + ev.render('en')
	
				document.getElementById("ShabbatEnds").innerText = ev.render('en').split(': ')[1].toUpperCase()
				var time72 = ev.render('en').split(': ')[1]
				
				var time73 = time72.split(':')
				var min = time73[1].toUpperCase().replace('AM','').replace('PM','')	
				var hours =  time73[0]
				var dd = new Date( 2024, 1, 1 ,hours, min, 0)
				var ds = new Date( 2024, 1, 1 ,hours, min, 0)

				dd = new Date(dd.setMinutes(dd.getMinutes() +30))
				ds = new Date(ds.setMinutes(ds.getMinutes() +72))

				
				document.getElementById("seventwominshabbat").innerText = ds.toLocaleTimeString([], {timeStyle: 'short'}).replace('AM','PM');

				
				document.getElementById("thirtyminshabbat").innerText = dd.toLocaleTimeString([], {timeStyle: 'short'}).replace('AM','PM');

				
			}


			
			var dusk = new Date(zmanim.dusk().setHours(zmanim.dusk().getHours()-3))

			document.getElementById("Nightfall").innerText = dusk.toLocaleTimeString([], {timeStyle: 'short'});
			
			var sunset = new Date(zmanim.shkiah().setHours(zmanim.shkiah().getHours()-3))

			document.getElementById("Sunset").innerText = sunset.toLocaleTimeString([], {timeStyle: 'short'});
			

			//var dusk2 = new Date(zmanim.shkiah().setMinutes(zmanim.shkiah().getMinutes()-102))
			sunset = sunset.setMinutes(sunset.getMinutes() +12)
			var s2 = new Date(sunset)
			sunset = s2.setHours(s2.getHours() +1)

			document.getElementById("seventwomin").innerText = new Date(sunset).toLocaleTimeString([], {timeStyle: 'short'});


			var sofZmanTfilla = new Date(zmanim.sofZmanTfilla().setHours(zmanim.sofZmanTfilla().getHours()-3))

			document.getElementById("latestShachrit").innerText = sofZmanTfilla.toLocaleTimeString([], {timeStyle: 'short'});
			
			var sofZmanShma = new Date(zmanim.sofZmanShma().setHours(zmanim.sofZmanShma().getHours()-3))

			document.getElementById("latestShema").innerText = sofZmanShma.toLocaleTimeString([], {timeStyle: 'short'});
			

			
			var misheyakir = new Date(zmanim.misheyakir().setHours(zmanim.misheyakir().getHours()-3))

			document.getElementById("talis").innerText = misheyakir.toLocaleTimeString([], {timeStyle: 'short'});
			
			

			var minchaGedola = new Date(zmanim.minchaGedola().setHours(zmanim.minchaGedola().getHours()-3))

			document.getElementById("EarliestMincha").innerText = minchaGedola.toLocaleTimeString([], {timeStyle: 'short'});
			

			
			document.getElementById("Sunrise").innerText = new Date(zmanim.sunriseOffset(-180)).toLocaleTimeString([], {timeStyle: 'short'});
			
			var Dawn = new Date(zmanim.alotHaShachar().setHours(zmanim.alotHaShachar().getHours()-3))
			
			document.getElementById("Dawn").innerText = Dawn.toLocaleTimeString([], {timeStyle: 'short'});
			
			var midday = new Date(zmanim.chatzot().setHours(zmanim.chatzot().getHours()-3))

			document.getElementById("Midday").innerText = midday.toLocaleTimeString([], {timeStyle: 'short'});
			
		
			
			var plag = new Date(zmanim.plagHaMincha().setHours(zmanim.plagHaMincha().getHours()-3))
			document.getElementById("PlagHamincha").innerText = plag.toLocaleTimeString([], {timeStyle: 'short'});
			

			count ++;
		  }

		  const options24 = {
			
			isHebrewYear: false,
			candlelighting: true,
			location: Location.lookup('Los Angeles'),
			sedrot: true,
			omer: false,
			start: new Date(),
			end: new Date(),
			locale:"he",
			addHebrewDates:true
		  };
		  const events24 = HebrewCalendar.calendar(options24);
	      console.log(events24)

		  for (const ev of events24)
		  {
			console.log(ev)
			if(ev.desc !=null)
			{
				document.getElementById("LeftDate").innerText =new Date().toDateString() + " | " +  ev.getDate();

			}
		  }
		 
		  
	
	
			
		  
	
}
