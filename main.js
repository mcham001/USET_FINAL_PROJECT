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
