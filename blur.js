let img = document.getElementById("myimage")

function blurimage() {
    img.style.filter = "blur(5px\)"
    
}
function brightness() {
    img.style.filter = "brightness(50%)"
}

function contrast() {
    img.style.filter = "contrast(180%)"
}

function zoomimage() {
    img.style.zoom = "120%"
}