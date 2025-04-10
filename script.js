// one to have animations when the form is submitted ☑️
// one to make the folios pop up when clicked on  ☑️
// also one to make the folios do something when hovered over ✔️
// one to make the answers to the faq pop up when clicked on ☑️
// also animations over the whole site when scrolling ☑️ 


document.addEventListener('DOMContentLoaded', function () {
  /* faq js */
    const accordions = document.querySelectorAll('.accordion');
  // click faq question, answer pops up
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
// when u scroll the elements lag to enter the page giving u the animation.
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

//=== Portfolio page === //
    const openButtons = document.querySelectorAll('[data-popup-target]');
    const closebuttons = document.querySelectorAll('[data-close]');
    
// open popup
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popupId = button.getAttribute('data-popup-target');
      const popup = document.querySelector(popupId);
      console.log("Working for: ", popupId)
      if (popup){
        popup.classList.add('active');
      }
    });
  });

// close popup
  closebuttons.forEach(button => {
    button.addEventListener('click', () => {
      const popup = button.closest('.popup-card');
      popup.classList.remove('active');
    });
  });  
// end of folio page //
});

// contact page 
const form = document.getElementById("contact_form")

form.addEventListener("submit", function(element) { 
  // only works when everything is filled in
  element.preventDefault();

  // simple toast from sweetalert  
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Form Submitted! We'll get back to you ASAP"
  }); 
  form.reset()
}); 