//swiper

var swiperAboutUs = new Swiper('.swiperAboutUs', {
    pagination: {
      el: '.swiperAboutUs-pagination',
      dynamicBullets: true,
    },
});

var swiperEvents = new Swiper('.swiperEvents', {
  direction: 'vertical',
  pagination: {
    el: '.swiperEventsPagination',
    dynamicBullets: true,
  },
});



//parallax header img
var headerImg = document.getElementById('headerImg');
var parallaxInstance = new Parallax(headerImg);