// ─── GLOBAL JS — main.js ────────────────────────────────────────
// NOTE: All DOM queries MUST be inside DOMContentLoaded because
// components.js injects nav/footer/cursor elements on that event.

document.addEventListener('DOMContentLoaded', () => {

  /* ═══════════════════════════════════════════
     LOADING SCREEN (conditional — only if element exists)
     components.js only injects it on first index.html visit
  ═══════════════════════════════════════════ */
  const loader = document.getElementById('loading-screen');
  if (loader) {
    const hidePreloader = () => {
      if (!loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
        setTimeout(() => { loader.style.display = 'none'; }, 650);
      }
    };

    if (document.readyState === 'complete') {
      setTimeout(hidePreloader, 400);
    } else {
      window.addEventListener('load', hidePreloader);
      setTimeout(hidePreloader, 1000);
    }
  }

  /* ═══════════════════════════════════════════
     KAGE CUSTOM CURSOR (mouse-follow dot)
  ═══════════════════════════════════════════ */
  const cursor = document.getElementById('kage-cursor');
  if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let cx = 0, cy = 0, tx = 0, ty = 0;

    document.addEventListener('mousemove', e => {
      tx = e.clientX;
      ty = e.clientY;
    }, { passive: true });

    function tickCursor() {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(tickCursor);
    }
    tickCursor();

    // Magnetic hover: grow cursor on interactive elements
    const hoverTargets = 'a, button, [data-cursor], input, textarea, .glass-card, .bento-card, .glass-card-career, .glass-card-student, .nav-link';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverTargets)) cursor.classList.add('active');
    }, { passive: true });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverTargets)) cursor.classList.remove('active');
    }, { passive: true });
  }

  /* ═══════════════════════════════════════════
     NAVBAR — scroll effect
  ═══════════════════════════════════════════ */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleNavScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll(); // run once on load
  }



  /* ═══════════════════════════════════════════
     ACTIVE NAV LINK
  ═══════════════════════════════════════════ */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ═══════════════════════════════════════════
     SCROLL REVEAL (IntersectionObserver)
  ═══════════════════════════════════════════ */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-up, .appear');
  if (revealEls.length) {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          ro.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => ro.observe(el));
  }

  /* ═══════════════════════════════════════════
     HERO PAGE-LOAD ANIMATION
     Fires .hero-content-fade (index hero) and
     .appear elements that are already visible
  ═══════════════════════════════════════════ */
  setTimeout(() => {
    // Index hero
    document.querySelectorAll('.hero-content-fade').forEach(el => el.classList.add('visible'));
    // All .appear elements already in viewport
    document.querySelectorAll('.appear').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        el.classList.add('visible');
      }
    });
  }, 120);


  /* ═══════════════════════════════════════════
     STAGGER CHILDREN
  ═══════════════════════════════════════════ */
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    Array.from(parent.children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 80}ms`;
      child.classList.add('reveal');
    });
  });

  /* ═══════════════════════════════════════════
     COUNTER ANIMATIONS
  ═══════════════════════════════════════════ */
  function animateCounter(el, target, suffix = '', duration = 2000) {
    const start = 0;
    let current  = 0;
    const step   = target / (duration / 16);
    const timer  = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = (Number.isInteger(target) ? Math.floor(current) : current.toFixed(1)).toLocaleString() + suffix;
    }, 16);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const target = parseFloat(entry.target.dataset.target);
        const suffix = entry.target.dataset.suffix || '';
        animateCounter(entry.target, target, suffix);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

  /* ═══════════════════════════════════════════
     PROGRESS BARS
  ═══════════════════════════════════════════ */
  const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.progress-fill');
        if (fill) fill.style.width = fill.dataset.width || '0%';
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.progress-bar').forEach(bar => progressObserver.observe(bar));

  /* ═══════════════════════════════════════════
     TYPED TEXT EFFECT
  ═══════════════════════════════════════════ */
  class TypeWriter {
    constructor(el, words, wait = 3000) {
      this.el = el; this.words = words; this.txt = '';
      this.wordIdx = 0; this.wait = wait; this.isDeleting = false;
      this.type();
    }
    type() {
      const word = this.words[this.wordIdx % this.words.length];
      this.txt = this.isDeleting
        ? word.substring(0, this.txt.length - 1)
        : word.substring(0, this.txt.length + 1);
      this.el.textContent = this.txt;
      let speed = this.isDeleting ? 55 : 95;
      if (!this.isDeleting && this.txt === word) {
        speed = this.wait; this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false; this.wordIdx++; speed = 350;
      }
      setTimeout(() => this.type(), speed);
    }
  }
  const typedEl = document.querySelector('.typed-text');
  if (typedEl) {
    const words = typedEl.dataset.words ? JSON.parse(typedEl.dataset.words) : ['Innovate', 'Dominate', 'Elevate'];
    new TypeWriter(typedEl, words, 2500);
  }

  /* ═══════════════════════════════════════════
     PARTICLE CANVAS
  ═══════════════════════════════════════════ */
  function initParticles(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = canvas.offsetWidth, H = canvas.offsetHeight;
    canvas.width = W; canvas.height = H;

    const N = Math.min(70, Math.floor(W * H / 14000));
    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x  = Math.random() * W;
        this.y  = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.r  = Math.random() * 1.8 + 0.4;
        this.alpha = Math.random() * 0.45 + 0.08;
        this.color = Math.random() > 0.5 ? '0,245,255' : '124,58,237';
      }
      move() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
      }
    }
    const particles = Array.from({ length: N }, () => new Particle());

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.move();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,245,255,${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        W = canvas.offsetWidth; H = canvas.offsetHeight;
        canvas.width = W; canvas.height = H;
      }, 200);
    });
  }
  initParticles('particle-canvas');

  /* ═══════════════════════════════════════════
     3D TILT CARDS
  ═══════════════════════════════════════════ */
  document.querySelectorAll('.tilt-card').forEach(card => {
    const inner = card.querySelector('.tilt-inner');
    if (!inner) return;
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width  / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      const rx = -(y / rect.height) * 8;
      const ry =  (x / rect.width)  * 8;
      inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      inner.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
  });

  /* ═══════════════════════════════════════════
     SMOOTH ANCHOR SCROLL
  ═══════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href && href.length > 1) {
        try {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } catch (err) {}
      }
    });
  });

  /* ═══════════════════════════════════════════
     TOAST NOTIFICATIONS
  ═══════════════════════════════════════════ */
  window.showToast = function(message, icon = '✅') {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span style="font-size:1.25rem">${icon}</span> <span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  };

  /* ═══════════════════════════════════════════
     MODAL HELPERS
  ═══════════════════════════════════════════ */
  window.openModal = function(id) {
    const m = document.getElementById(id);
    if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
  };
  window.closeModal = function(id) {
    const m = document.getElementById(id);
    if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
  };
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) window.closeModal(overlay.id);
    });
  });

  /* ═══════════════════════════════════════════
     MAGNETIC BUTTONS
  ═══════════════════════════════════════════ */
  document.querySelectorAll('.btn-primary, .btn-magenta').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width  / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });

  /* ═══════════════════════════════════════════
     RIPPLE EFFECT ON BUTTONS
  ═══════════════════════════════════════════ */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const ripple = document.createElement('span');
      const rect   = btn.getBoundingClientRect();
      ripple.style.cssText = `
        position:absolute; border-radius:50%; pointer-events:none;
        background:rgba(255,255,255,0.25);
        width:6px; height:6px;
        top:${e.clientY - rect.top - 3}px;
        left:${e.clientX - rect.left - 3}px;
        animation: rippleOut 0.55s ease forwards;
      `;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  /* ═══════════════════════════════════════════
     SCROLL PROGRESS BAR
  ═══════════════════════════════════════════ */
  const scrollBar = document.createElement('div');
  scrollBar.id = 'scroll-progress';
  scrollBar.style.cssText = `
    position:fixed; top:0; left:0; height:3px; z-index:99999;
    background: linear-gradient(90deg, var(--cyan), var(--violet), var(--magenta));
    transition: width 0.1s linear;
    width:0%;
    pointer-events: none;
  `;
  document.body.appendChild(scrollBar);
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollBar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });

}); // end DOMContentLoaded

{
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes rippleOut {
      to { width:220px; height:220px; margin:-107px; opacity:0; }
    }
  `;
  document.head.appendChild(rippleStyle);
}

