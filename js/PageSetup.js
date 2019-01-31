var winHeight = $(window).height();

var arrowHeight = winHeight * .25;
var arrowBottom = winHeight * .1;
var nameHeight = winHeight * .35;
$('#arrow').css('margin-top', arrowHeight.toString() + 'px');
$('#arrow').css('margin-bottom', arrowBottom.toString() + 'px');
$('#name').css('margin-top', nameHeight.toString() + 'px');
