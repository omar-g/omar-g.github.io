// @codekit-append "main.components/select/select.js";
// @codekit-append "main.components/drop-down/drop-down.js";
// @codekit-append "main.components/filter/filter.js";
// @codekit-append "main.components/channel/channel.js";

$('.select').each(function() {
  var selectedOptionContent = $(this).find('option:selected').text();
  $(this).siblings('.select__text').text(selectedOptionContent);
});

$('body').on('change', '.select', function(event) {
  event.preventDefault();
  var selectedOptionContent = $(this).find('option:selected').text();
  $(this).siblings('.select__text').text(selectedOptionContent);
});


$('body').on('click', '.drop-down_js', function(event) {
  event.preventDefault();
  $(this).parents('.drop-down').toggleClass('drop-down_status_open').find('.drop-down__content').fadeToggle('fast');
});

function changeFilterItemTime() {
  var $self = $(event.target),
      selectedOptionContent = $self.find('option:selected').text();
  $('.filter__head-time').text(selectedOptionContent);
}

function changeFilterItemChannel() {
  var $self = $(event.target),
      selectedOptionContent = $self.find('option:selected').text();
  $('.filter__head-channel').text(selectedOptionContent);
}

function changeFilterItemType() {
  var $self = $(event.target),
      selectedOptionContent = $self.find('option:selected').text(),
      optionValue = $self.find('option:selected').val();

  $('.filter__head-type').text(selectedOptionContent);
  $('.channel__item').fadeOut('fast');
  $('.channel__show-full_js').fadeOut('fast');
  switch(optionValue) {
    case 'option0':
      $('.channel').fadeIn('fast');
      $('.channel__item').fadeIn('fast');
      break;
    case 'option1':
      $('.channel__content').fadeIn('fast');
      $('[data-category=movie]').fadeIn('fast');
      $('.channel').each(function() {
          $(this).fadeIn('fast');
        if ($(this).find('[data-category=movie]').length === 0) {
          $(this).fadeOut('fast');
        }
      });
      break;
    case 'option2':
      $('.channel__content').fadeIn('fast');
      $('[data-category=serial]').fadeIn('fast');
      $('.channel').each(function() {
          $(this).fadeIn('fast');
        if ($(this).find('[data-category=serial]').length === 0) {
          $(this).fadeOut('fast');
        }
      });
      break;
    case 'option3':
      $('.channel__content').fadeIn('fast');
      $('[data-category=sport]').fadeIn('fast');
      $('.channel').each(function() {
          $(this).fadeIn('fast');
        if ($(this).find('[data-category=sport]').length === 0) {
          $(this).fadeOut('fast');
        }
      });
      break;
  }

}

$('body').on('click', '.filter__button_action_sumbit', function(event) {
  event.preventDefault();
  $(this).parents('.drop-down').find('.drop-down_js').trigger('click');
});













  $('body').on('click', '.channel__show-full_js', function(event) {
    event.preventDefault();
    $(this).parents('.channel').find('.channel__content_status_past').slideToggle('fast').siblings('.channel__content_status_future').slideToggle('fast');
    $(this).find('span').text(function(i, text){
      return text === 'Показать полностью' ? 'Сейчас на канале' : 'Показать полностью';
    });
    $('html, body').animate({
      scrollTop: $(this).parents('.channel').offset().top
    }, 200);
  });

$(document).ready(function() {
  $('.channel__item_popup_yes').jBox('Tooltip', {
    content: $(this).find('.popup'),
    delayOpen: 500,
    delayClose: 1000,
    closeOnMouseleave: true,
    outside: 'x',
    position: {x: 'right', y: 'center'},
    pointer: 'top: 30',
    adjustPosition: true
  });
});

