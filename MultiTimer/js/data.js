(function () {
    "use strict";

    var timeList = new WinJS.Binding.List();

    timeList.push({ key: 99, title: "First Timer", hour: 10, minute: 3, second: 54 });
    timeList.push({ key: 45, title: "Second Timer", hour: 10, minute: 3, second: 54 });

    function updateTimers() {
    };

    WinJS.Namespace.define("TimerData", {
        timers: timeList
    });
})();