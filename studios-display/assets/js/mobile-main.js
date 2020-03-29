/*
 * @Author: SkyHro 
 * @Date: 2019-11-07 15:28:05 
 * @Last Modified by: SkyHro
 * @Last Modified time: 2019-11-11 10:24:47
 */
// 移动端JS
var progress = {
  init($) {
    // 获取移动端导航栏按钮
    var $navbarBtn = $('.header > .navbar-btn');
    // 获取移动端导航栏
    var $navbar = $('header > .navbar');
    if ($navbarBtn.length && $navbar) {
      this.navbar($navbarBtn, $navbar);
    }
    // 首页轮播图
    var $indexSwiper = $('#index-swiper');
    if ($indexSwiper.length) {
      new Swiper('#index-swiper', {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '#index-swiper .swiper-pagination'
        },
        navigation: {
          prevEl: '#index-swiper .swiper-button-prev',
          nextEl: '#index-swiper .swiper-button-next'
        }
      })
    }

    // 案例轮播图
    var $caseSwiper = $('#case-swiper');
    if ($caseSwiper.length) {
      new Swiper('#case-swiper', {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        slidesPerView: 2,
        spaceBetween: 12,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '#index-swiper .swiper-pagination'
        },
        navigation: {
          prevEl: '#index-swiper .swiper-button-prev',
          nextEl: '#index-swiper .swiper-button-next'
        }
      })
    }

    // 项目详情页轮播
    var $projectSwiper = $('#project-swiper');
    if($projectSwiper.length) {
      new Swiper('#project-swiper', {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        pagination: {
          el: '#project-swiper .swiper-pagination'
        }
      });
    }

    // 滚动动画
    new WOW().init();

    // fastclick
    FastClick.attach(document.body);
  },
  navbar($navbarBtn, $navbar) {
    $navbarBtn.click(function (e) {
      $navbarBtn.find('.icon').toggleClass('fa-bars').toggleClass('fa-times');
      $navbar.toggleClass('show').toggleClass('hidden');
      e.stopPropagation();
    })
    $(document).click(() => {
      if ($navbarBtn.find('.icon').hasClass('fa-times')) {
        $navbarBtn.find('.icon').toggleClass('fa-bars').toggleClass('fa-times');
        $navbar.toggleClass('show').toggleClass('hidden');
      }
    })
  },
  lazyload() {
    console.log('图片懒加载');
  }
}

Zepto(function ($) {
  progress.init($);
})
