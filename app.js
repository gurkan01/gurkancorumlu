/* ==========================================================================
   GÜRKAN ÇORUMLU PORTFOLIO JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --------------------------------------------------
    // 0. MULTI-LANGUAGE SYSTEM (TR/EN) WITH AUTO-DETECTION
    // --------------------------------------------------
    const langButtons = document.querySelectorAll('.lang-btn');
    
    const setLanguage = (lang) => {
        document.documentElement.classList.remove('lang-tr', 'lang-en');
        document.documentElement.classList.add(`lang-${lang}`);
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('preferred-lang', lang);
        
        // Update all toggle buttons state (desktop and mobile)
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    // Detect language: LocalStorage -> Browser Language -> Default 'tr'
    let preferredLang = localStorage.getItem('preferred-lang');
    if (!preferredLang) {
        const browserLang = navigator.language || navigator.userLanguage;
        preferredLang = browserLang.startsWith('en') ? 'en' : 'tr';
    }
    
    setLanguage(preferredLang);

    // Add click event listeners to all language selector buttons
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // --------------------------------------------------
    // 0.5 DYNAMIC HOMEPAGE RENDERING FROM DATABASE
    // --------------------------------------------------
    const homeProjectsGrid = document.getElementById('home-projects-grid');
    const homeJourneyTrack = document.getElementById('home-journey-track');

    if (homeProjectsGrid && window.db) {
        const assets = window.db.getAssets().slice(0, 3); // show top 3 on homepage
        homeProjectsGrid.innerHTML = '';
        assets.forEach(asset => {
            const card = document.createElement('div');
            card.className = `project-card ${asset.tagClass === 'gold' ? 'featured' : ''}`;
            card.setAttribute('data-id', asset.id);
            card.innerHTML = `
                <div class="project-edition-tag ${asset.tagClass}">${asset.edition}</div>
                <div class="project-img-container">
                    <img src="${asset.image}" alt="${asset.title}" class="project-img">
                    <div class="project-overlay"></div>
                </div>
                <div class="project-body">
                    <h3 class="project-title">${asset.title}</h3>
                    <p class="project-desc tr-text">${asset.descTR}</p>
                    <p class="project-desc en-text">${asset.descEN}</p>
                    <ul class="project-features tr-text">
                        ${asset.featuresTR.map(f => `<li><i class="fa-solid fa-circle-chevron-right"></i> ${f}</li>`).join('')}
                    </ul>
                    <ul class="project-features en-text">
                        ${asset.featuresEN.map(f => `<li><i class="fa-solid fa-circle-chevron-right"></i> ${f}</li>`).join('')}
                    </ul>
                    <div class="project-footer">
                        <span class="project-status tr-text">${asset.categoryTR.toUpperCase()}</span>
                        <span class="project-status en-text">${asset.categoryEN.toUpperCase()}</span>
                        <a href="details.html?id=${asset.id}" class="btn btn-card ${asset.tagClass === 'gold' ? 'gold-btn' : ''} tr-text">Detayları Gör <i class="fa-solid fa-angle-right"></i></a>
                        <a href="details.html?id=${asset.id}" class="btn btn-card ${asset.tagClass === 'gold' ? 'gold-btn' : ''} en-text">View Details <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            `;
            homeProjectsGrid.appendChild(card);
        });
    }

    if (homeJourneyTrack && window.db) {
        const journey = window.db.getJourney();
        homeJourneyTrack.innerHTML = '';
        journey.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = `journey-card ${index === 0 ? 'active' : ''}`;
            card.innerHTML = `
                <div class="journey-header">
                    <span class="journey-years">${item.years}</span>
                    <h3 class="journey-role tr-text">${item.roleTR}</h3>
                    <h3 class="journey-role en-text">${item.roleEN}</h3>
                    <span class="journey-company tr-text">${item.companyTR}</span>
                    <span class="journey-company en-text">${item.companyEN}</span>
                </div>
                <div class="journey-body">
                    <p class="tr-text">${item.descTR}</p>
                    <p class="en-text">${item.descEN}</p>
                </div>
            `;
            homeJourneyTrack.appendChild(card);
        });
    }

    // --------------------------------------------------
    // 1. DYNAMIC NAVIGATION EFFECT
    // --------------------------------------------------
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active link highlighting on scroll
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // --------------------------------------------------
    // 2. MOBILE DRAWER SYSTEM
    // --------------------------------------------------
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const mobileClose = document.querySelector('.mobile-close');
    const drawerLinks = document.querySelectorAll('.drawer-links a');

    const toggleDrawer = () => {
        mobileDrawer.classList.toggle('open');
    };

    mobileToggle.addEventListener('click', toggleDrawer);
    mobileClose.addEventListener('click', toggleDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
        });
    });

    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileDrawer.classList.contains('open') && 
            !mobileDrawer.contains(e.target) && 
            !mobileToggle.contains(e.target)) {
            mobileDrawer.classList.remove('open');
        }
    });

    // --------------------------------------------------
    // 3. CORE EXPERTISE SLIDER (CHARACTER STYLE SELECTOR)
    // --------------------------------------------------
    const badges = document.querySelectorAll('.selector-badge');
    const details = document.querySelectorAll('.role-details');
    const avatarFrame = document.querySelector('.avatar-frame');

    badges.forEach(badge => {
        badge.addEventListener('click', () => {
            const targetRole = badge.getAttribute('data-role');
            
            // Update active state of selector badges
            badges.forEach(b => b.classList.remove('active'));
            badge.classList.add('active');
            
            // Switch display panels with smooth fade
            details.forEach(panel => {
                panel.classList.remove('active');
                if (panel.getAttribute('id') === `role-${targetRole}`) {
                    panel.classList.add('active');
                }
            });

            // Interactive flash effect on avatar frame
            avatarFrame.style.transform = 'scale(0.96)';
            avatarFrame.style.filter = 'brightness(1.5) contrast(1.2)';
            
            setTimeout(() => {
                avatarFrame.style.transform = 'scale(1)';
                avatarFrame.style.filter = 'none';
            }, 300);
        });
    });

    // --------------------------------------------------
    // 4. CAREER JOURNEY CAROUSEL (LOCACIONES JUGABLES SLIDER)
    // --------------------------------------------------
    const track = document.querySelector('.journey-track');
    const cards = document.querySelectorAll('.journey-card');
    const prevBtn = document.querySelector('.journey-btn.prev');
    const nextBtn = document.querySelector('.journey-btn.next');
    
    let currentIndex = 0;

    const getCardsPerView = () => {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    };

    const updateSlider = () => {
        const cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, cards.length - cardsPerView);
        
        // Clamp index
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        if (currentIndex < 0) currentIndex = 0;

        // Calculate card width + gap (24px gap defined in CSS)
        const cardWidth = cards[0].getBoundingClientRect().width;
        const offset = currentIndex * (cardWidth + 24);
        
        track.style.transform = `translateX(-${offset}px)`;

        // Highlight active cards in view
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index >= currentIndex && index < currentIndex + cardsPerView) {
                if (index === currentIndex) {
                    card.classList.add('active'); // highlight the primary visible item
                }
            }
        });

        // Disable buttons if at boundaries
        prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
        prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        
        nextBtn.style.opacity = currentIndex === maxIndex ? '0.4' : '1';
        nextBtn.style.pointerEvents = currentIndex === maxIndex ? 'none' : 'auto';
    };

    nextBtn.addEventListener('click', () => {
        const cardsPerView = getCardsPerView();
        if (currentIndex < cards.length - cardsPerView) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    // Recalculate slider on resize
    window.addEventListener('resize', updateSlider);
    
    // Initial call
    setTimeout(updateSlider, 200);

    // --------------------------------------------------
    // 5. CONTACT FORM SUBMISSION
    // --------------------------------------------------
    const contactForm = document.getElementById('portfolio-contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const isEn = document.documentElement.classList.contains('lang-en');

            // 1. Client-side Rate Limiter / Cooldown (Anti-Spam)
            const lastSent = localStorage.getItem('contact_form_last_sent');
            const now = Date.now();
            const cooldownTime = 120000; // 2 minutes cooldown
            if (lastSent && (now - lastSent) < cooldownTime) {
                const secondsLeft = Math.ceil((cooldownTime - (now - lastSent)) / 1000);
                const cooldownMsg = isEn 
                    ? `Please wait ${secondsLeft} seconds before sending another message.`
                    : `Lütfen yeni bir mesaj göndermek için ${secondsLeft} saniye bekleyin.`;
                showNotification(cooldownMsg, 'warning');
                return;
            }

            // 2. Honeypot check (Bot detection)
            const honey = contactForm.querySelector('input[name="_honey"]').value;
            if (honey) {
                // Silently drop and mock success to fool bots
                contactForm.reset();
                showNotification(isEn ? 'Message sent!' : 'Mesajınız gönderildi!', 'success');
                return;
            }
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple visual loading state
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalBtnHTML = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = isEn 
                ? 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>'
                : 'Gönderiliyor... <i class="fa-solid fa-spinner fa-spin"></i>';

            // 3. Make AJAX Post Request to FormSubmit.co
            fetch("https://formsubmit.co/ajax/29de2b6a9668d01b072469f8551f2368", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success === "true" || data.success === true) {
                    // Update rate limit timestamp
                    localStorage.setItem('contact_form_last_sent', Date.now());
                    
                    const successMsg = isEn 
                        ? 'Your message has been sent successfully! I will get back to you as soon as possible.'
                        : 'Mesajınız başarıyla gönderildi! En kısa zamanda geri döneceğim.';
                    showNotification(successMsg, 'success');
                    
                    // Reset form
                    contactForm.reset();
                } else {
                    throw new Error(data.message || 'Error');
                }
            })
            .catch(err => {
                console.error(err);
                const errMsg = isEn 
                    ? 'An error occurred while sending the message. Please try again later.'
                    : 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
                showNotification(errMsg, 'error');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHTML;
            });
        });
    }

    // Helper notification function
    const showNotification = (message, type) => {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        let iconClass = 'fa-circle-check';
        let accentColor = 'var(--accent-gold)';
        if (type === 'error') {
            iconClass = 'fa-circle-exclamation';
            accentColor = 'var(--accent-red)';
        } else if (type === 'warning') {
            iconClass = 'fa-triangle-exclamation';
            accentColor = '#ff9f1c';
        }

        notification.innerHTML = `
            <div class="notification-content" style="display:flex; align-items:center; gap:12px;">
                <i class="fa-solid ${iconClass}" style="font-size:18px;"></i>
                <p style="margin:0; line-height:1.4;">${message}</p>
            </div>
        `;
        
        // Quick styling for notification container
        Object.assign(notification.style, {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: 'var(--bg-secondary)',
            border: `1px solid ${accentColor}`,
            color: 'var(--text-primary)',
            padding: '16px 24px',
            zIndex: '1000',
            boxShadow: 'var(--shadow-premium)',
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            transform: 'translateY(100px)',
            opacity: '0',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease'
        });

        // Icon styling
        setTimeout(() => {
            const icon = notification.querySelector('i');
            if(icon) icon.style.color = accentColor;
        }, 50);

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateY(20px)';
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 400);
        }, 5000); // 5 seconds display
    };

    // --------------------------------------------------
    // 5.5 CLICKABLE PROJECT CARDS
    // --------------------------------------------------
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) {
                return;
            }
            const assetId = card.getAttribute('data-id');
            if (assetId) {
                window.location.href = `details.html?id=${assetId}`;
            }
        });
    });

    // --------------------------------------------------
    // 6. CANVAS FOG AND SNOW ANIMATION
    // --------------------------------------------------
    const canvas = document.getElementById('fog-canvas');
    const ctx = canvas.getContext('2d');
    
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const mistLayerCount = 8;
    const snowParticleCount = 45;

    // Mist/Fog Particle Class
    class MistParticle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 250 + 150; // large cloud size
            this.speedX = Math.random() * 0.15 + 0.05; // slow speed
            this.opacity = Math.random() * 0.05 + 0.01; // very transparent
            this.maxOpacity = this.opacity;
            this.fadeSpeed = 0.001;
            this.growing = Math.random() > 0.5;
        }

        update() {
            this.x += this.speedX;
            if (this.x - this.size > width) {
                this.x = -this.size;
            }

            // Opacity breathing effect
            if (this.growing) {
                this.opacity += this.fadeSpeed;
                if (this.opacity >= this.maxOpacity * 1.5) this.growing = false;
            } else {
                this.opacity -= this.fadeSpeed;
                if (this.opacity <= this.maxOpacity * 0.5) this.growing = true;
            }
        }

        draw() {
            const gradient = ctx.createRadialGradient(
                this.x,
                this.y,
                0,
                this.x,
                this.y,
                this.size
            );
            gradient.addColorStop(0, `rgba(18, 20, 32, ${this.opacity})`);
            gradient.addColorStop(0.5, `rgba(10, 10, 15, ${this.opacity * 0.4})`);
            gradient.addColorStop(1, 'rgba(8, 8, 10, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Snow/Dust Particle Class
    class SnowParticle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * -height; // start offscreen
            this.size = Math.random() * 1.5 + 0.5;
            this.speedY = Math.random() * 0.6 + 0.2;
            this.speedX = Math.random() * 0.2 - 0.1;
            this.opacity = Math.random() * 0.4 + 0.1;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;

            if (this.y > height) {
                this.reset();
                this.y = 0;
            }
            if (this.x > width || this.x < 0) {
                this.x = Math.random() * width;
            }
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Initialize Particles
    for (let i = 0; i < mistLayerCount; i++) {
        particles.push(new MistParticle());
    }
    for (let i = 0; i < snowParticleCount; i++) {
        particles.push(new SnowParticle());
    }

    // Animation Loop
    const animate = () => {
        ctx.clearRect(0, 0, width, height);

        // Fill background
        ctx.fillStyle = 'rgba(8, 8, 10, 0.05)';
        ctx.fillRect(0, 0, width, height);

        // Update & Draw Particles
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    };

    animate();
});
