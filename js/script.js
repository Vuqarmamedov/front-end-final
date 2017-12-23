$(document).ready(function () {
      $(".navbar li").mouseover(function () {
      	$(this).children().eq(1).find("i").css({"transform": "rotateZ(180deg)", "transition": "all .4s","color": "#42a4ff"})
      });
      $(".navbar li").mouseleave(function () {
      	$(this).children().eq(1).find("i").css({"transform": "rotateZ(0deg)", "transition": "all .4s","color": "white"})
      });


      $('#Carousel').carousel("pause");

      
      count=0;
      $(".prev").click(function(event) {
		$($(".item")[count-1]).animate({width: "toggle"})
		count--;
	});

	$(".next").click(function(event) {
		
		$($(".item")[count]).animate({width: "toggle"})
		count++;
	});

      $(window).on("scroll",function(){
            if ($(window).scrollTop() >= 250) {
                  $(".navbar").addClass("fixed");
            } else{
                  $(".navbar").removeClass("fixed");
            }
      })
      
      $("#icon-bar").click(function(event) {
            $(".nav-xs").animate({
                  left: "0px"},
                  500, function() {
                  /* stuff to do after animation is complete */
            });
      });
      $("#close-icon").click(function(event) {
            $(".nav-xs").animate({
                  left: "-100%"},
                  500, function() {
                  /* stuff to do after animation is complete */
            });
      });
})

{
      var carousel = new resposiveCarousel(400, "#services-slider", 1);
}
{
      var manuslider = new resposiveCarousel(200, "#paralax", 1, true)
}
{
      var customeslider = new resposiveCarousel(400, "#customers", 1, true);
}


