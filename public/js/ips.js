var a = new Image();
var icon = new Image();
// function init(){
//   a.src = "img/110b3-2.png";
//   var canvas = document.getElementById("myCanvas");
//   var ctx = canvas.getContext("2d");
//   function draw(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     ctx.arc(canvas.width*Math.random(), canvas.height*Math.random(), 6, 0, 2 * Math.PI,false);
//     ctx.fillStyle="red";
//     ctx.fill();
//     window.requestAnimationFrame(draw);
//   }
//   draw();
// }
// window.addEventListener('load',init,false);

window.onload = function() {
  a.src = "img/110b3-2.png";
  icon.src = "img/icon.png";
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.arc(100 * Math.random(), 30, 6, 0, 2 * Math.PI);
  setInterval(() => {
    $.ajax({
      url: "../product",
      method: "POST",
      contentType: "application/json",
      success: function(response) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          icon,
          (canvas.width * response.xcale) / 3,
          (canvas.height * response.ycale) / 3,
          30,
          30
        );
      }
    });
    // ctx.beginPath();
    // ctx.arc(canvas.width*Math.random(), canvas.height*Math.random(), 6, 0, 2 * Math.PI,false);
    // ctx.fillStyle="red";
    // ctx.fill();
  }, 1000);
};
