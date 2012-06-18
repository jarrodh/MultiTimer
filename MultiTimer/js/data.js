(function () {
    "use strict";

    var timerList = new WinJS.Binding.List();

    timerList.push({ title: "First Timer", running: true, hour: 10, minute: 3, second: 54 });
    timerList.push({ title: "Second Timer", running: false, hour: 10, minute: 3, second: 54 });
    timerList.push({ title: "Third Timer", running: false, hour: 10, minute: 3, second: 54 });

    function updateTimers() {
    };

    WinJS.Namespace.define("TimerData", {
        timers: timerList
    });
})();