var a = new Image();
a.src = 'img/110b3.png';
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
window.onload = function () {
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
    
}

canvas.addEventListener("wheel", (e) => {
    clearImage();
    if (e.deltaY < 0) {
        ctx.scale(1.1, 1.1);
        ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
    ctx.arc(30, 30, 20, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
    }
    else {
        ctx.scale(0.9, 0.9);
        ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
    ctx.arc(30, 30, 20, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
    }
    event.preventDefault();

},false);
function setTran() {

}
//-draw circle--
/*
ctx.arc(30, 30, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
*/
function clearImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}