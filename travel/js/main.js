(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
} ());

function play(){
    const video = document.querySelector('.video__item');
    document.getElementById('video').innerHTML = '<iframe  class="video__element" src="https://www.youtube.com/embed/URDXZSJZ2ME?autoplay=1" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    video.classList.add('video__item__active');
}

// Burger handler

(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const close = document.querySelector('.header__nav-close');
    
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav__active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('header__nav__active');
    });
}());