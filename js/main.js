/**
 * Countdown timer
 * TODO:
 * - If you are reading this, then you are SPECIAL!! please consider improving the timer
 * - Separate controls for days, hours, etc
 */
$('.countdown').each(function(){
    $(this).countdown({until: new Date($(this).attr('data-date'))});
    console.log("#####" + new Date($(this).attr('data-date')) );
});


/**
 * For tracking the scroll percentage of the webpage
 * Thank you random guy in stackoverflow for this https://stackoverflow.com/a/8028584/6882980
 */
let browserWindow = $(window)
let scrollPercent = 0;
let redUpto = 50;
let scrollProgressBar = $('#body-background');

browserWindow.on('scroll', function(){
	let s = $(window).scrollTop(),
		d = $(document).height(),
		c = $(window).height();
  
    scrollPercent = (s / (d - c)) * 100;
    redUpto = String(50 + (scrollPercent / 2));
    // heroBackground.css('background', 'linear-gradient(' + 'to right, #d81331 0, ' + '#d81331 ' + redUpto + '%, white ' + redUpto + '%, white 100%');
    scrollProgressBar.css('width', redUpto + '%');

	console.clear();
	console.log(scrollPercent);
  });

//   let animation = anime({
//     targets: '#test',
//     translateX: '1000',
//     opacity: 0,
//     delay: 1000,
//     duration: 5000,
//     elasticity: 200,
//     easing: 'easeInOutSine',
//     autoplay: false
//   });

//   animation.play();
// animation.seek((scrollPercent / 100) * animation.duration);

