const btnNav = document.querySelector(".btn-mobile-nav");
const HeaderEL = document.querySelector(".header");

btnNav.addEventListener('click', function () {
  HeaderEL.classList.toggle("nav-open");
});
////////////////////////////////////////
// Smooth scrolling animation

const allLink = document.querySelectorAll('a:link');

allLink.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    // Scroll back to top
    if (href === "#") window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // trượt xuống những link khác
    if (href !== "#" && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //  Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      HeaderEL.classList.toggle("nav-open");
    }
  });
})

/////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  if(ent.isIntersecting === false){
    document.body.classList.add('sticky');
  }

  if(ent.isIntersecting){
    document.body.classList.remove('sticky');
  }
}, {
  // In the viewport
  // root 
  root: null,
  threshold: 0,
  rootMargin: '-80px'
});
obs.observe(sectionHeroEl);