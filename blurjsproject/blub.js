function toggleLight() {
    var bulb = document.getElementById("bulb");
    var button = document.querySelector("button");

    if (bulb.src.includes("light_off")) {
        bulb.src = "https://toppng.com/free-image/light-bulb-on-off-png-PNG-free-PNG-Images_131276";
        button.textContent = "Turn Off";
    } else {
        bulb.src = "https://toppng.com/free-image/light-bulb-on-off-png-PNG-free-PNG-Images_131276";
        button.textContent = "Turn On";
    }
}