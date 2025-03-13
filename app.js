var hours = document.getElementById("hours");
var mins = document.getElementById("mins");
var secs = document.getElementById("secs");

var hoursCounter = 0;
var minsCounter = 0;
var secsCounter = 0;
var secsInterval; 

function StopWatch() {
    secsInterval = setInterval(() => {
        secsCounter++;

        if (secsCounter == 60) {
            secsCounter = 0;
            minsCounter++;

            if (minsCounter == 60) {
                minsCounter = 0;
                hoursCounter++;

                if (hoursCounter == 24) {
                    hoursCounter = 0;
                }
            }
        }

        // Manually format numbers to add leading zero
        hours.innerText = (hoursCounter < 10 ? "0" : "") + hoursCounter;
        mins.innerText = (minsCounter < 10 ? "0" : "") + minsCounter;
        secs.innerText = (secsCounter < 10 ? "0" : "") + secsCounter;

    }, 1000);
}

function stop() {
    clearInterval(secsInterval);
}

function start() {
    stop(); 
    StopWatch();
}

function reset() {
    stop(); 
    hoursCounter = 0;
    minsCounter = 0;
    secsCounter = 0;

    hours.innerText = "00";
    mins.innerText = "00";
    secs.innerText = "00";
}
