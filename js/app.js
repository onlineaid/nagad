(function ($) {
  ("use strict");

  var scrolled;
	var lastPos = 0;
	var threshold = 10;
	var head_ht = $('.header').outerHeight();

	$(window).scroll(function(){
		scrolled = true;
		if($(document).scrollTop() > head_ht) {
			$('body').addClass('sticky');
		}
		else {
			$('body').removeClass('sticky');
		}
	});

	setInterval(function(){
		if(scrolled) {
			scr_fun();
			scrolled = false;
		}
	}, 200);

	function scr_fun() {
		var top = $(this).scrollTop();
		var win_height = $(window).height();
		var doc_height = $(document).height();
		//if(Math.abs(lastPos - top) <= threshold) 

		if(top > lastPos && top > head_ht) {
			$('.header').removeClass('h-down').addClass('h-up');
		}
		else {
			if(top + win_height < doc_height) {
				$('.header').removeClass('h-up').addClass('h-down');
			}
		}

		lastPos = top;

	}

  // slick slider  slider-active basic slider
  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 3000,
      dots: true,
      fade: false,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: { dots: false, arrows: false, slidesToShow: 1 },
        },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  //  dual slider
  $(".double-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: "20px",
    dots: false,
    arrows: false,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  //  forth slider
  $(".four-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: "20px",
    dots: false,
    arrows: false,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  //  7th slider
  $(".account-slider").slick({
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: "20px",
    dots: true,
    arrows: false,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(document).ready(function () {
    var variants = {
      youtube: {
        args: [
          {
            title: "Your title here",
            content: "https://www.youtube.com/watch?v=7hIhnSD822E",
            theme: $.sweetModal.THEME_DARK,
          },
        ],
      },
    };

    for (var key in variants) {
      if (variants.hasOwnProperty(key)) {
        var variant = variants[key];

        $("#" + key).on("click", { variant: variant }, function (e) {
          var variant = e.data.variant;

          variant.fn = variant.fn || $.sweetModal;
          variant.fn.apply(this, variant.args);
        });
      }
    }
  });
})(jQuery);
