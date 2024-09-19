const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
let scrollWith = getScrollbarWidth();

const modalToggle = () => {
    const modal = document.querySelector('.modal');
    const openBtn = document.querySelector('.header__burger-btn');
    const closeBtn = document.querySelector('.modal__close-btn');

    modal.style.transition = 'transform 0.5s';
    openBtn.addEventListener('click', () => {
        modal.classList.add('isActive');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollWith}px`;
    });
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('isActive');
        setTimeout(() => {
            document.body.style.overflow = 'visible';
            document.body.style.paddingRight = ``;
        }, 500);
    });
};

export default modalToggle;
