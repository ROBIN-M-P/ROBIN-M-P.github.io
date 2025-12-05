// 1. Initialize Icons and Animations
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
    });
});

// 2. Spotlight Effect Logic (Mouse Tracking)
const cards = document.querySelectorAll(".spotlight-card");

document.onmousemove = e => {
    for(const card of cards) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
};

// 3. Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 4. EmailJS Configuration
const PUBLIC_KEY = "Z5t8xpJmng6R4tKno";
const SERVICE_ID = "service_ra6g2qh";
const TEMPLATE_ID = "template_83jeqvl";

emailjs.init(PUBLIC_KEY);

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const statusMsg = document.getElementById('status-msg');

if(contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<div class="loader"></div> Sending...';
        submitBtn.disabled = true;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
            .then(function() {
                submitBtn.innerHTML = 'Sent Successfully!';
                submitBtn.classList.add('bg-green-600', 'text-white');
                statusMsg.classList.remove('hidden');
                statusMsg.classList.add('text-green-400');
                statusMsg.innerText = "Thanks! I'll be in touch soon.";
                contactForm.reset();
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-green-600');
                    statusMsg.classList.add('hidden');
                }, 5000);
            }, function(error) {
                console.log('FAILED...', error);
                submitBtn.innerHTML = 'Failed';
                submitBtn.disabled = false;
                statusMsg.classList.remove('hidden');
                statusMsg.classList.add('text-red-400');
                statusMsg.innerText = "Something went wrong. Please try again.";
            });
    });
}
