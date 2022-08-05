//----------------Hamburger Nav------------------//
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("mhLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


//----------Crossfade Page Transitions------------//
$(function() {
$('body').pageCrossFade();
});

$(function() {
$('body').pageCrossFade({
  duration: 300,
  easing: 'swing'
});
});

$(function() {
$('body').pageCrossFade({
  //'internal' , 'all' , or a specific CSS ID/Class//
  links: 'all'
});
});