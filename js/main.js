//swiper

var swiperAboutUs = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
});

//parallax header img
var headerImg = document.getElementById('headerImg');
var parallaxInstance = new Parallax(headerImg);