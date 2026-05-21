const leftbutton = document.getElementById("left-button")
const rightbutton  = document.getElementById("right-button")
const container = document.getElementById("cardscontainer")
rightbutton.addEventListener("click",()=>{
    container.scrollTo({
        left:850,
        behavior:'smooth'
    })
    
    rightbutton.style.display  = "none"; 
    
    leftbutton.style.display  = "block"; 
})
leftbutton.addEventListener("click",()=>{
    container.scrollTo({
        left:-850,
        behavior:'smooth'
    })
    
    leftbutton.style.display  = "none"; 
    
    rightbutton.style.display  = "block";
})
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
  
      question.addEventListener('click', () => {
        // Toggle the current item
        item.classList.toggle('active');
  
        // Close other items if active
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
      });
    });
  });
  