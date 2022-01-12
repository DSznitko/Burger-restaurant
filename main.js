



// SLIDER BURGERS ANIMATION
const burgerImg = document.querySelector(".best-burgers");
const burgerName = document.querySelector(".burger-name");

const sliderElements = [{img: "grafiki/bestsellers/classic-burger.jpg", text: "Classsic Burger"}, {img: "grafiki/bestsellers/crispy-bacon.jpg", text: "Crispy Bacon" }, { img: "grafiki/bestsellers/double-cheese king.jpg", text: "Double Cheese"}];

let index = 0;

const sliderBurgers = () => {
  index++;
  if (index === sliderElements.length) {
    index = 0;
  }
  burgerImg.src = sliderElements[index].img;
  burgerName.textContent = sliderElements[index].text;
  
}

setInterval(sliderBurgers, 5000)


// SOCIAL MEDIA ANIMATION & NAV- LINKS
gsap.fromTo(".slider-bestseller", {scale: 0}, {scale:1, duration: 1, delay: 1.5, ease: "power1.in"})

 gsap.fromTo(".nav-links",  {y:"-400%"},  { y:0, duration: 0.8,  stagger: .25, ease: "bounce"});

// ABOUT US SECTION ANIMATIONS

const opinionTl = gsap.timeline();

opinionTl.fromTo(".about-title", {y:-50, opacity:0}, {y:0, opacity:1, ease: "power4.inOut", duration: 1});
opinionTl.fromTo(".about-text", {x:50, opacity:0, }, {x:0, opacity:1,  ease: "elastic.inOut(1, 0.3)" , duration: 0.75});
opinionTl.fromTo(".opinions", {y: 200, opacity:0}, {y: 0, opacity:1, duration: 0.75, ease:"bounce.out" });
opinionTl.fromTo(".client-card", {opacity:0, y: 25}, {opacity: 1, y:0,  duration: 1, ease:"power4.in", stagger: 0.5});


// DELIVERY & OPEN HOURS

const deliveryTl = gsap.timeline()

deliveryTl.fromTo(".delivery-title", {y:-100, opacity: 0}, {y: 0, opacity: 1, duration: 0.75, ease: "power3.inOut"})
deliveryTl.fromTo(".hours", {x:-100, opacity: 0}, {x:0, opacity:1, duration: 1, ease: "back.inOut(1.7)"})
deliveryTl.fromTo(".delivery-info", {x:100, opacity: 0}, {x:0, opacity:1, duration: 1, ease: "back.inOut(1.7)"}, "<");
deliveryTl.fromTo(".hours-list", {y:200, rotation: "45deg", opacity:0}, {y: 0, rotation: "0deg", opacity:1, duration:0.55, stagger: 0.10, ease:"expo.in"})
deliveryTl.fromTo(".delivery-hours", {y:200, rotation: "-45deg", opacity:0}, {y: 0, rotation: "0deg", opacity:1, duration:0.55, stagger: 0.10, ease:"expo.in"}, "<")
deliveryTl.fromTo(".free-delivery", {y:50, opacity:0}, {y:0, opacity:1, duration: 0.5, ease: "power4.inOut"})
deliveryTl.fromTo(".important", {y:-60, opacity:0}, {y:0, opacity:1, duration: 0.5, ease: "bounce.out"})
deliveryTl.fromTo(".important", {scale:1, }, {scale: 1.1, duration: 0.5, ease: "power2.in", repeat: -1, yoyo: true}, "<")





  // BURGERS MENU ANIMATION

  const tl = new TimelineMax

  tl.to(".classic-burger", {x: 0, opacity:1, duration: 2, ease: "power2" });
  tl.to(".double-cheese", {x: 0, opacity: 1, duration: 2, ease: "power2"}, "-=2");
  tl.to(".crispy-bacon", {y:0, opacity:1, duration:1, ease: "bounce"}, "-=1");

  // CHICKEN BURGERS APPEAR ANIMATION 

 gsap.registerPlugin(ScrollTrigger);

 gsap.fromTo(".garlic-chicker", {opacity: 0, y: 300}, {opacity:1, y:0, duration: 1, delay: .5, ease: "power4.out", scrollTrigger: {
   trigger: ".chicken-burgers",
   start: "top 20%",
   end: "80%",
   
 }});

 gsap.fromTo(".mcchicken", {opacity: 0, y: 300}, {opacity:1, y:0, duration: 1, delay: .8, ease: "power4.out", scrollTrigger: {
   trigger: ".chicken-burgers",
   start: "top 20%",
   end: "80%",
   
 }});

 gsap.fromTo(".crispy-chicken", {opacity: 0, y: 300}, {opacity:1, y:0, duration: 1, ease: "power4.out",  scrollTrigger: {
   trigger: ".chicken-burgers",
   start: "top 20%",
   end: "80%",
  
 }});

// ADDIOTIONS ANIMATION

gsap.fromTo(".french-fries", {y: 100, opacity:0}, {y: 0, opacity:1, duration: 1, ease: "power1.out", scrollTrigger: {
  trigger: ".additions",
  start: "top 20%",
  
}});
gsap.fromTo(".sweet-potatoes", {y: 100, opacity:0}, {y:0, opacity:1, duration: 1, ease: "power1.out", delay: .3, scrollTrigger: {
  trigger: ".additions",
  start: "top 20%",
  
}});
gsap.fromTo(".onion-rings", {y: 100, opacity:0}, {y:0, opacity:1, duration: 1, ease: "power1.out", delay: .4, scrollTrigger: {
  trigger: ".additions",
  start: "top 20%",
  
}});


// COOKIES ANIMATION

const cookieTl = gsap.timeline()

cookieTl.fromTo(".cookie-wrapper", {scale: 0, opacity:0}, {scale: 1, opacity:1, duration:1, delay: 3.5, ease: "elastic.out(1, 1)"})
cookieTl.fromTo(".cookie", {x: -80, rotation: "-45deg"}, {x: 0, rotation: "0deg", duration: 0.75, ease: "back.out(1.4)"})
cookieTl.fromTo(".title-text", {y: -50, opacity:0}, {y: 0, opacity:1, duration: 0.75, ease: "power1.in"},"<")
cookieTl.fromTo(".policy", {x:50, opacity:0}, {x: 0, opacity:1, duration: 0.75, ease:"power1.in"}, "<")
cookieTl.fromTo(".akcept-cookies", {x: 50, opacity:0}, {x: 0, opacity:1, duration: 0.75, ease: "power2.in"}, "<")
cookieTl.fromTo(".cookie", {y: 0, rotation: "0deg"}, {y: 40, rotation: "45deg", yoyo: "true", duration: 0.75, ease: "power2.in", repeat: -1});

// DRINKS AND SOUCES ANIMATION

gsap.fromTo(".sauces-main", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 0.75, ease: "power1.in", scrollTrigger: {
  trigger: ".sauces-drinks",
  start: "top 20%"
}});
gsap.fromTo(".drinks-main", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 0.75, ease: "power1.in", scrollTrigger: {
  trigger: ".sauces-drinks",
  start: "top 20%"
}});
gsap.fromTo(".sauces-list", {x: -200, opacity: 0}, {x: 0, opacity: 1, duration: 0.5, stagger: 0.20, delay:0.75, ease: "power1.in", scrollTrigger: {
  trigger: ".sauces-drinks",
  start: "top 20%"
}});
gsap.fromTo(".drinks-list", {x: 200, opacity: 0}, {x: 0, opacity: 1, duration: 0.5, stagger: 0.20, delay:0.75, ease: "power1.in", scrollTrigger: {
  trigger: ".sauces-drinks",
  start: "top 20%"
}});



// COOKIES BTN AKCEPT
const cookiBtn = document.querySelector(".akcept-cookies");

cookiBtn.addEventListener("click", () => {
gsap.to(".cookie-wrapper", {y: 50, opacity:0, pointerEvents: "none", duration: 0.75, ease: "power2.in" })
});




//BURGER-MENU ANIMATION
const burgerNav = document.querySelector(".burger-nav");
const menuMobile = document.querySelector(".navigation");

const menuAnimation = () => {
  burgerNav.classList.toggle("active");
  menuMobile.classList.toggle("on");
  const navLinks = document.querySelectorAll(".nav-links");
gsap.fromTo(navLinks, {x: "600%"  }, {x: "0%",  stagger: 0.10, duration: 0.4, ease: "power1.in"})
  }



burgerNav.addEventListener("click", menuAnimation)