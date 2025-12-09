// Preloader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('preloader').classList.add('hidden');
    }, 1000);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Book package function
function bookPackage(packageName, price) {
    alert(`📸 Thank you for your interest in our ${packageName} Package (${price})!\n\n✉️ Contact us at:\n📧 hello@elitephoto.com\n📱 +91 98765 43210\n\n⏰ We'll respond within 2 hours during business hours.\n\nLet's create something extraordinary together!`);
}

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    alert('✅ Thank you for your inquiry!\n\nWe have received your message and will get back to you within 24 hours.\n\n📧 Check your email for confirmation.\n📱 Call us for urgent inquiries: +91 98765 43210');
    event.target.reset();
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.package-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});