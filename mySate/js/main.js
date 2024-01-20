

/*=========================================================================
	Sticky Header
=========================================================================*/ 
$(function() {
    var header = $("#header"),
        yOffset = 0,
        triggerPoint = 80;
    $(window).on( 'scroll', function() {
        yOffset = $(window).scrollTop();

        if (yOffset >= triggerPoint) {
            header.addClass("navbar-fixed-top");
        } else {
            header.removeClass("navbar-fixed-top");
        }

    });
});

/*=========================================================================
    textrotator
=========================================================================*/
$(".rotate").textrotator({
  animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 2000 // How many milliseconds until the next word show.
}); 
