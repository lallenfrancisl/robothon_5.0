/**
 * Countdown timer
 * TODO:
 * - improve the timer
 * - hide days, hours etc, leave it to html
 */
$('.countdown').each(function () {
    $(this).countdown({
        until: new Date($(this).attr('data-date'))
    });
    console.log("#####" + new Date($(this).attr('data-date')));
});

/**
 * For tracking the scroll percentage of the webpage
 * Thank you Phil Ricketts at stackoverflow for this https://stackoverflow.com/a/8028584/6882980
 */
var browserWindow = $(window)
var scrollPercent = 0;

// browserWindow.on('scroll', function(){
// 	var s = $(window).scrollTop(),
// 		d = $(document).height(),
// 		c = $(window).height();

//     scrollPercent = (s / (d - c)) * 100;
//   });

var robothonHeroLogo = $('.robothon-5-main-logo');
// <width> / <height>
var logoAspectRatio = 1.88;
robothonHeroLogo.css('width', robothonHeroLogo.height() * 1.88 + 'px');

$(window).resize(function () {
    setTimeout(function () {
        robothonHeroLogo.css('width', robothonHeroLogo.height() * 1.88 + 'px');
    }, 1000);
});

/**
 * fit titles to parent containers
 */
// $('.content-title>span').fitText(0.5);