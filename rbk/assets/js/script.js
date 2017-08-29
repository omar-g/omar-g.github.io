
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
    cycleInterval: 5000,
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