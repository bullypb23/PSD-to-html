// mobile news navigation
const news = document.querySelectorAll('.mobile-news');
const newsDots = document.querySelectorAll('.news-menu div');

// guide navigation
const guideDots = document.querySelectorAll('.guide-menu div');
const guides = document.querySelectorAll('.guide');

// header desktop navigation menu
const navItems = document.querySelectorAll('.header-navigation ul li a');

// mobile menu
const menu = document.querySelector('.header-img3 img');
const backdrop = document.querySelector('.backdrop');
const mobileNavigation = document.querySelector('.header-navigation');
const exit = document.querySelector('.exit');


let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let newsIndex = 1;
showNews(newsIndex);

function plusIndex(n) {
    newsIndex += n;
    showNews(newsIndex);
}

function minusIndex(n) {
    newsIndex += n;
    showNews(newsIndex);
}

function currentIndex(n) {
    newsIndex = n;
    showNews(newsIndex);
}

function showNews(index) {
    if (isMobile) {
        let i;
        if (index > news.length) {
            newsIndex = 1
        }
        if (index < 1) {
            newsIndex = news.length;
        }
        for(i = 0; i < news.length; i++) {
            news[i].style.display = 'none';
            newsDots[i].classList.remove('active');
            news[newsIndex-1].style.display = 'block';
            newsDots[newsIndex-1].classList.add('active');
        }
    }
}

function handleActiveClass(e) {
    if (isMobile) {
        for (let i = 0; i < navItems.length; i++) {
            if (e.target === navItems[i]) {
                e.target.classList.toggle('active');
                if (e.target.children[0]) {
                    e.target.children[0].classList.toggle('fa-angle-down');
                    e.target.children[0].classList.toggle('fa-angle-up');
                }
            }
        }
    } else {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }
}

let guideIndex = 1;

function currentGuideIndex(n) {
    guideIndex = n;
    handleGuide(guideIndex);
}

function handleGuide(index) {
    if (isMobile) {
        for (let i = 0; i < guideDots.length; i++) {
            guides[i].style.display = 'none';
            guideDots[i].classList.remove('active');
        }
        guides[2*index-2].style.display = 'flex';
        guides[2*index-1].style.display = 'flex';
        guideDots[index-1].classList.add('active');
    }
}

function openMobileMenu() {
    backdrop.classList.add('active');
    mobileNavigation.classList.add('active');
    exit.classList.add('active');
}

function closeMobileMenu() {
    backdrop.classList.remove('active');
    mobileNavigation.classList.remove('active');
    exit.classList.remove('active');
}

navItems.forEach(navItem => navItem.addEventListener('click', handleActiveClass));

menu.addEventListener('click', openMobileMenu);

exit.addEventListener('click', closeMobileMenu);