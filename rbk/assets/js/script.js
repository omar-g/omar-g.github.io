
// menu toggle
$('body').on('click', '.rbk-header__menu-mobile-icon', function() {
  $(this).parents('.rbk-header__menu').find('.rbk-header__menu-list').slideToggle(200);
});

$('body').on('click', function(event) {
  if ($(event.target).parents('.rbk-header__menu').length) {
    return;
  }
  $('.rbk-header__menu-list').slideUp(200);
});


// top search toggle
$('body').on('click', '.rbk-header__search_js_click', function() {
  $(this).parents('.rbk-header').find('.rbk-header__search-form').css('display', '');
});

$('body').on('click', '.rbk-header__search-form-close_js_click', function() {
  $(this).parents('.rbk-header').find('.rbk-header__search-form').css('display', 'none');
});


// main slider
(function () {
  var $frame = $('#mainSliderFrame');
  var $wrap  = $frame.parent();

  // Call Sly on frame
  $frame.sly({
    horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBy: 1,
    speed: 400,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
    pagesBar: $wrap.find('.rbk-main-slider__paginator'),
    activatePageOn: 'click',

    // Cycling
    cycleBy: 'items',
    cycleInterval: 10000,
    pauseOnHover: 1,
  });
}());


// examples slider
(function () {
  var $frame = $('#examplesSlider');
  var $wrap  = $frame.parent();

  // Call Sly on frame
  $frame.sly({
    horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    activateOn: 'click',
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 1,
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
    pagesBar: $wrap.find('.rbk-projects__slider-paginator'),
  });
}());


// projects slider
(function () {
  var $frame = $('#projectSlider');
  var $wrap  = $frame.parent();

  // Call Sly on frame
  $frame.sly({
    horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    activateOn: 'click',
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 1,
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
    pagesBar: $wrap.find('.rbk-projects__slider-paginator'),
    activatePageOn: 'click'
  });
}());


// news slider
(function () {
  var $frame = $('#newsSlider');
  var $wrap  = $frame.parent();

  // Call Sly on frame
  $frame.sly({
    horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    activateOn: 'click',
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 1,
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
    pagesBar: $wrap.find('.rbk-projects__slider-paginator'),
    activatePageOn: 'click'
  });
}());