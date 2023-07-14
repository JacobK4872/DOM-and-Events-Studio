// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortMissionButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const rocket = document.getElementById("rocket")

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");

    takeOffButton.addEventListener("click", function (event) {
        let response = confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10000";
        }
    });

    landButton.addEventListener("click", function(event) {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    });

    abortMissionButton.addEventListener("click", function (event) {
        let response = confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
        }
    });

    upButton.addEventListener("click", function(event) { 
        shuttleHeight.innerHTML =  Number(shuttleHeight.innerHTML) + 10000;
    });

    downButton.addEventListener("click", function(event) { 
        shuttleHeight.innerHTML =  Number(shuttleHeight.innerHTML) - 10000;
    });

    rightButton.addEventListener("click", function(event) {
        rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
    });

    leftButton.addEventListener("click", function(event) {
        rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
    });



});