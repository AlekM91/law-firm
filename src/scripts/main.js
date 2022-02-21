import { intersection } from 'lodash';
import '../styles/styles.scss';

if(module.hot) {
    module.hot.accept();
}

// Hamburger Menu
let hamburgerMenu = document.querySelector('.hamburger-menu');
let mainNav = document.querySelector('.main-nav ul');
let body = document.querySelector('body')
hamburgerMenu.addEventListener('click', function(e) {
    hamburgerMenu.classList.toggle('hamburger-menu-active');
    mainNav.classList.toggle('menu-active');
    body.classList.toggle('no-scroll');
    
})

// Smooth Scroll
mainNav.addEventListener('click', function(e) {
    e.preventDefault();
    if(e.target.classList.contains('nav-link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
        mainNav.classList.remove('menu-active');
        hamburgerMenu.classList.remove('hamburger-menu-active');
        body.classList.remove('no-scroll');
    }
})

// Sticky Navigation
function sticky() {
    let header = document.querySelector('header')
    let navHeight = mainNav.getBoundingClientRect().height;
    let observer = new IntersectionObserver(function(entries, observer){
        const [entry] = entries;
        document.querySelector('.main-nav').classList.remove('sticky')
        if(!entry.isIntersecting){
            document.querySelector('.main-nav').classList.add('sticky')
        }
        
    }, {
        root: null,
        threshold: 0,
        rootMargin: `-${navHeight}px`
    });
    observer.observe(header);
}
sticky();

// Elements on scroll
function scrollElement() {
    let sections = document.querySelectorAll('section');
    let sectionObserver = new IntersectionObserver(function(entries, observer) {
        let [entry] = entries;
        if(!entry.isIntersecting) return 
        entry.target.classList.remove('section-hidden');
        observer.unobserve(entry.target);
    }, {
        root: null,
        threshold: 0.1
    })
    sections.forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    })
}
// scrollElement();


// Slider
function slider() {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider-button-left');
    const btnRight = document.querySelector('.slider-button-right');
    const sliderDots = document.querySelector('.slider-dots');
    let currentSlide = 0;
    const maxSlides = slides.length;

    function createDot() {
        slides.forEach((slide, i) => {
            sliderDots.insertAdjacentHTML('beforeend', `<button class="slider-dot" data-slide="${i}"></button>`)
        }) 
    }
    function activeDot(slide) {
        document.querySelectorAll('.slider-dot').forEach(dot => dot.classList.remove('slider-dot-active'));
        document.querySelector(`.slider-dot[data-slide="${slide}"]`).classList.add('slider-dot-active');
    }

    function goToSlide(slide) {
        slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
        activeDot(slide)
    }
    
    createDot()
    goToSlide(currentSlide);

    function nextSlide() {
        currentSlide === maxSlides - 1 ? currentSlide = 0 : currentSlide++;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide == 0 ? currentSlide = maxSlides - 1 : currentSlide--;
        goToSlide(currentSlide);
    }

    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
    
    document.addEventListener('keydown', function(e) {
        e.preventDefault()
        if(e.code === "ArrowRight" ) {
            nextSlide();
        } else if(e.code === "ArrowLeft" ) {
            prevSlide();
        } 
    });

    sliderDots.addEventListener('click', function(e) {
        if(e.target.classList.contains('slider-dot')) {
            currentSlide = +e.target.dataset.slide;
            goToSlide(currentSlide);
            
        }
    });

    // Drag effect optional
}
slider();




