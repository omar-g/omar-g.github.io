
// gallery
if (typeof lightbox !== 'undefined') {
  lightbox.option({
    showImageNumberLabel: false,
    disableScrolling: true,
    resizeDuration: 200
  });
}


// only mobile top menu click

$('body').on('click', '.rbk-submenu__list-mobile-title', function() {
  var parentBox = $(this).parents('.rbk-submenu');
  if ($('.rbk-submenu__list').is(':visible')) {
    parentBox.removeClass('is-open');
    parentBox.find('.rbk-submenu__list').slideUp();
  } else {
    parentBox.addClass('is-open');
    parentBox.find('.rbk-submenu__list').slideDown();
  }
});

$('body').on('click', '.rbk-submenu-item_js_click', function() {
  var parentBox = $(this).parents('.rbk-submenu');
  dataMenuItem = $(this).data('type');
  var text = $(this).text();
  parentBox.find('.rbk-submenu-item_js_click').removeClass('is-active');
  $(this).addClass('is-active');
  parentBox.find('.rbk-submenu__list-mobile-title span').text(text);
  
  $('.rbk-projects__slider-list .rbk-projects__slider-item').each(function() {
    var dataSliderItem = $(this).data('type');
    if (dataMenuItem === 'all') {
      $(this).css('display', '');
    } else if (dataMenuItem == dataSliderItem) {
      $(this).css('display', '');
    } else {
      $(this).css('display', 'none');
    }
  });

});


// only mobile slider

if ($(window).width() < 768) {
  // news slider
  (function () {
    var $frame = $('#onlyMobileSlider');
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
}


// news item slider
(function () {
  var $frame = $('.rbk-news-item__slider-frame');
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
    startAt: 0,
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
    activatePageOn: 'click'
  });

  $('body').on('click', '.rbk-news-item__slider-preview-list-item', function() {
    var item = $(this).data('item');
    $(this).parents('.rbk-news-item__slider').find('.rbk-news-item__slider-frame').sly('toCenter', item-1);
  });
}());



// team person slider


if ($('#teamPersonSlider').length) {
var personSlider = new Sly($('#teamPersonSlider'), {
  slidee: $('.rbk-team__modal-slider .rbk-team__modal-slider-slidee'),
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
  pagesBar: $('.rbk-team__modal-slider .rbk-main-slider__paginator'),
  activatePageOn: 'click',
  prev: $('.rbk-team__modal-slider .rbk-team__modal-slider-left'),
  next: $('.rbk-team__modal-slider .rbk-team__modal-slider-right'),
}).init();
}


function rbkModalOpen() {
  $('.rbk-modal').css('display', '');
  $('body').addClass('is-rbk_modal_open');
  personSlider.reload();
}

function rbkModalClose() {
  $('.rbk-modal').css('display', 'none');
  $('body').removeClass('is-rbk_modal_open');
}

$('.rbk-team__person').on('click', function() {
  var item = $(this).data('item');
  rbkModalOpen();
  $('#teamPersonSlider').sly('toCenter', item-1);
});

$('body').on('click', '.rbk-modal__close, .rbk-modal__overlay', function(event) {
  event.stopPropagation();
  rbkModalClose();
});


// menu toggle
$('body').on('click', '.rbk-header__menu-mobile-icon', function() {
  $(this).parents('.rbk-header__menu').find('.rbk-header__menu-list').slideToggle(200);
});

$('body').on('click', function(event) {
  if ($(event.target).parents('.rbk-header__menu').length) {
    return;
  }
  if ($('.rbk-header__menu-mobile-icon').is(':visible')) {
    $('.rbk-header__menu-list').slideUp(200);
  }
});

var frameWidth = $('.rbk-main-slider__frame').css('width');
$('.rbk-main-slider__item').css('width', frameWidth);


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