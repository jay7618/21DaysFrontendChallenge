let clockDiv = document.querySelector(".card-title");
console.log(clockDiv);
let hoursDiv = document.getElementById("hours")
let minutesDiv = document.getElementById("minutes")
let secondsDiv = document.getElementById("seconds")
let dayNameDiv = document.getElementById("dayName")
let dateDiv = document.getElementById("date")
let monthDiv = document.getElementById("month")
let yearDiv = document.getElementById("year")

function clockTimer () {
    let rawTime = new Date();
    let date = rawTime.getDate();
    dateDiv.innerText = date
    let year = rawTime.getFullYear();
    yearDiv.innerText = year;
    let rawMonth = rawTime.getMonth();
    let rawDayName = rawTime.getUTCDay();
    let dayName;
    let month;
    switch(rawDayName) {
        case 0: {
            dayName = "Sunday"
            break;
        }
        case 1: {
            dayName = "Monday"
            break;
        }
        case 2: {
            dayName = "Tuesday"
            break;
        }
        case 3: {
            dayName = "Wednesday"
            break;
        }
        case 4: {
            dayName = "Thursday"
            break;
        }
        case 5: {
            dayName = "Friday"
            break;
        }
        case 6: {
            dayName = "Saturday"
            break;
        }
    }
    switch (rawMonth) {
        case 0: {
            month = "January"
            break;
        }
        case 1: {
            month = "February"
            break;
        }
        case 2: {
            month = "March"
            break;
        }
        case 3: {
            month = "April"
            break;
        }
        case 4: {
            month = "May"
            break;
        }
        case 5: {
            month = "June"
            break;
        }
        case 6: {
            month = "July"
            break;
        }
        case 7: {
            month = "August"
            break;
        }
        case 8: {
            month = "September"
            break;
        }
        case 9: {
            month = "October"
            break;
        }
        case 10: {
            month = "November"
            break;
        }
        case 11: {
            month = "December"
            break;
        }
    }
    monthDiv.innerText = month
    console.log(dayName);
    dayNameDiv.innerText = dayName
    // let setTime = rawTime.toLocaleTimeString();
    let hours = rawTime.getHours();
    // console.log(hours);
    let minutes = rawTime.getMinutes();
    let seconds = rawTime.getSeconds();
    // clockDiv.innerHTML = setTime
    hoursDiv.innerHTML = hours
    minutesDiv.innerHTML = minutes
    secondsDiv.innerHTML = seconds
}

setInterval(clockTimer, 1000);

clockTimer();


