var a = new Image();
var icon = new Image();
function init(){
  a.src = "img/110b3-2.png";
  icon.src = "img/icon.png";
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  function draw(){
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
  }
  draw();
}
window.addEventListener('load',init,false);

window.onload = function() {
  a.src = "img/110b3-2.png";
  icon.src = "img/icon.png";
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
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
  }, 500);
};
