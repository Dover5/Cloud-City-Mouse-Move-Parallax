
function LoopAnimate() {
  // Add animation class to star after 5 secons
  setTimeout(function() {
    document.getElementById("mr_star").className += " animate";
  }, 9000);
  // remove animation class after 9seconds
  setTimeout(function() {
    var star = document.getElementById("mr_star"),
      starCont = document.getElementById("star-cont");

    star.className = " star"; 
    randomMargin(); //add random margin
  }, 5000);

}
// Call LoopAnimate every 15seconds
LoopAnimate();
window.setInterval(function() {
 LoopAnimate();

}, 9000);

//function to add a random margin
function randomMargin() {
  var num = Math.floor(Math.random() * 181) - 100,
    starCont = document.getElementById("star-cont"),
    starContMargin = getComputedStyle(starCont).getPropertyValue("margin-left");
  num += "%";

  starCont.style.marginLeft = num;
  console.log(num);
}