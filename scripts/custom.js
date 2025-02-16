// swiper
let swiper = {
  index: function () {
    let bnItem = $('.js-swiper-index .swiper-slide').length;
    bnItem > 1 ? $('.js-swiper-index').removeClass('is-slide-only') : $('.js-swiper-index').addClass('is-slide-only');

    let bannerSwiper = new Swiper('.js-swiper-index .swiper-container', {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: bnItem > 1 ? true : false,
        autoplay: bnItem > 1 ? true : false,
        speed: 3000,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.js-swiper-index .c-bn__dot',
          // type: 'fraction',
          clickable: true,
        },
        navigation: {
          nextEl: '.js-swiper-index .js-btn-next',
          prevEl: '.js-swiper-index .js-btn-prev'
        },
    });

    let productsSwiper = new Swiper('.js-idx-hot .swiper-container', {
      slidesPerView: 6,
      spaceBetween: 35,
      // mousewheel: true,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.js-idx-hot .c-bn__dot',
        type: 'fraction',
        // clickable: true,
      },
      navigation: {
        nextEl: '.js-idx-hot .js-btn-next',
        prevEl: '.js-idx-hot .js-btn-prev'
      },
      breakpoints: {
        1920: {
          slidesPerView: 6,
        },
        // 1680: {
        //   slidesPerView: 6,
        //   spaceBetween: 40,
        // },
        1366: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // 992: {
        //   slidesPerView: 3,
        //   spaceBetween: 20,
        // },
        820: {
          slidesPerView: 2,
          spaceBetween: 22,
        }
      },
    });

    let photoSwiper1 = new Swiper('.js-swp-idx-photo1', {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.js-swp-idx-photo1-dot',
        // type: 'fraction',
        clickable: true,
      },
    });

    let photoSwiper2 = new Swiper('.js-swp-idx-photo2', {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.js-swp-idx-photo2-dot',
        // type: 'fraction',
        clickable: true,
      },
    });

    let photoSwiper3 = new Swiper('.js-swp-idx-photo3', {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.js-swp-idx-photo3-dot',
        // type: 'fraction',
        clickable: true,
      },
    });

    let videoSwiper = new Swiper('.js-idx-video .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      // mousewheel: true,
      // loop: true,
      navigation: {
        nextEl: '.js-idx-video .js-btn-next',
        prevEl: '.js-idx-video .js-btn-prev'
      },
      breakpoints: {
        1920: {
          slidesPerView: 4,
        },
        // 1680: {
        //   slidesPerView: 6,
        //   spaceBetween: 40,
        // },
        1366: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // 992: {
        //   slidesPerView: 3,
        //   spaceBetween: 20,
        // },
        820: {
          slidesPerView: 2,
          spaceBetween: 22,
        }
      },
    });
  }
}

// web page
let page = {
  init: () => {
    // Store
    jhuangPing.buildStore({
      key: 'jhuangPingStore',
    }, {
      isPlicyShow: false,
    });
    // footer Plicy
    (function policy() {
      const _store = jhuangPing.getStore('jhuangPingStore')
      if (_store.isPlicyShow) {
        $('.ft-cookie').addClass('hide')
      }

      $('.c-btn-ft-cookie').click(function () {
        $('.ft-cookie').addClass('an-hide')
        jhuangPing.setStore('jhuangPingStore', {
          isPlicyShow: true
        });
      });
    })();

    jhuangPing.menu();

    jhuangPing.click({
      gotop: {
        enable: true,
          bk: '.hd-tools',
        btn: '.js-gotop',
      },
      back: {
        enable: true,
        ele: '.js-back',
      },
    });

    jhuangPing.lightbox({
      init: function () {
        let photoLbxSwiper = new Swiper('.js-swp-photo-lbx .swiper-container', {
          slidesPerView: 1,
          spaceBetween: 0,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          navigation: {
            nextEl: '.js-swp-photo-lbx .js-btn-next',
            prevEl: '.js-swp-photo-lbx .js-btn-prev'
          },
        });

        $('.c-btn-lbx-recruitment').click(function () {
          $('.lbx-item__body').stop().slideUp();
          $(this).closest('.lbx-item__head').next('.lbx-item__body').stop().slideToggle();
        })
      }
    });

    swiper.index();

    jhuangPing.tabs();

    // banner scroll
    $('.c-btn-bn-scroll').click(function () {
      let bannerHeight = $('.c-bn-index').height()
      $('html, body').animate({
        scrollTop: bannerHeight
      }, 500, 'swing');
    });
  },
}

$(document).ready(function () {
  page.init();
});