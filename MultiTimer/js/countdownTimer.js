(function () {
    "use strict";

    function updateTimers(timers) {
        timers.forEach(function (timer) {
            timer.second -= 1;
            if (timer.second === -1) {
                timer.second = 59;
                timer.minute -= 1;
            } else if (timer.minute == -1) {
                timer.minute = 59;
                timer.hour -= 1;
            }
        });
    }

    WinJS.Namespace.define("CountdownTimer", {
        update: updateTimers
    });
})();;

/*
function countDown() {
    sec--;
    if (sec == -01) {
        sec = 59;
        min = min - 1;
    } else {
        min = min;
    }
    if (sec <= 9) { sec = "0" + sec; }
    time = (min <= 9 ? "0" + min : min) + " min and " + sec + " sec ";
    if (document.getElementById) { theTime.innerHTML = time; }
    SD = window.setTimeout("countDown();", 1000);
    if (min == '00' && sec == '00') { sec = "00"; window.clearTimeout(SD); }
}

*/