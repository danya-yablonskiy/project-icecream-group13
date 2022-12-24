import Swiper from "swiper/swiper-bundle";

//Ініціалізація Swiper
new Swiper('.swiper-1',{
    //безкінченність
    loop: true,
    //Переключення при кліке
    slideToClickedSlide: true,
    //автопрокрутка
    speed: 2000,
    spaceBetween: 50 ,
    centeredSlides: true,

    effect: 'flip',
    flipEffect: {
        slideShadows: true,
        limitRotation: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        
   }
    
    
});

new Swiper('.swiper-2', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type:"bullets",
        clickable: true
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});