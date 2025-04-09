// imports 
// import gsap from "./gsap-core.js";
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// what fns do we want in the website
// one to have animations when the form is submitted
// one to make the folios pop up when clicked on 
// also one to make the folios do something when hovered over
// one to make the answers to the faq pop up when clicked on ☑️
//  rememeber that we want to be impressionable to impressionable teens so the animations should be modern - animate on scroll
// also animations over the whole site when scrolling ☑️
/* faq java */
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach(button => {
      button.addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
  
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          document.querySelectorAll('.panel').forEach(p => p.style.maxHeight = null);
          const panelHeight = panel.scrollHeight + 'px';
          panel.style.maxHeight = panelHeight;
        }
      });
    });
  });
  
  
  
  /* END FAQ JS */
// ok so if you dont know hwat a listener is, just read up on it on google, the function is pretty straightforward
// u have the variables as the questionn and answer which i think u need to have a css thing called ".faqAnswer or .faqQuestion"
// in thus fileu would use a forEach loop, them make 2 variables with query selector 
// then u would use the event listener from the start and activate it when the item from the for loop(question) is clicked.




// for contact page 
// field validation - do not need because requierd in html does it for me 
// success animation - should be easy just import the library, whats it called
// variable grab 
// const mainElem = document.querySelectorAll('main');

// ScrollSmoother.create({
//     smooth: 1,
//     effects: true,
//     speed: 0.1
// })
// ScrollTrigger.create({
//     trigger: mainElem[0], 
//     start: "top center",
//     end: "bottom top",
//     toggleActions: play, none, none,reverse
// })
// ScrollTrigger.normalizeScroll(true);