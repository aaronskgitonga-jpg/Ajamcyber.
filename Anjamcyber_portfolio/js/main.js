// Hero Text Slider

const texts = [
    "Professional Cyber Services",
    "Electronics Sales & Repairs",
    "Networking & CCTV Solutions",
    "Fast Printing & Scanning",
    "Reliable Digital Services"
];

let current = 0;

setInterval(() => {

    current++;

    if(current >= texts.length){
        current = 0;
    }

    document.getElementById("changing-text")
    .textContent = texts[current];

},3000);


// Scroll Animations

ScrollReveal().reveal('.hero-content',{
    distance:'50px',
    duration:1200,
    origin:'left'
});

ScrollReveal().reveal('.hero-image',{
    distance:'50px',
    duration:1200,
    origin:'right'
});

ScrollReveal().reveal('.why-card',{
    interval:200
});

ScrollReveal().reveal('.service-box',{
    interval:200
});

ScrollReveal().reveal('.product-card',{
    interval:200
});

ScrollReveal().reveal('.testimonial-card',{
    interval:200
});

ScrollReveal().reveal('.contact-card',{
    interval:200
});