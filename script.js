// Detect device
const isMobile = window.innerWidth < 768;
const isSmallMobile = window.innerWidth < 480;

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: isMobile ? 400 : 600,
    once: true,
    offset: isMobile ? 30 : 50,
    disable: false
});

// Initialize Typed.js for Hero Section
const typed = new Typed('#typewriter', {
    strings: [
        'AI Models.',
        'Deep Learning Solutions.',
        'Computer Vision Apps.',
        'Intelligent Futures.',
        'Data-Driven Stories.'
    ],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 1500,
    loop: true
});

// Initialize Lucide Icons
lucide.createIcons();

// Particles.js Configuration — reduced for mobile performance
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": isSmallMobile ? 15 : (isMobile ? 30 : 80),
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#38bdf8"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.2,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": !isSmallMobile,
            "distance": 150,
            "color": "#38bdf8",
            "opacity": 0.1,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": isMobile ? 1 : 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": !isMobile,
                "mode": "grab"
            },
            "onclick": {
                "enable": !isMobile,
                "mode": "push"
            }
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 0.4
                }
            }
        }
    },
    "retina_detect": true
});

// Cursor Glow Effect — desktop only
if (!isMobile) {
    const glow = document.getElementById('cursor-glow');
    document.addEventListener('mousemove', (e) => {
        glow.style.setProperty('--x', e.clientX + 'px');
        glow.style.setProperty('--y', e.clientY + 'px');
        glow.style.opacity = '1';
    });
}

// Navbar Scroll Effect & Back to Top & Progress Bar
const nav = document.querySelector('nav');
const backToTop = document.getElementById('back-to-top');
const scrollProgress = document.getElementById('scroll-progress');

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const scrollPercent = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            scrollProgress.style.width = scrollPercent + '%';

            if (scrollY > 50) {
                nav.classList.add('py-2', 'border-slate-800/50');
                nav.classList.remove('py-4', 'border-transparent');
            } else {
                nav.classList.remove('py-2', 'border-slate-800/50');
                nav.classList.add('py-4', 'border-transparent');
            }

            if (scrollY > 500) {
                backToTop.classList.remove('translate-y-20', 'opacity-0');
                backToTop.classList.add('translate-y-0', 'opacity-100');
            } else {
                backToTop.classList.add('translate-y-20', 'opacity-0');
                backToTop.classList.remove('translate-y-0', 'opacity-100');
            }
            ticking = false;
        });
        ticking = true;
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// AI Chatbot Logic
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatIconOpen = document.getElementById('chat-icon-open');
const chatIconClose = document.getElementById('chat-icon-close');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');
const suggestedButtons = document.querySelectorAll('.chat-suggest');

const knowledgeBase = {
    "projects": "Siddharth has developed several innovative AI projects: 1. AgriIntellect (Tomato Leaf Disease Detection using CNN), 2. HealthPredict (Women's Diabetes Risk Analysis), 3. AutoVision (Vehicle Detection using CNN), and 4. iInsight (iPhone Market Data Analysis using Power BI).",
    "skills": "Siddharth is proficient in Python, Java, Deep Learning (TensorFlow/Keras), Computer Vision, and Cloud Computing (AWS).",
    "education": "Siddharth is currently pursuing a B.E. in AI & Data Science at Dr. D. Y. Patil Institute of Technology (2024-2027). He previously completed a Diploma at K.K. Wagh Polytechnic. He has held internship positions at Syntecxhub, Codec Technologies, and V Analytics Pvt. Ltd.",
    "research": "Siddharth has published a research paper titled 'DeepAgroNet: CNN-Based Tomato Disease Detection' at the IEEE ESCI Conference in March 2026. The paper focuses on building advanced CNN models for automated leaf disease detection.",
    "contact": "You can reach Siddharth at siddharthgaykhe08@gmail.com or via his LinkedIn profile.",
    "resume": "You can download his resume by clicking the 'Download CV' button in the hero section.",
    "default": "That's a great question! I'm trained on Siddharth's portfolio. Try asking about his 'projects', 'skills', or 'research paper'."
};

function toggleChat() {
    chatWindow.classList.toggle('active');
    chatIconOpen.classList.toggle('hidden');
    chatIconClose.classList.toggle('hidden');
}

function appendMessage(role, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'flex gap-3 ' + (role === 'user' ? 'flex-row-reverse' : '');
    
    const avatar = document.createElement('div');
    avatar.className = `w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs ${role === 'user' ? 'bg-sky-500 text-white' : 'bg-slate-800 text-sky-400'}`;
    avatar.innerText = role === 'user' ? 'You' : 'AI';
    
    const content = document.createElement('div');
    content.className = `${role === 'user' ? 'bg-sky-500/20 text-sky-100 border border-sky-500/30' : 'bg-slate-800/80 text-slate-300'} rounded-2xl p-4 text-sm max-w-[80%] leading-relaxed`;
    content.innerText = text;
    
    msgDiv.appendChild(avatar);
    msgDiv.appendChild(content);
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChat() {
    const text = chatInput.value.trim().toLowerCase();
    if (!text) return;
    
    appendMessage('user', chatInput.value);
    chatInput.value = '';
    
    setTimeout(() => {
        let response = knowledgeBase.default;
        
        if (text.includes('project') || text.includes('work')) response = knowledgeBase.projects;
        else if (text.includes('skill') || text.includes('know')) response = knowledgeBase.skills;
        else if (text.includes('study') || text.includes('education') || text.includes('college')) response = knowledgeBase.education;
        else if (text.includes('research') || text.includes('paper') || text.includes('ieee')) response = knowledgeBase.research;
        else if (text.includes('contact') || text.includes('email') || text.includes('reach')) response = knowledgeBase.contact;
        else if (text.includes('cv') || text.includes('resume')) response = knowledgeBase.resume;
        
        appendMessage('ai', response);
    }, 600);
}

chatToggle.addEventListener('click', toggleChat);
chatSend.addEventListener('click', handleChat);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChat();
});

suggestedButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        chatInput.value = btn.innerText;
        handleChat();
    });
});

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    document.body.classList.add('overflow-hidden');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);

mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Contact Form Handling (Real Submission)
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button');
    const originalText = btn.innerText;
    
    // Check if user has replaced the placeholder FORM_ID
    if (form.action.includes('YOUR_FORM_ID')) {
        alert('Form configuration incomplete! Please set your Formspree ID in index.html.');
        return;
    }

    btn.innerText = 'Sending...';
    btn.disabled = true;

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            btn.innerText = 'Message Sent!';
            btn.classList.replace('bg-sky-500', 'bg-emerald-500');
            form.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.replace('bg-emerald-500', 'bg-sky-500');
                btn.disabled = false;
            }, 3000);
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        btn.innerText = 'Error Sending!';
        btn.classList.replace('bg-sky-500', 'bg-red-500');
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.replace('bg-red-500', 'bg-sky-500');
            btn.disabled = false;
        }, 3000);
    }
});

const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();
