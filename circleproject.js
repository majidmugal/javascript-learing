let isRunning = true;

function toggleSpin() {
    let circle = document.querySelector(".main");
    let btn = document.querySelector(".btn");

    if (isRunning) {
        circle.style.animationPlayState = "paused";
        btn.innerHTML = "Start";
        isRunning = false;
    } else {
        circle.style.animationPlayState = "running";
        btn.innerHTML = "Stop";
        isRunning = true;
    }
}


