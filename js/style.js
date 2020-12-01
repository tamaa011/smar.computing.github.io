// start NavBar Scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
// End NavBar Scroll
// call navbar
        $(function(){
      $(".navBar").load("navbar.html");
    });
//end call navbar

// call wedo
        $(function(){
      $(".whwedo").load("wedo.html");
    });
//end call wedo

// call header
        $(function(){
      $(".header").load("header.html");
    });
//end call header

// call slider
        $(function(){
      $(".slider").load("slider.html");
    });
//end call slider

// call footer
        $(function(){
      $(".footer").load("footer.html");
    });
//end call footer

// call about-us-header
        $(function(){
      $(".about-us-header").load("about-us-header.html");
    });
//end call about-us-header

// call about-us-text
        $(function(){
      $(".about-text").load("about-us-text.html");
    });
//end call about-us-text

// call about-us-group
        $(function(){
      $(".group").load("about-us-group.html");
    });
//end call about-us-group