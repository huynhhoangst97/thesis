var a = new Image();
var icon = new Image();
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x,y;

function init() {
  a.src = "img/110b3-3.png";
  window.requestAnimationFrame(draw);
}

function drawBall(){
  ctx.beginPath();
  ctx.arc(
    ((223 - (x * 223) / 4.9 + 725) * canvas.width) / 1226,
    ((((2.7+y) * 442) / 9.05 + 131) * canvas.height) / 570,
    6,
    0,
    2 * Math.PI
  );
  ctx.fillStyle = "#00E76D";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
  drawBall();
  $.ajax({
    url: "../product",
    method: "POST",
    contentType: "application/json",
    success: function(response) {
      x=response.xcale;
      y=response.ycale;
    }
  });
  window.requestAnimationFrame(draw);
}
init();
// function init(){
//   a.src = "img/110b3-3.png";
//   icon.src = "img/icon.png";
//   var canvas = document.getElementById("myCanvas");
//   var ctx = canvas.getContext("2d");
//   ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
//   ctx.beginPath();
//   function draw(){
//     $.ajax({
//       url: "../product",
//       method: "POST",
//       contentType: "application/json",
//       success: function(response) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
//         ctx.arc(
//           (canvas.width * response.xcale) / 3,
//           (canvas.height * response.ycale) / 3,
//           6,
//           0,
//           2 * Math.PI
//         );
//         ctx.fillStyle = "red";
//         ctx.fill();
//       }
//     });
//   }
//   draw();
// }
// window.addEventListener('load',init,false);

// $(document).ready(() => {
//   a.src = "img/110b3-3.png";
//   icon.src = "img/icon.png";
//   var canvas = document.getElementById("myCanvas");
//   var ctx = canvas.getContext("2d");
//   ctx.drawImage(a, 0, 0, canvas.width, canvas.height);

//   setInterval(() => {
//     $.ajax({
//       url: "product",
//       method: "POST",
//       contentType: "application/json",
//       success: function(response) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
//         ctx.beginPath();
//         ctx.arc(
//           ((223 - (response.xcale * 223) / 4.9 + 725) * canvas.width) / 1226,
//           ((((2.7+response.ycale) * 442) / 9.05 + 131) * canvas.height) / 570,
//           8,
//           0,
//           2 * Math.PI
//         );
//         ctx.fillStyle = "#00E76D";
//         ctx.fill();
//       }
//     });
//   }, 25);
// });
