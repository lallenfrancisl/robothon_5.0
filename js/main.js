/**
 * Countdown timer
 * TODO:
 * - improve the timer
 * - hide days, hours etc, leave it to html
 */
$('#countdown-text').each(function(){
    $(this).countdown({until: new Date($(this).attr('data-date'))});
    // console.log("#####" + new Date($(this).attr('data-date')) );
});

/**
 * For tracking the scroll percentage of the webpage
 * Thank you Phil Ricketts at stackoverflow for this https://stackoverflow.com/a/8028584/6882980
 */
let browserWindow = $(window)
let scrollPercent = 0;

// browserWindow.on('scroll', function(){
// 	let s = $(window).scrollTop(),
// 		d = $(document).height(),
// 		c = $(window).height();
  
//     scrollPercent = (s / (d - c)) * 100;
//   });

let robothonLogoCard = $('.robothon-5-main-logo');
let logoAspectRatio = 1.88;

robothonLogoCard.css('width', robothonLogoCard.height() * logoAspectRatio);





