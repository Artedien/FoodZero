import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const calroiesSwiper = () => {
    const swiper = new Swiper('.calories__swiper', {
        slidesPerView: '1',
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.calories__swiper-nav-btn-next',
            prevEl: '.calories__swiper-nav-btn-prev'
        }
    });
};

export default calroiesSwiper;
