/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    }).on("click", ".cs-options li", function(){
        $(this).closest(".cs-select").addClass("done");
    });

    $('form').on('submit', function(e){

      e.preventDefault();
      $form = $(this);
      $.ajax({
        url: this.action,
        type: "POST",
        data: $(this).serialize(),
        dataType: "json"
      }).done(function(data){
        $form.find('input, textarea').val('');
        $('.cs-placeholder').each(function(){
          $(this).html($(this).next().next().find('option:first').html());
        });
        $button = $form.find('button');
        $button.html($button.data('sent-text'));
      });

    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
