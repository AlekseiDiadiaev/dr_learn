//Мобильное меню
window.addEventListener('DOMContentLoaded', () =>{
    const menuBtn = document.querySelector('.btn__menu'),
          closeBtn = document.querySelector('.header__nav-mobile-close'), 
         mobileMenu = document.querySelector('.header__nav-mobile'),
         promoBtn = document.querySelector('.btn_promo');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('header__nav-mobile_active');
    });
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('header__nav-mobile_active');
    });
});
