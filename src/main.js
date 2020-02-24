/*global $, jQuery, alert*/
$(document).ready(function() {
  
  
	$("#main-nav, #main-nav-subpage").slideDown(700);

  

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash, menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  
  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        //var refElement = $(currLink.attr("href"));
      });
    }
  }
  

  // ========================================================================= //
  //  SECTIONS CHANGING OPACITY ON SCROLL
  // ========================================================================= //

  $(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('#header').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return ((elementHeight - scrollTop) / elementHeight);
    }
  });
  
  $('#header-project').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return ((elementHeight - scrollTop) / elementHeight);
    }
  });
  
  
  $('#about').css({
    opacity: function() {
    var headerHeight = $('#header').height();
	  
    var elementHeight = $(this).height();	
    var halfHeight = elementHeight / 2;  
	  
	  
      return ((headerHeight + elementHeight + halfHeight - scrollTop) / elementHeight);
    }
  });
  
  $('#services').css({
    opacity: function() {
	  var headerHeight = $('#header').height();
	  var aboutHeight = $('#about').height();
	  
      var elementHeight = $('#this').height();	  
	  
	  
      return ((aboutHeight + headerHeight + elementHeight - scrollTop) / elementHeight);
    }
  });
  
  
});

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Chase Anzelc.", " a Software Developer.", "a Software Engineer.", "a Programmer.", "a Coder."],
      typeSpeed: 130,
      loop: true,
    });
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})