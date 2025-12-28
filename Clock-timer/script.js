const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const resetButton = document.getElementById('resetBtn');
const timerDisplay = document.getElementById('timer');

let interval = null;
let timeLeft = 1500; // 25 minutes in seconds

function updateTimer()
{
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime =  `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;

    timerDisplay.innerHTML = formattedTime;
}

function startTimer()
{
    if (interval)
    {
        return;
    }
    interval = setInterval(() =>{
        timeLeft--;
        updateTimer();
        if (timeLeft === 0)
        {
            clearInterval(interval);
            interval = null;
            alert("Hết giờ!!!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer()
{
    clearInterval(interval);
    interval = null;
}

function resetTimer()
{
    stopTimer();
    timeLeft = 1500;
    updateTimer();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateTimer();