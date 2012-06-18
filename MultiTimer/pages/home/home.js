(function () {
    "use strict";

    var timerId = null;

    //function templateFunction(itemPromise) {
    //    return itemPromise.then(function (item) {
    //        var tmpl = WinJS.Utilities.query("#timerTemplate")[0];
    //        return tmpl.render(item.data);
    //    });
    //};

    function updateTimers() {
        for (var i = 0; i < TimerData.timers.length; i++) {
            var timer = TimerData.timers.getAt(i);
            var key = (i + 1).toString();
            timer.second -= 1;
            TimerData.timers.dataSource.change(key, timer);
        }
    };

    function firstInterval() {
        setTimeout(setupInterval, 1000);
    };

    function setupInterval() {
        updateTimers;
        timerId = setInterval(updateTimers, 1000);
    };


    WinJS.UI.Pages.define("/pages/home/home.html", {
        init: function (element, options) {
            //this.bindSource = WinJS.Binding.as(TimerData.timers.getAt(0));
        },

        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var timersList = element.querySelector("#timersList").winControl;
            timersList.itemDataSource = TimerData.timers.dataSource;
            timersList.itemTemplate = element.querySelector("#timerTemplate"); //templateFunction;
            timersList.oniteminvoked = this.itemInvoked.bind(this);

            firstInterval();
        },

        error: function (err) {
            WinJS.log && WinJS.log("Error creating control: " + err.name + ": " + err.message,
                "sample", "error");
            return WinJS.Promise.wrapError(err);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
            clearInterval(timerId);
        },

        itemInvoked: function (args) {
            var selectedTimer = TimerData.timers.getItem(args.detail.itemIndex);
            WinJS.Navigation.navigate("/pages/editTimer/editTimer.html", selectedTimer);
        }
    });
})();
