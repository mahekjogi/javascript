let myDate = new Date()
console.log(myDate.toString());//use to more readable way
console.log(myDate.toDateString());//use for only date and day
console.log(myDate.toTimeString());//use for only time
console.log(myDate.toISOString());
/*It converts a date into a standard date-time string in UTC (Coordinated Universal Time).
26-10-20 date(year-month-day)
T separates the date and time
05:52:00.000 time with milliseconds
z indicates UTC time (Coordinated Universal Time)*/
console.log(myDate.toJSON());
/* It converts a Date object into a JSON-compatible date string. Internally, for a valid Date, it uses toISOString().
ouput is the same as toISOSString*/
console.log(myDate.toLocaleString());//show real world using date and time 
console.log(typeof myDate);//it's object

//want any speacifice date
//format: Year,Month,Date,Hours,minutes
let myCrearesDate = new Date(2026,11,11)//in JS months start at the 0 
console.log(myCrearesDate.toDateString());

let myCrearesDate1 = new Date(2026,11,11,12,0)//date with time
console.log(myCrearesDate1.toLocaleString());//12/11/2026, 12:00:00 AM

let myCrearesDate2 = new Date("11-12-2026")//want any scapecifice date in scapecifice format using ""
console.log(myCrearesDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCrearesDate.getTime());

console.log(Date.now());//current time in milliseconds
console.log(Date.now()/1000);//for shroting using /1000 but show in decimal number
console.log(Math.floor(Date.now()/1000));//for removing decimal number and shoring with floor

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());//here month start at  from the 0
console.log(newDate.getDay());//here day also start at from the 0

console.log(`today date is${newDate.getDate()}`)

console.log(newDate.toLocaleString('default',{
    weekday:"long"
})
)