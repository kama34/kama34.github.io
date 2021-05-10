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
    document.getElementById('video').innerHTML = '<iframe  class="video__element" src="https://www.youtube.com/embed/URDXZSJZ2ME?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    video.classList.add('video__item__active');
}

// Burger handler
(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const close = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav__active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('header__nav__active');
    });
    if (window.innerWidth < 768) {
        for (let i = 0; i < menuLinks.length; i++){
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav__active');
            });
        }
    }
}());

// Scroll to anchors
(function(){
    const smoothScroll = function (targetEl, duration){
        const headrElHeight = document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headrElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t,b,c,d){
            t /= d / 2;
            if (t < 1) return c / 2 * t * t +b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime){
            if (startTime == null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    };

    const scrollTo = function() {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function() {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

// Scrolling animation
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 6;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } 
            else {
                if (!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');
                }  
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}

// Language change
window.onload = function(){
    if (window.location.href.indexOf("test") <= -1) {
        const defaultLanguage = "ru"
        const langEn_button = document.querySelector(".header__lang-en");
        const langRu_button = document.querySelector(".header__lang-ru");
        

        
        langEn_button.addEventListener("click", () => {
            const langRu_elements = document.querySelectorAll(".lang-ru");
            const langEn_elements = document.querySelectorAll(".lang-en");
            const langElements_count = langEn_elements.length;
            langEn_button.classList.add('lang_active');
            langRu_button.classList.remove('lang_active');
            for(var i = 0; i < langElements_count; i++){
                langEn_elements[i].style.display = "inline-block";
                langRu_elements[i].style.display = "none";
            }
        });
        langRu_button.addEventListener("click", () => {
            const langRu_elements = document.querySelectorAll(".lang-ru");
            const langEn_elements = document.querySelectorAll(".lang-en");
            const langElements_count = langEn_elements.length;
            langRu_button.classList.add('lang_active');
            langEn_button.classList.remove('lang_active');
            for(var i = 0; i < langElements_count; i++){
                langEn_elements[i].style.display = "none";
                langRu_elements[i].style.display = "inline-block";
            }
        });
    }
}