const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');

function clockUpdate(){
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();
    if (hours < 10) { hours = '0' + hours }
    if (minutes < 10) { minutes = '0' + minutes }
    if (seconds < 10) { seconds = '0' + seconds }


    hourElement.innerHTML = hours + ":";
    minuteElement.innerHTML = minutes + ":";
    secondElement.innerHTML = seconds;
}

clockUpdate();
setInterval(clockUpdate, 1);