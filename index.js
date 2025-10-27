
//the function below saves the date of the day in day, month and year and the time in hours minutes and seconds. Then proceeds to use the constants and variables in the function to display the date and time of the  current day .
function updateTime() {
const today= new Date();
const hour= today.getHours().toString().padStart(2,0);
const minutes= today.getMinutes().toString().padStart(2,0);
const seconds= today.getSeconds().toString().padStart(2,0);
const day = today.getDay().toString().padStart(2,0);
const month = today.getMonth().toString().padStart(2,0);
const year =today.getFullYear();
const dateDisplay= `${day} ${month} ${year}`;
let timeDisplay;

if(hour<12){ 
    timeDisplay=`${hour}:${minutes}:${seconds} AM}`;
document.querySelector('.clock').innerHTML= timeDisplay;
}
else{
    timeDisplay=`${hour}:${minutes}:${seconds} PM`
document.querySelector('.clock').innerHTML= timeDisplay;
};


document.querySelector('.date').innerHTML= dateDisplay;
}

updateTime();
setInterval(updateTime, 1000);
