(function () {
    "use strict";

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
            timersList.itemTemplate = element.querySelector("#timerTemplate");
            timersList.oniteminvoked = this.itemInvoked.bind(this);

            setInterval(this.updateTimers.bind(this), 1000);
        },

        updateTimers: function () {
            for (var i = 0; i < TimerData.timers.length; i++) {
                var timer = TimerData.timers.getAt(i);
                var key = (i + 1).toString();
                timer.second -= 1;
                TimerData.timers.dataSource.change(key, timer);
            }
        },

        itemInvoked: function (args) {
            //var selectedPost = FreshContent.articles.getItem(args.detail.itemIndex);
            //WinJS.Navigation.navigate("/pages/videoPost/videoPost.html", selectedPost);
        }
    });
})();
