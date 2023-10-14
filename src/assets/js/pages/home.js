(function ($) {
  "use strict";

  /*---------------------------
    Hero Slider Activation
  -----------------------------------*/
  var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
      },
    },
    
    navigation: false
  });

/* ----------------------------
    Tilt Animation 
-------------------------------*/
  $('.js-tilt').tilt({
      base: window,
      reset: true, 
      scale: 1.02, 
      reverse: true, 
      max: 15, 
      perspective: 3e3, 
      speed: 4e3
  });

/* ----------------------------
Odometer Activation 
-------------------------------*/
if( $('.odometer').length ){
  var elemOffset = $('.odometer').offset().top;
  var winHeight = $(window).height();
  if(elemOffset < winHeight){
    $('.odometer').each(function(){
      $(this).html($(this).data('count-to'));
    });
  }
  $(window).on('scroll', function(){
    var elemOffset = $('.odometer').offset().top;
    function winScrollPosition() {
      var scrollPos = $(window).scrollTop(),
        winHeight = $(window).height();
      var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
      return scrollPosition;
    }
    if ( elemOffset < winScrollPosition()) {
      $('.odometer').each(function(){
        $(this).html($(this).data('count-to'));
      });
    }	
  });
};

/*---------------------------
Testimonial Activation
-----------------------------------*/
var swiper = new Swiper(".testimonial-slider", {
slidesPerView: 3,
loop:true,
spaceBetween:16,
pagination: false,
allowTouchMove: true,
navigation: false,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
breakpoints:{
  0: {
    slidesPerView: 1
  },
  480: {
    slidesPerView: 2
  },
  768: {
    slidesPerView: 2
  },
  992: {
    slidesPerView: 3
  },
  1200: {
    slidesPerView: 3
  }
}
});

/*---------------------------
  Project Carousel Activation
-----------------------------------*/
var swiper = new Swiper(".project-carousel",{
  loop:true,
  speed:800,
  autoplay:false,
  slidesPerView:4,
  spaceBetween:10,
  pagination:false,  
  navigation: {
    nextEl: '.project-carousel-wrapper .swiper-btn-next',
    prevEl: '.project-carousel-wrapper .swiper-btn-prev',
  },
  breakpoints:{
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  }
})

/*-------------------------------
FancyBox Activation
-----------------------------------*/
$('.video-popup').fancybox();

  /*--
  Skillbar Instance
-----------------------------------*/
var deferJs = {
  i: function (e) {
      deferJs.d();
      deferJs.methods();
  },

  d: function (e) {
      this._window = $(window),
          this._document = $(document),
          this._body = $('body'),
          this._html = $('html')

  },

  methods: function (e) {
      deferJs.radialProgress();
  },

  radialProgress: function () {
      $('.radial-progress').waypoint(function () {
          $('.radial-progress').easyPieChart({
              lineWidth: 12,
              scaleLength: 0,
              rotate: 0,
              trackColor: false,
              lineCap: 'round',
              size: 178
          });
      }, {
          triggerOnce: true,
          offset: 'bottom-in-view'
      });
  }
}
deferJs.i();


})(jQuery);