/*global $, jQuery, alert*/
$(document).ready(function() {

  //scroll to top on route
  window.scrollTo(0, 0);
  
  $("#main-nav, #main-nav-subpage").slideDown(700);

 // Back to top button
 $(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});


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


    if ($(this).attr("href") != '#header') {
    //scroll to position
    $('html, body').stop().animate({
      'scrollTop': target.offset().top + 50
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  }
  else{
    //scroll to position for header
    $('html, body').stop().animate({
      'scrollTop': target.offset().top
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  }
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

  var headerHeight = $('#header').height();
  var headerProjectHeight = $('#header-project').height();

  //hide nav bar after header
  if(scrollTop > (headerHeight -100) || scrollTop > (headerProjectHeight - 100)){
    $("#main-nav, #main-nav-subpage").slideUp(700);
  }
  else{
    $("#main-nav, #main-nav-subpage").slideDown(700);
  }

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
});

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function() {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Chase Anzelc.", "an Architect", " a Full Stack Software Engineer.", "a Programmer.", "a Coder."],
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
$(function(){

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