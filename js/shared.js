/* ==========================================================
   LensBro — Shared JavaScript
   Runs on all pages
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ─── Year ───
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ─── Navbar scrolled state ───
    const siteNav = document.querySelector('.site-nav');
    if (siteNav) {
        let lastScroll = 0;
        const onScroll = () => {
            const y = window.scrollY || document.documentElement.scrollTop;
            if (y > 60) {
                siteNav.classList.add('scrolled');
            } else {
                siteNav.classList.remove('scrolled');
            }
            lastScroll = y;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // run once on load
    }

    // ─── Mobile hamburger toggle ───
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });
        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ─── Reveal on scroll ───
    const revealObserved = new WeakSet();
    let revealObs = null;

    function initScrollReveal() {
        const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        if (!revealEls.length) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            revealEls.forEach(el => el.classList.add('visible'));
            return;
        }

        if (!revealObs) {
            revealObs = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObs.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
        }

        revealEls.forEach(el => {
            if (!revealObserved.has(el)) {
                revealObserved.add(el);
                revealObs.observe(el);
            }
        });
    }

    // Run initially
    initScrollReveal();
    window.initScrollReveal = initScrollReveal;

    // ─── Play/pause videos on visibility ───
    const videos = document.querySelectorAll('video[autoplay]');
    if (videos.length) {
        const vidObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const v = entry.target;
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    v.muted = true;
                    const p = v.play();
                    if (p && p.catch) p.catch(() => {});
                } else {
                    try { v.pause(); } catch (e) {}
                }
            });
        }, { threshold: [0.2, 0.5, 0.8] });
        videos.forEach(v => vidObs.observe(v));
    }

    // ─── Smooth scroll for in-page anchors ───
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (!href || href.length < 2) return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const y = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    });

    // ─── Active nav link highlight ───
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-nav .nav-links a, .site-nav .nav-cta, .bottom-nav a, .mobile-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ─── Parallax blobs on mouse move ───
    const blobs = document.querySelectorAll('.blob');
    if (blobs.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            blobs.forEach((blob, i) => {
                const factor = (i % 2 === 0) ? 1 : -1;
                blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        });
    }

    // ─── Counter animation ───
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const counterObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counterObs.unobserve(entry.target);
                    let current = 0;
                    const step = Math.ceil(target / 60);
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        el.textContent = current + suffix;
                    }, 25);
                }
            });
        }, { threshold: 0.5 });
        counterObs.observe(el);
    });

    // ─── Global Custom Cursor Animation ───
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0, ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX; mouseY = e.clientY;
        });

        function animateCursor() {
            dotX += (mouseX - dotX) * 0.2; dotY += (mouseY - dotY) * 0.2;
            ringX += (mouseX - ringX) * 0.08; ringY += (mouseY - ringY) * 0.08;
            dot.style.left = dotX - 4 + 'px'; dot.style.top = dotY - 4 + 'px';
            ring.style.left = ringX - 20 + 'px'; ring.style.top = ringY - 20 + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Listen for hover changes
        const attachCursorHoverListeners = () => {
            document.querySelectorAll('a, button, .project-card, .work-card, .icon-service, .service-item, .showcase-play, .tab-btn, .list-item').forEach(el => {
                if (el.dataset.cursorBound) return;
                el.dataset.cursorBound = "true";

                el.addEventListener('mouseenter', () => {
                    dot.classList.add('hovering');
                    ring.classList.add('hovering');
                });
                el.addEventListener('mouseleave', () => {
                    dot.classList.remove('hovering');
                    ring.classList.remove('hovering');
                });
            });
        };
        
        attachCursorHoverListeners();
        // Expose globally so dynamic renderers can re-bind on update
        window.attachCursorHoverListeners = attachCursorHoverListeners;
    }
});

