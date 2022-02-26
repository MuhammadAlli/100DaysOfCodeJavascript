function clock () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormet = "AM";
    
    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        timeFormet = "PM"
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let timeResult = `${hours}:${minutes}:${seconds}`;

    document.getElementById("time").innerText = timeResult;

    document.getElementById("formet").innerText = timeFormet;

    setInterval(clock, 1000);
}

clock();