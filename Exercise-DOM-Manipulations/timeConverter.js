function attachEventsListeners() {
    let daysBtn = document.getElementById("daysBtn")
    daysBtn.addEventListener("click", convertFromDays)
    let hoursBtn = document.getElementById("hoursBtn")
    hoursBtn.addEventListener("click", convertFromHours)
    let minutesBtn = document.getElementById("minutesBtn")
    minutesBtn.addEventListener("click", convertFromMins)
    let secondsBtn = document.getElementById("secondsBtn")
    secondsBtn.addEventListener("click", convertFromSecs)

    function convertFromDays(){
        let days = document.getElementById("days").value
        let hours = days * 24
        let minutes = hours * 60
        let seconds = minutes * 60

        document.getElementById("hours").value = hours
        document.getElementById("minutes").value = minutes
        document.getElementById("seconds").value = seconds
    }

    function convertFromHours(){
        let hours = document.getElementById("hours").value

        let days = hours / 24
        let minutes = hours * 60
        let seconds = minutes * 60

        document.getElementById("days").value = days
        document.getElementById("minutes").value = minutes
        document.getElementById("seconds").value = seconds
    }

    function convertFromMins(){
        let minutes = document.getElementById("minutes").value
        let hours = minutes / 60

        let days = hours / 24
        let seconds = minutes * 60

        document.getElementById("days").value = days
        document.getElementById("hours").value = hours
        document.getElementById("seconds").value = seconds
    }

    function convertFromSecs(){
        let seconds = document.getElementById("seconds").value
        let minutes = seconds / 60
        let hours = minutes / 60
        let days = hours / 24

        document.getElementById("days").value = days
        document.getElementById("hours").value = hours
        document.getElementById("minutes").value = minutes
    }
  // One day is equal to 24 hours/1440 minutes/86400 seconds.
}