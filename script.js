// Portfolio Loaded
console.log("Welcome to Fazeel Shaikh's Portfolio");

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));

        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="all 0.8s ease";
    observer.observe(card);
});

// Current Year in Footer
const footer = document.querySelector("footer p");

if(footer){
    footer.innerHTML =
    © ${new Date().getFullYear()} Fazeel Shaikh | All Rights Reserved;
}
