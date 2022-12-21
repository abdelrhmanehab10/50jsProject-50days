const faq = document.querySelectorAll(".faq");

faq.forEach(faq=>{
    let openBtn = faq.children[0].children[1].children[0];
    let closeBtn = faq.children[0].children[1].children[1];

    openBtn.addEventListener('click', ()=>{
        faq.classList.add('active');
    })
    
    closeBtn.addEventListener('click', ()=>{
        faq.classList.remove('active');
    })
})