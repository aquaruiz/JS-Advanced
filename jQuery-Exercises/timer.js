function timer() {
    let time = 0;

    let start = $("#start-timer").click(startIt);
    let pause = $("#stop-timer").on("click", pauseIt);
    let intervalM = null;

    function startIt() {
        if (intervalM === null) {
            intervalM = setInterval(incrementTime, 1000);
        }
    }

    function incrementTime()
    {
        time++;
        $("#seconds").text(("0" + time%60).slice(-2));
        $("#hours").text(("0" + Math.trunc(time/60/60)).slice(-2));
        $("#minutes").text(("0" + Math.trunc(time%3600/60)).slice(-2));
    }

    function pauseIt() {
        clearInterval(intervalM)
        intervalM = null
    }
}