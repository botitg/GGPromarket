const swiper = new Swiper('.swiper1', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
        dynamicBullets: true,
    },

    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },

    navigation: {
        nextEl: '.btns__next1',
        prevEl: '.btns__prev1',
    },
});
const introSwiper = new Swiper('.intro-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: '.intro-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.intro-next',
        prevEl: '.intro-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
