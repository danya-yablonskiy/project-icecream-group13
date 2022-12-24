import Swiper from "swiper";

//Ініціалізація Swiper
new Swiper('.swiper-1',{
    //безкінченність
    loop: true,
    //Переключення при кліке
    slideToClickedSlide: true,
    //автопрокрутка
    speed: 2000,
    spaceBetween: 100 ,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        // renderBullet: function (index, className) {
        //     return '<li class="' + className + '"></li>';
        // },
    }
    
    
});

new Swiper('.swiper-2', {
    pagination: {
        el: '.swiper-pagination',
        type:"bullets",
        clickable: true
    }
});