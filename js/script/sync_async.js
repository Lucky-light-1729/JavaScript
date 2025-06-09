/*Synchronous vs asynchronous javascript

1.Synchronoyus-By default
single threaded 
it execute one task at a time until that perticular task is not over we cant move to next task
T1-10ms
T2-20ms
T4-40ms
time taken for t=10+20+40=90ms

2.asynchronous
atart process simun
T1-20ms |->15->13->5->0
T2-5ms  |-> 0
T3-15ms |->10->8->0
T4-7ms  |->2->0
T2->T4->T3->T1 = 5+2+8+5=20ms

when executing js code then if in chunk of code it takes comperatively less time at
that time we will execute them first

3.how to decide whether function is synchronous and asynchronous?
predefined functions are asynchronous like callback, setinterval, settimeout
*/
//a.callBack->asynchronous-1st step
//  it is a function which is passed as a parameter in another function and will be executed later
    

function sayHi(name,callback)
{
    console.log("Hello "+name);
    callback();
}
function bye()
{
    console.log("Good bye");
}
sayHi("anay",bye);
//output
//Hello anay
//Good bye
/*
console.log("start");
setTimeout(()=>{
    console.log("hi1");
},4000);
setTimeout(()=>{
    console.log("hi2");
},2000);
console.log("end");
*/
//output
//start
//end
//hi2
//hi1

//4.Promises in js
// when featching api from server to deal we have 3 cases
//      a.server imdediatly sends ->resolve state
//      b.server sends after some time ->pending state
//      c.server does not send ->reject
// to deal with these cases we use promises

let promise = new Promise((resolve,reject)=>{
    let sucess=true;
    if(sucess)
    {
        resolve("task done");
    }
    else
    {
        reject("task failed");

    }
});

promise.then((msg)=>{
    console.log("Resolved : ",msg);
}).catch((err)=>{
    console.log("Rejected : ",err);
})

//setTimeOut
function delay(ms)
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("done after delay");
        },ms);
    });
}
delay(2000).then((msg)=>{console.log("delay")});

//5.async/await
//asynch func always return a promice
//
async function fetchUser() {
    try
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data= await response.json();
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}
//fetchUser();

async function weather() {
    try
    {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure,weather_code");
        const data= await response.json();
        console.log(data);
        console.log("latitude:",data.latitude);
        console.log("longitude:",data.longitude);
        console.log("time",data.current.time);
        console.log("apparent_temperature:",data.current.apparent_temperature);
        console.log("after 3 hrs temp :",data.hourly.temperature_2m[2]);
        console.log("after 3 hrs time :",data.hourly.time[2]);
    }
    catch(error)
    {
        console.log(error);
    }
}
weather();
