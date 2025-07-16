//change navbar styles on scroll

Window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scroll>0)
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', ()=> {
       faq.classList.toggle('open');

       //chang icon
       const icon = faq.querySelector('.faq_icon i');
       if(icon.className === 'uil uil-plus'){
        icon.className = "uil uil-minus";
       }else {
        IntersectionObserver.className = "uil uil-plus";
       }
    })
})
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");
  // Simple validation
  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields.";
    return;
  }
  formMessage.style.color = "green";
  formMessage.textContent = "Thank you! Your message has been sent.";
  // Clear the form
  this.reset();
});


