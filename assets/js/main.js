const navbar = document.getElementById('nav-container');
const mobileMenu = document.createElement('div');
let lastScroll = 0;
let isMenuOpen = false;

// Create mobile menu
mobileMenu.className = 'fixed top-0 right-0 h-full w-64 bg-black bg-opacity-95 transform translate-x-full transition-transform duration-300 ease-in-out z-50';
mobileMenu.innerHTML = `
    <div class="p-6 space-y-8 font-['Space_Grotesk']">
        <button class="text-white text-2xl float-right" id="closeMenu">&times;</button>
        <div class="clear-both"></div>
        <a href="#home" class="block text-white hover:text-blue-400 py-2">Home</a>
        <a href="#skills" class="block text-white hover:text-blue-400 py-2">Skills</a>
        <a href="#projects" class="block text-white hover:text-blue-400 py-2">Projects</a>
        <a href="#contact" class="block text-white hover:text-blue-400 py-2">Contact</a>
    </div>
`;
document.body.appendChild(mobileMenu);

// Create hamburger button for mobile
const hamburgerBtn = document.createElement('button');
hamburgerBtn.className = 'md:hidden text-white text-2xl absolute right-4 top-4';
hamburgerBtn.innerHTML = '☰';
navbar.appendChild(hamburgerBtn);

// Toggle mobile menu
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    mobileMenu.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(100%)';
}

hamburgerBtn.addEventListener('click', toggleMenu);
document.getElementById('closeMenu').addEventListener('click', toggleMenu);

// Close menu when clicking menu items
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Handle scroll effects
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        navbar.style.backdropFilter = 'blur(12px)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach((element) => {
    observer.observe(element);
});

document.addEventListener('DOMContentLoaded', () => {
    const icons = ['ruby', 'rails', 'javascript', 'react', 'python', 'nodejs', 'npm', 'html5', 'css3'];
    const container = document.getElementById('floating-icons-container');
    
    function createFloatingIcon() {
        const icon = document.createElement('i');
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        icon.className = `devicon-${randomIcon}-plain floating-icon text-4xl`;
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.animationDuration = `${15 + Math.random() * 10}s`;
        container.appendChild(icon);
        
        icon.addEventListener('animationend', () => {
            icon.remove();
        });
    }

    setInterval(createFloatingIcon, 2000);
    for(let i = 0; i < 9; i++) {
        createFloatingIcon();
    }
});
