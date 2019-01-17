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