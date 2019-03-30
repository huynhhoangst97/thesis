var a = new Image();
var icon = new Image();
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

$(document).ready(()=>{
  a.src = "img/110b3-3.png";
  icon.src = "img/icon.png";
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
 
  setInterval(() => {
    $.ajax({
      url: "../product",
      method: "POST",
      contentType: "application/json",
      success: function(response) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(
          (canvas.width * response.xcale) / 3,
          (canvas.height * response.ycale) / 3,
          8,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = "#00E76D";
        ctx.fill();
      }
    });
  }, 25);
});
