


// input mask
$(document).ready(function(){
 $('.number-mask').inputmask("+7 (999) 999-99-99");
});


// sticky navbar
$(function () {
 $('.top-menu').stickyNavbar({
  zindex: 9997
});
});


// flexslider
$(window).load(function() {
  $('.flexslider').flexslider({
    controlNav: "thumbnails",
    animation: "fade",
    directionNav: false,
    slideshow: false
  });
});


// Вывод модального окна
$(document).ready(function() {

  $('.benefits__link, .services__btn input, .steps__link, .cta-simple__link').on('click', function() {
   $('#sendModal').arcticmodal();
 });

  $('.range__btn input').on('click', function() {
    $('#priceModal').arcticmodal();
  });

}); // end doc ready


// События Google Analytics
$('.benefits__link').on('click', function() {
  ga('send', 'event', 'Модальные окна', 'Нажатие', 'Яйца');
});

$('.services__btn input').on('click', function() {
  ga('send', 'event', 'Модальные окна', 'Нажатие', 'Заказать услуги');
});

$('.range__btn input').on('click', function() {
  ga('send', 'event', 'Модальные окна', 'Нажатие', 'Получить прайс');
});

$('.steps__link').on('click', function() {
  ga('send', 'event', 'Модальные окна', 'Нажатие', 'Заявка в схеме работы');
});

$('.cta-simple__link').on('click', function() {
  ga('send', 'event', 'Модальные окна', 'Нажатие', 'Заказать звонок в футере');
});

$('.flex-control-nav').on('click', function() {
  ga('send', 'event', 'Слайдер', 'Нажатие на превью', 'Слайдер в кейсах');
});

$('.reviews__pic img').on('click', function() {
  ga('send', 'event', 'Изображения', 'Нажатие', 'Фото в отзывах');
});


