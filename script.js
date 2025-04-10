// imports 
// what fns do we want in the website

// one to have animations when the form is submitted
// one to make the folios pop up when clicked on ⬅️ this 
// also one to make the folios do something when hovered over
// one to make the answers to the faq pop up when clicked on ☑️
// also animations over the whole site when scrolling ☑️ ❌


document.addEventListener('DOMContentLoaded', function () {
  /* faq js */
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
  /* END FAQ JS */

// ========== gsap stuff ==============//
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".fade-in").forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      duration: 0.89
    });
  });
                        

// The function we need there minimum is one to make the cards he made "popup"
// so how would we make it? 
// okay, the first one would be a listener for when the card is clicked
// we would need 2 variables, 1 as the getter for the card 
// 1 for the actual popup. 
// Then we would have an if statement that asks if the card has popped up ]
// (second variable) the we make it active (show the popup)

// the other is when the close button is clicked it should close the popup
// but first the popup function should work before we worry abt that

//=== Portfolio page === //
    const openButtons = document.querySelectorAll('[data-popup-target');
    const closebuttons = document.querySelectorAll('[data-close]');


// open popup
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popupid = button.getAttribute('data-popup[-target');
      const popup = document.querySelector(popupid);
      popup.classList.add('active');
    })
  })

// close popup
  closebuttons.forEach(button => {
    button.addEventListener('click', () => {
      const popup = button.closest('.popup-card');
      popup.classList.remove('active');
    })

  
});  

// end of folio page


// content page 
    

});
  
  
  




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