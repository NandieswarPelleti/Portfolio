// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
});

// Theme Toggle
const themeToggle = document.getElementById('theme-icon');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        body.removeAttribute('data-theme');
        themeToggle.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// Background Music
const musicBtn = document.getElementById('music-btn');
let isPlaying = false;
let audio;

// Initialize audio with your music file
function initializeMusic() {
    if (!audio) {
        audio = new Audio();
        audio.src = 'music/bachground.mp3'; // Fixed filename
        audio.loop = true;
        audio.volume = 0.3;
        
        // Add event listeners for debugging
        audio.addEventListener('loadstart', () => console.log('Audio loading started'));
        audio.addEventListener('canplay', () => console.log('Audio can play'));
        audio.addEventListener('error', (e) => console.log('Audio error:', e));
    }
}

// Add tooltip functionality
musicBtn.addEventListener('mouseenter', () => {
    if (!musicBtn.querySelector('.tooltip')) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = 'Enjoy music while going through my portfolio';
        musicBtn.appendChild(tooltip);
    }
});

musicBtn.addEventListener('mouseleave', () => {
    const tooltip = musicBtn.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
});

musicBtn.addEventListener('click', async () => {
    initializeMusic();
    
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        musicBtn.classList.remove('playing');
        musicBtn.querySelector('i').className = 'fas fa-music';
    } else {
        try {
            await audio.play();
            isPlaying = true;
            musicBtn.classList.add('playing');
            musicBtn.querySelector('i').className = 'fas fa-pause';
            console.log('Music started playing');
        } catch (e) {
            console.log('Audio play failed:', e.message);
            alert('Please interact with the page first to enable audio');
        }
    }
});

// Fallback oscillator music (original function)
function createBackgroundMusic() {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const frequencies = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];
    let currentNote = 0;
    
    function playNote() {
        if (!isPlaying) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequencies[currentNote], audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 2);
        
        currentNote = (currentNote + 1) % frequencies.length;
        
        setTimeout(playNote, 2000);
    }
    
    playNote();
}

// Eye Following Mouse
document.addEventListener('mousemove', (e) => {
    const pupils = document.querySelectorAll('.pupil');
    pupils.forEach(pupil => {
        const eye = pupil.parentElement;
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = Math.min(4, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 20);
        
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Lamp Interaction
const lampContainer = document.querySelector('.lamp-container');
if (lampContainer) {
    lampContainer.addEventListener('click', () => {
        const lamp = document.querySelector('.lamp-head');
        if (lamp) {
            lamp.style.animation = 'none';
            lamp.style.transform = 'rotate(20deg) scale(1.1)';
            
            setTimeout(() => {
                lamp.style.animation = 'lampBob 3s ease-in-out infinite';
                lamp.style.transform = '';
            }, 1000);
        }
    });
}

// Character Reactions
const character = document.querySelector('.character');
if (character) {
    character.addEventListener('click', () => {
        character.style.animation = 'none';
        character.style.transform = 'scale(1.1) rotate(5deg)';
        
        setTimeout(() => {
            character.style.animation = 'characterFloat 6s ease-in-out infinite';
            character.style.transform = '';
        }, 500);
    });
}

// Smooth Scrolling
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = body.getAttribute('data-theme') === 'dark' 
            ? 'rgba(26, 32, 44, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = body.getAttribute('data-theme') === 'dark' 
            ? 'rgba(26, 32, 44, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

console.log('✨ Portfolio Ready! 🎭');
