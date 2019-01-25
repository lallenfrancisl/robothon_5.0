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
var imageSlideShow = $('.first-content.image-slider');
// <width> / <height>
var logoAspectRatio = 1.88;
robothonHeroLogo.css('width', robothonHeroLogo.height() * 1.88 + 'px');

browserWindow.resize(function () {
    setTimeout(function () {
        robothonHeroLogo.css('width', robothonHeroLogo.height() * 1.88 + 'px');
    }, 1000);
});

/**
 * fit titles to parent containers
 */
// $('.content-title>span').fitText(0.5);

/**
 * Scroll animation code starts here
 * code from https://www.sitepoint.com/scroll-based-animations-jquery-css3/
 */

// var animation_elements = $('.animation-element');
// var window = $(window);

// function check_if_in_view() {
//     var window_height = window.height();
//     var window_top_position = window.scrollTop();
//     var window_bottom_position = (window_top_position + window_height);
  
//     $.each($animation_elements, function() {
//       var element = $(this);
//       var element_height = element.outerHeight();
//       var element_top_position = element.offset().top;
//       var element_bottom_position = (element_top_position + element_height);
  
//       //check to see if this current container is within viewport
//       if ((element_bottom_position >= window_top_position) &&
//           (element_top_position <= window_bottom_position)) {
//         element.addClass('in-view');
//       } else {
//         element.removeClass('in-view');
//       }
//     });
//   }

//   window.on('scroll resize', check_if_in_view);

  /**
   * Scroll animation code ends here
   */
/**
 * Image slider animation code
 */
  var sliderImages = document.querySelectorAll('.image-slider>.slider-image');
  var sliderCurtain = document.querySelector('.image-slider>.curtain');
  var imageSlider = anime.timeline({
      easing: 'linear',
      loop: true,
      autplay: true
  });
  
  for (let i = 0; i < sliderImages.length; ++i) {
      imageSlider
          .add({
              targets: sliderImages[i],
              opacity: ['0', '1'],
              duration: 1,
              delay: 200
          })
          .add({
              targets: sliderCurtain,
              height: ['100%', '0%'],
              duration: 200,
              endDelay: 4000
          })
          .add({
              targets: sliderCurtain,
              height: ['0%', '100%'],
              duration: 200
          });
  }

/**
 * quote slider animation cpde
 */
var quoteSlider = document.querySelector('.slider');
var quoteSliderAnimation = anime.timeline({
    loop: true,
    autoplay: true,
    direction: 'alternate'
});

for (let i = 0; i < (quoteSlider.childElementCount - 1); ++i) {
    quoteSliderAnimation
        .add({
            targets: quoteSlider,
            translateX: -100 * (i + 1) + 'vw',
            delay: 1000,
            endDelay: 1000,
            easing: 'easeOutExpo'
        })
}