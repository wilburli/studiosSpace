(function () {

  // 首页轮播
  const $banner = $('#banner-swiper');
  if ($($banner).length) {
    var swiper = new Swiper('#banner-swiper', {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }
    });
  };

  // 服装定制轮播
  const projectOrdering = $('#project-ordering');
  if (projectOrdering.length) {
    var swiper = new Swiper('#project-ordering', {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      loop: true,
      slidesPerView: 4,
      spaceBetween: 15,
      slideToClickedSlide: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }
    });
  }

  // 公司简介轮播
  const introduceSwiper = $('#introduce-swiper');
  if (introduceSwiper.length) {
    var swiper = new Swiper('#introduce-swiper', {
      autoplay: {
        delay: 1500,
        disableOnInteraction: false
      },
      loop: true,
      slidesPerView: 4,
      spaceBetween: 12,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }
    });
  }

  // 产品详情页图片轮播
  var projectDetail = $('#project-detail');
  if (projectDetail.length) {
    var thumbSwiper = new Swiper('.thumbnail', {
      spaceBetween: 10,
      slidesPerView: 4,
      watchSlidesVisibility: true //防止不可点击
    });
    var swiper = new Swiper('#project-detail', {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      // effect: 'slide',
      thumbs: {
        swiper: thumbSwiper
      }
    });
  }

  // 百度地图
  var map = $('#map-container');
  if (map.length) {
    // 百度地图API功能
    var sContent =
      "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>公司名称</h4>" +
      "<img style='float:right;margin:4px' id='imgDemo' src='../assets//images//project-ordering.jpg' width='139' height='104' title='公司名称'/>" +
      "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>公司描述信息</p>" +
      "</div>";
    var map = new BMap.Map("map-container");
    var point = new BMap.Point(120.598646,30.042586);
    var marker = new BMap.Marker(point);
    var infoWindow = new BMap.InfoWindow(sContent, {
      width: 500,
      height: 130
    });  // 创建信息窗口对象
    map.centerAndZoom(point, 15);
    map.addOverlay(marker);
    map.openInfoWindow(infoWindow, point);
    marker.addEventListener('click', function() {
      map.openInfoWindow(infoWindow, point);
    });
  }

}());