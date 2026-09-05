// ─── NAV + FOOTER + SEARCH + THEME COMPONENTS ───────────────────────────────
// Injected on every page for DRY code

(function() {
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
  localStorage.setItem('avan_theme', 'dark');
})();
const NAV_HTML = `
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <!-- Logo -->
    <a href="index.html" class="nav-logo" aria-label="AVAN IT Solutions — Home" style="text-decoration:none; display:flex; align-items:center; gap:10px; flex-shrink:0;">
      <div style="position:relative; display:flex; align-items:center;">
        <img src="images/logo.png" alt="AVAN IT Solutions Logo" class="site-logo-img" style="display:none; width:auto; height:36px; object-fit:contain;" onload="this.style.display='block'; if(this.nextElementSibling) this.nextElementSibling.style.display='none';" />
        <div class="logo-mark" style="width:36px;height:36px;font-size:0.95rem;margin:0;" aria-hidden="true">AV</div>
      </div>
      <div class="nav-logo-text" style="display:flex; flex-direction:column; align-items:flex-start; gap:2px;">
        <span style="font-size:1.05rem; font-family:'Space Grotesk',sans-serif; font-weight:800; letter-spacing:-0.5px; background:linear-gradient(90deg, var(--cyan), var(--violet)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; line-height:1.1; white-space:nowrap;">AVAN IT Solutions</span>
        <span class="logo-tagline" style="color:var(--gold); font-size:0.55rem; font-family:'Sora',sans-serif; font-weight:600; letter-spacing:0.4px; line-height:1.1; white-space:nowrap;">Connecting Intelligence &amp; Avant-Garde Innovation</span>
      </div>
    </a>

    <!-- Desktop Links -->
    <div class="nav-links" id="nav-links" role="menubar">

      <!-- What We Do — mega-menu -->
      <div class="nav-mega" data-mega="services">
        <button class="nav-link nav-mega-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="mega-services">
          What We Do <svg class="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="mega-panel" id="mega-services" role="menu">
          <div class="mega-inner">
            <div class="mega-col">
              <div class="mega-col-label">SAP, S/4HANA &amp; Cloud</div>
              <a href="services.html" class="mega-link" style="color:var(--cyan); font-weight:800;">🚀 All Services Overview</a>
              <a href="sap-enterprise.html" class="mega-link">⚙️ SAP, S/4HANA, Public &amp; Private Cloud</a>
              <a href="erp-solutions.html" class="mega-link">📊 Enterprise ERP Systems</a>
              <a href="erp-custom-solutions.html" class="mega-link">🛠️ SAP BTP, SAP CALM &amp; SAP Signavio</a>
              <a href="consulting-strategy.html" class="mega-link">💼 Strategic Business Consulting</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-label">Cloud &amp; Infrastructure</div>
              <a href="cloud-platforms.html" class="mega-link">☁️ Public &amp; Private Cloud Infrastructure</a>
              <a href="devops-pipelines.html" class="mega-link">🛠️ DevOps &amp; CI/CD Pipelines</a>
              <a href="cybersecurity-operations.html" class="mega-link">🔐 Zero-Trust Cybersecurity</a>
              <a href="data-analytics.html" class="mega-link">🗄️ Enterprise Data Lakes</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-label">AI, Robotics &amp; Portals</div>
              <a href="ai-machine-learning.html" class="mega-link">🤖 AI &amp; Enterprise RAG</a>
              <a href="iot-bots.html" class="mega-link">🤖 IoT &amp; Autonomous Bots</a>
              <a href="web-app-dev.html" class="mega-link">💻 AI-Integrated Web &amp; Supplier Portals</a>
              <a href="mobile-development.html" class="mega-link">📱 Mobile &amp; AR Smart Glasses</a>
            </div>
            <div class="mega-featured">
              <div class="mega-featured-label">Featured Capability</div>
              <div class="mega-featured-card">
                <div style="font-size:1.8rem;margin-bottom:6px">⚡</div>
                <strong>SAP MCP &amp; RAG AI Integration</strong>
                <p>Linking LLMs securely to SAP S/4HANA, SAP Public Cloud &amp; SAP CALM core backends.</p>
                <a href="sap-enterprise.html" class="mega-cta">Explore SAP MCP →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Insights -->
      <a href="insights.html" class="nav-link">Insights</a>

      <!-- Who We Are — mega-menu -->
      <div class="nav-mega" data-mega="company">
        <button class="nav-link nav-mega-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="mega-company">
          Company <svg class="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="mega-panel" id="mega-company" role="menu">
          <div class="mega-inner">
            <div class="mega-col">
              <div class="mega-col-label">Our Organization</div>
              <a href="about.html" class="mega-link" style="color:var(--cyan); font-weight:800;">🏢 About AVAN IT Solutions</a>
              <a href="about.html#gdc-delivery" class="mega-link">🌐 Global Delivery Center (GDC)</a>
              <a href="about.html#var-support" class="mega-link">🤝 VAR Support &amp; Partnerships</a>
              <a href="trust-center.html" class="mega-link">🛡️ Enterprise Trust Center</a>
              <a href="alumni.html" class="mega-link">🎓 AVAN Alumni Network</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-label">Innovation &amp; Talent</div>
              <a href="innovation-labs.html" class="mega-link">🔬 AI Center of Excellence (CoE)</a>
              <a href="learning.html" class="mega-link">🎓 Learning &amp; Development</a>
              <a href="careers.html" class="mega-link">💼 Career Opportunities</a>
              <a href="early-careers.html" class="mega-link">🌱 Students &amp; Early Careers</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-label">Enterprise Proof</div>
              <a href="clients.html" class="mega-link" style="color:var(--cyan); font-weight:800;">🏆 Production Use Cases</a>
            </div>
            <div class="mega-featured">
              <div class="mega-featured-label">Featured Outcomes</div>
              <div class="mega-featured-card">
                <div style="font-size:1.8rem;margin-bottom:6px">🏆</div>
                <strong>Production Use Cases</strong>
                <p>Single unified showcase of all enterprise systems: Supplier Portals, Warehouse Smart Glasses, SAP MCP Servers &amp; RAG.</p>
                <a href="clients.html" class="mega-cta">View All Use Cases →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Us -->
      <a href="contact.html" class="nav-link">Contact Us</a>

      <!-- Mobile Utilities -->
      <div class="mobile-only-utils">
        <a href="client-portal.html" class="btn-portal">Client Portal</a>
      </div>

    </div><!-- /.nav-links -->

    <!-- Utilities -->
    <div class="nav-utils">
      <a href="client-portal.html" class="btn-portal" id="nav-client-portal">Client Portal</a>
    </div>

    <!-- Hamburger -->
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false" aria-controls="nav-links">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
`;

const FOOTER_HTML = `
<div class="glow-line"></div>
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo" style="margin-bottom:12px; display:flex; align-items:center; gap:10px; text-decoration:none;">
          <div style="position:relative; display:flex;">
            <img src="images/logo.png" alt="AVAN IT Solutions Logo" class="site-logo-img-footer" style="display:none; width:auto; height:40px; object-fit:contain;" onload="this.style.display='block'; this.nextElementSibling.style.display='none';" />
            <div class="logo-mark" style="width:40px;height:40px;font-size:1rem;margin:0;" aria-hidden="true">AV</div>
          </div>
          <div style="display:flex; flex-direction:column; align-items:flex-start; gap:2px;">
            <span style="font-size:1.1rem; font-family:'Space Grotesk',sans-serif; font-weight:800; letter-spacing:-0.5px; background:linear-gradient(90deg, var(--cyan), var(--violet)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; line-height:1;">AVAN IT Solutions</span>
            <span style="color:var(--gold); font-size:0.58rem; font-family:'Sora',sans-serif; font-weight:600; letter-spacing:0.4px; line-height:1.2; white-space:nowrap;">Connecting Intelligence &amp; Avant-Garde Innovation</span>
          </div>
        </a>
        <p style="color:var(--text-secondary);line-height:1.7;margin:20px 0 24px;max-width:300px;font-size:0.9rem">
          AI-first enterprise transformation, cloud modernization, and SAP consulting. Headquartered in Hyderabad, with our Delivery Center in East Godavari, Andhra Pradesh (533105), delivering global business outcomes.
        </p>
        <div class="footer-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn" title="LinkedIn">in</a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="X (Twitter)" title="X">𝕏</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub" title="GitHub">⌨</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="YouTube" title="YouTube">▶</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram" title="Instagram">📷</a>
        </div>
      </div>
      <div class="footer-links-grid">
        <div class="footer-col">
          <h4>Capabilities</h4>
          <a href="services.html">All Services</a>
          <a href="sap-enterprise.html">SAP S/4HANA &amp; Cloud</a>
          <a href="ai-machine-learning.html">AI &amp; Cognitive Engineering</a>
          <a href="iot-bots.html">IoT &amp; Autonomous Bots</a>
          <a href="data-analytics.html">Data Lakes &amp; Analytics</a>
          <a href="cloud-platforms.html">Cloud Architecture</a>
          <a href="cybersecurity-operations.html">Cybersecurity Operations</a>
        </div>
        <div class="footer-col">
          <h4>Insights &amp; Ecosystem</h4>
          <a href="insights.html">Insights &amp; Research</a>
          <a href="innovation-labs.html">AI Innovation Hub (CoE)</a>
          <a href="clients.html">Production Use Cases</a>
          <a href="tech-stack.html">Technology Ecosystem</a>
          <a href="alumni.html">AVAN Alumni Network</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a href="about.html">About Us</a>
          <a href="about.html#gdc-delivery">Global Delivery Center (GDC)</a>
          <a href="about.html#var-support">VAR Support &amp; Partners</a>
          <a href="trust-center.html">Trust &amp; Compliance Center</a>
          <a href="careers.html">Career Opportunities</a>
          <a href="early-careers.html">Students &amp; Early Careers</a>
          <a href="client-portal.html">Client Portal SSO</a>
          <a href="contact.html">Contact Us</a>
        </div>
        <div class="footer-col">
          <h4>Offices</h4>
          <a href="mailto:info@avanits.com">info@avanits.com</a>
          <a href="tel:+918001234567">+91 800 123 4567</a>
          <a href="contact.html#offices">Hyderabad, India 🇮🇳 (Global Delivery HQ)</a>
          <a href="contact.html#offices">East Godavari, AP - 533105 🇮🇳 (Delivery Center)</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 AVAN IT Solutions Pvt. Ltd. All rights reserved. Hyderabad &amp; East Godavari, Andhra Pradesh.</p>
      <div class="footer-bottom-links">
        <a href="trust-center.html">Privacy Policy</a>
        <a href="trust-center.html">Terms of Service</a>
        <a href="trust-center.html">Cookie Policy</a>
        <a href="trust-center.html">Accessibility</a>
        <a href="sitemap.xml">Sitemap XML</a>
        <a href="contact.html">Global Support</a>
      </div>
    </div>
  </div>
</footer>
`;


// Inject on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const isSubdirPage = window.location.pathname.includes('/careers/') || window.location.pathname.includes('/learning/') || window.location.pathname.includes('/publications/');
  const currentPageName = window.location.pathname.split('/').pop() || 'index.html';
  const isIndexPage = currentPageName === 'index.html' || currentPageName === 'index' || currentPageName === '';

  // ── Conditional Preloader (first visit to index only) ──
  const hasPreloaded = sessionStorage.getItem('avan_preloaded');
  if (isIndexPage && !hasPreloaded) {
    // First visit — show preloader
    const PRELOADER_HTML = `
    <div id="loading-screen" aria-busy="true" role="status">
      <div class="loader-logo">AVAN IT SOLUTIONS</div>
      <div class="loader-bar"><div class="loader-bar-fill"></div></div>
      <p style="color:var(--text-muted);font-size:0.7rem;letter-spacing:3px;margin-top:6px;font-family:'JetBrains Mono',monospace">INITIALIZING...</p>
    </div>`;
    document.body.insertAdjacentHTML('afterbegin', PRELOADER_HTML);
  }
  // Mark as preloaded for future page loads in this session
  if (isIndexPage && !hasPreloaded) {
    sessionStorage.setItem('avan_preloaded', '1');
  }

  // ── Inject Ambient Overlay Layers ──
  const NETWORK_LAYERS_HTML = `
    <div id="kage-vignette" aria-hidden="true"></div>
    <div id="kage-grain" aria-hidden="true"></div>
  `;
  document.body.insertAdjacentHTML('afterbegin', NETWORK_LAYERS_HTML);

  // Inject nav at top of body
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  // Inject footer at bottom
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Inject Quick Search Modal
  const SEARCH_MODAL_HTML = `
  <div id="quick-search-modal" class="search-modal-overlay" style="display:none;" aria-hidden="true">
    <div class="search-modal-card">
      <div class="search-input-header">
        <span class="material-symbols-outlined search-icon">search</span>
        <input type="text" id="quick-search-input" placeholder="Type to search SAP, Cloud, AI RAG, Use Cases, DevOps..." autocomplete="off" />
        <span class="search-kbd-hint">ESC</span>
      </div>
      <div class="search-results-area">
        <div class="search-category-label">Quick Jump Suggestions</div>
        <div class="search-suggestions-grid" id="search-suggestions-list">
          <a href="sap-enterprise.html" class="search-suggestion-item" data-keywords="sap s4hana mcp server calm signavio btp clean core">
            <span class="item-icon">⚙️</span>
            <div>
              <strong>SAP S/4HANA &amp; MCP Servers</strong>
              <p>Clean core migration, SAP MCP servers, SAP BTP, CALM, Signavio</p>
            </div>
          </a>
          <a href="cloud-platforms.html" class="search-suggestion-item" data-keywords="public cloud private sovereign aws azure gcp infrastructure devops">
            <span class="item-icon">☁️</span>
            <div>
              <strong>Public &amp; Private Cloud</strong>
              <p>AWS, Azure, GCP &amp; Sovereign Private Cloud infrastructure</p>
            </div>
          </a>
          <a href="ai-machine-learning.html" class="search-suggestion-item" data-keywords="ai rag custom chatbots smart glasses vision picking warehouse">
            <span class="item-icon">🤖</span>
            <div>
              <strong>Enterprise RAG &amp; Custom Chatbots</strong>
              <p>Hybrid vector RAG, custom UI chatbots, vision picking</p>
            </div>
          </a>
          <a href="clients.html" class="search-suggestion-item" data-keywords="clients use cases supplier registration portal smart glasses projects">
            <span class="item-icon">🏆</span>
            <div>
              <strong>Enterprise Use Cases &amp; Projects</strong>
              <p>Supplier Registration Portal, Warehouse Vision Picking, Custom SAP MCP</p>
            </div>
          </a>
          <a href="services.html" class="search-suggestion-item" data-keywords="services implementations development technical support cloud ai sap">
            <span class="item-icon">🚀</span>
            <div>
              <strong>Master Services Overview</strong>
              <p>Implementations, Custom Development, Cloud &amp; AI Engineering</p>
            </div>
          </a>
          <a href="contact.html" class="search-suggestion-item" data-keywords="contact consultation office hyderabad phone email">
            <span class="item-icon">✉️</span>
            <div>
              <strong>Contact Solution Architects</strong>
              <p>Schedule executive strategy sessions &amp; technical discovery</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  `;
  document.body.insertAdjacentHTML('beforeend', SEARCH_MODAL_HTML);

  const searchModal = document.getElementById('quick-search-modal');
  const searchInput = document.getElementById('quick-search-input');
  const searchTrigger = document.getElementById('search-trigger-btn');

  function openSearchModal() {
    if (!searchModal) return;
    searchModal.style.display = 'flex';
    searchModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput?.focus(), 50);
  }

  function closeSearchModal() {
    if (!searchModal) return;
    searchModal.style.display = 'none';
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  searchTrigger?.addEventListener('click', (e) => {
    e.preventDefault();
    openSearchModal();
  });

  searchModal?.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearchModal();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchModal?.style.display === 'flex' ? closeSearchModal() : openSearchModal();
    } else if (e.key === 'Escape' && searchModal?.style.display === 'flex') {
      closeSearchModal();
    }
  });

  searchInput?.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    const items = document.querySelectorAll('.search-suggestion-item');
    items.forEach(item => {
      const text = item.textContent.toLowerCase() + ' ' + (item.getAttribute('data-keywords') || '');
      item.style.display = text.includes(val) ? 'flex' : 'none';
    });
  });

  // ── Inject creative.css (handles per-page hero compositions) ──
  if (!document.querySelector('link[href*="creative.css"]')) {
    const creativeLinkHref = isSubdirPage ? '../css/creative.css' : 'css/creative.css';
    const creativeLink = document.createElement('link');
    creativeLink.rel = 'stylesheet';
    creativeLink.href = creativeLinkHref;
    document.head.appendChild(creativeLink);
  }

  // ── Theme Switcher Bindings ──
  const applyThemeMode = (mode) => {
    if (mode === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      const sun = btn.querySelector('.theme-icon-sun');
      const moon = btn.querySelector('.theme-icon-moon');
      if (sun && moon) {
        sun.style.display = mode === 'light' ? 'inline' : 'none';
        moon.style.display = mode === 'light' ? 'none' : 'inline';
      }
    }
  };

  const currentSavedTheme = localStorage.getItem('avan_theme') || 'dark';
  applyThemeMode(currentSavedTheme);

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeIsLight = document.documentElement.classList.contains('light');
      const newMode = activeIsLight ? 'dark' : 'light';
      localStorage.setItem('avan_theme', newMode);
      applyThemeMode(newMode);
    });
  }

  // ── Add per-page body class for unique hero compositions ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pageClasses = {
    'index.html': 'page-index',
    '': 'page-index',
    'about.html': 'page-about',
    'services.html': 'page-services',
    'clients.html': 'page-clients',
    'careers.html': 'page-careers',
    'contact.html': 'page-contact',
    'learning.html': 'page-learning',
    'tech-stack.html': 'page-tech',
    'alumni.html': 'page-alumni',
    'client-portal.html': 'page-portal',
    'apply.html': 'page-apply',
    'erp-solutions.html': 'page-service-detail',
    'erp-custom-solutions.html': 'page-service-detail',
    'sap-enterprise.html': 'page-service-detail',
    'ai-machine-learning.html': 'page-service-detail',
    'cloud-platforms.html': 'page-service-detail',
    'cybersecurity-operations.html': 'page-service-detail',
    'devops-pipelines.html': 'page-service-detail',
    'web-app-dev.html': 'page-service-detail',
    'mobile-development.html': 'page-service-detail',
    'consulting-strategy.html': 'page-service-detail',
    'it-support.html': 'page-service-detail',
  };
  const pageBodyClass = pageClasses[currentPage] || 'page-generic';
  document.body.classList.add(pageBodyClass);


  const CHATBOT_PAGES = ['index.html', 'services.html', 'contact.html', 'index', 'services', 'contact', ''];
  if (CHATBOT_PAGES.includes(currentPage)) {
    const CHATBOT_HTML = `
<!-- Assistive AI Chatbot -->
<div class="chatbot-wrapper" id="ai-chatbot">
  <button class="chatbot-toggle" id="chatbot-toggle" aria-label="Open AI Assistant">
    <div class="bot-icon">🤖</div>
    <span class="pulse-ring"></span>
  </button>
  
  <div class="chatbot-window" id="chatbot-window">
    <div class="chatbot-header">
      <div class="chatbot-avatar">🤖</div>
      <div class="chatbot-info">
        <h3>AVAN Assistant</h3>
        <span>Online &bull; AI Support</span>
      </div>
      <button class="chatbot-close" id="chatbot-close">&times;</button>
    </div>
    
    <div class="chatbot-messages" id="chatbot-messages">
      <div class="message bot-message">
        <p>Welcome to AVAN IT Solutions. I'm your enterprise digital assistant. How may I assist you today with our consulting, ERP, cloud, or AI solutions?</p>
      </div>
      <div class="chat-options">
        <button class="chat-chip">Services</button>
        <button class="chat-chip">Consultation</button>
        <button class="chat-chip">Careers</button>
      </div>
    </div>
    
    <div class="chatbot-input">
      <input type="text" id="chatbot-text-input" placeholder="Ask me anything..." autocomplete="off" />
      <button id="chatbot-send" aria-label="Send message">➤</button>
    </div>
  </div>
</div>
`;
    document.body.insertAdjacentHTML('beforeend', CHATBOT_HTML);
  }

  // Subdirectory link prefixing logic
  if (isSubdirPage) {
    const internalLinks = document.querySelectorAll('nav a, footer a, #chatbot-window a');
    internalLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#')) {
        link.setAttribute('href', '../' + href);
      }
    });
    const logoImg = document.querySelector('.site-logo-img');
    if (logoImg) {
      const src = logoImg.getAttribute('src');
      if (src && !src.startsWith('http') && !src.startsWith('../')) {
        logoImg.setAttribute('src', '../' + src);
      }
    }
  }

  // ─── MOBILE HAMBURGER MENU & DRAWER ─────────────────────────────
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  const navInner = document.querySelector('.nav-inner');
  
  if (hamburger && navLinks) {
    // Create overlay element for mobile
    let overlay = document.querySelector('.mobile-nav-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'mobile-nav-overlay';
      document.body.appendChild(overlay);
    }

    // Function to place navLinks in document.body on mobile so position:fixed is 100% viewport relative
    function syncNavLinksParent() {
      if (window.innerWidth <= 1024) {
        if (navLinks.parentNode !== document.body) {
          document.body.appendChild(navLinks);
        }
      } else {
        if (navInner && navLinks.parentNode !== navInner) {
          const navUtils = navInner.querySelector('.nav-utils');
          if (navUtils) {
            navInner.insertBefore(navLinks, navUtils);
          } else {
            navInner.appendChild(navLinks);
          }
        }
      }
    }

    syncNavLinksParent();
    window.addEventListener('resize', syncNavLinksParent);

    function openMobileNav() {
      syncNavLinksParent();
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      navLinks.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (navLinks.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close on overlay click
    overlay.addEventListener('click', closeMobileNav);

    // Direct redirection for all navigation links on mobile
    navLinks.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('javascript:')) {
        const navigateToPage = (e) => {
          if (window.innerWidth <= 1024) {
            closeMobileNav();
            window.location.href = href;
          }
        };

        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 1024) {
            e.preventDefault();
            navigateToPage(e);
          }
        });
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMobileNav();
      }
    });
  }

  // ─── MEGA-MENU: hover + focus logic ─────────────────────────
  document.querySelectorAll('.nav-mega').forEach(mega => {
    const trigger = mega.querySelector('.nav-mega-trigger');
    const panel   = mega.querySelector('.mega-panel');

    let closeTimer;

    function openPanel() {
      clearTimeout(closeTimer);
      document.querySelectorAll('.nav-mega.open').forEach(m => {
        if (m !== mega) {
          m.classList.remove('open');
          m.querySelector('.nav-mega-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });
      mega.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }

    function closePanel() {
      closeTimer = setTimeout(() => {
        mega.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }, 120);
    }

    // Mouse events on trigger (desktop only)
    mega.addEventListener('mouseenter', () => {
      if (window.innerWidth > 1024) openPanel();
    });
    mega.addEventListener('mouseleave', () => {
      if (window.innerWidth > 1024) closePanel();
    });

    // Keep open when panel is hovered (desktop only)
    panel?.addEventListener('mouseenter', () => {
      if (window.innerWidth > 1024) clearTimeout(closeTimer);
    });
    panel?.addEventListener('mouseleave', () => {
      if (window.innerWidth > 1024) closePanel();
    });

    // Click & Touch toggle for Mobile Accordion
    if (trigger) {
      const toggleMobileAccordion = (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();
          const isOpen = mega.classList.contains('open');
          document.querySelectorAll('.nav-mega.open').forEach(m => {
            m.classList.remove('open');
            m.querySelector('.nav-mega-trigger')?.setAttribute('aria-expanded', 'false');
          });
          if (!isOpen) {
            mega.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
          }
        } else {
          mega.classList.contains('open') ? closePanel() : openPanel();
        }
      };

      trigger.addEventListener('click', toggleMobileAccordion);
    }
  });

  // Close mega on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-mega')) {
      document.querySelectorAll('.nav-mega.open').forEach(m => {
        m.classList.remove('open');
        m.querySelector('.nav-mega-trigger')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // ─── CHATBOT LOGIC ─────────────────────────────────────────
  const chatToggle = document.getElementById('chatbot-toggle');
  const chatWindow = document.getElementById('chatbot-window');
  const chatClose = document.getElementById('chatbot-close');
  const chatSend = document.getElementById('chatbot-send');
  const chatInput = document.getElementById('chatbot-text-input');
  const chatMessages = document.getElementById('chatbot-messages');
  const chatChips = document.querySelectorAll('.chat-chip');

  if (chatToggle && chatWindow && chatClose) {
    chatToggle.addEventListener('click', () => {
      chatWindow.classList.toggle('active');
    });

    chatClose.addEventListener('click', () => {
      chatWindow.classList.remove('active');
    });

    function appendMessage(text, isUser) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
      msgDiv.innerHTML = `<p>${text}</p>`;
      chatMessages.insertBefore(msgDiv, chatMessages.querySelector('.chat-options'));
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleUserInput(text) {
      if (!text.trim()) return;
      appendMessage(text, true);
      chatInput.value = '';

      // Simulate AI typing delay
      setTimeout(() => {
        let response = "I'm a pre-programmed assistant. For full details, please visit our Contact page or call our support line!";
        const lowerText = text.toLowerCase();
        
        if (lowerText.includes('service') || lowerText.includes('cloud') || lowerText.includes('ai') || lowerText.includes('erp') || lowerText.includes('sap')) {
          response = "We provide consulting-led enterprise solutions across SAP S/4HANA, Custom ERP, Cloud Architecture, Cybersecurity, and AI Engineering. Explore our Services page for complete details!";
        } else if (lowerText.includes('career') || lowerText.includes('job')) {
          response = "Interested in building your professional career with AVAN IT Solutions? Visit our Careers page to view current open positions and corporate opportunities.";
        } else if (lowerText.includes('consultation') || lowerText.includes('contact')) {
          response = "Ready to schedule an executive strategy consultation? Visit our Contact page to book a session with our enterprise architects!";
        } else if (lowerText.includes('hello') || lowerText.includes('hi')) {
          response = "Hello! How can I assist your organization with AVAN IT Solutions today?";
        }

        appendMessage(response, false);
      }, 1000);
    }

    chatSend?.addEventListener('click', () => {
      handleUserInput(chatInput.value);
    });

    chatInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleUserInput(chatInput.value);
      }
    });

    chatChips.forEach(chip => {
      chip.addEventListener('click', () => {
        handleUserInput(chip.textContent);
      });
    });
  }

  // ─── GLOBAL VIDEO BACKGROUND ────────────────────────────────────────────────
  // Skip on client-portal page (currentPage already declared above)
  const NO_VIDEO_PAGES = ['client-portal.html'];

  const isHomePage = currentPage === 'index.html' || currentPage === 'index' || currentPage === '';
  const isWhatWeThinkPage = currentPage === 'clients.html' || currentPage === 'clients' || window.location.pathname.includes('/publications/');
  const isServicesPage = currentPage === 'services.html' || currentPage === 'services';
  const isCareersPage = currentPage === 'careers.html' || currentPage === 'careers' || window.location.pathname.includes('/careers/');
  const isLearningPage = currentPage === 'learning.html' || currentPage === 'learning' || window.location.pathname.includes('/learning/');

  if (!NO_VIDEO_PAGES.includes(currentPage)) {
    // Mark body so CSS can adjust hero backgrounds
    document.body.classList.add('has-video-bg');

    
    const isJobsAndCareersPage = isCareersPage || isLearningPage || currentPage === 'apply.html' || currentPage === 'apply';
    const isErpSapTechPage = currentPage === 'erp-solutions.html' || currentPage === 'erp-solutions' ||
                             currentPage === 'erp-custom-solutions.html' || currentPage === 'erp-custom-solutions' ||
                             currentPage === 'sap-enterprise.html' || currentPage === 'sap-enterprise' ||
                             currentPage === 'tech-stack.html' || currentPage === 'tech-stack' ||
                             window.location.pathname.includes('/sap-bootcamp');

    // Setup playlists with continuous sequential looping
    let playlist = [];
    if (isHomePage) {
      playlist = ['images/index_page.mp4', 'images/its_an_it_solutions_company_ma.mp4'];
    } else if (isErpSapTechPage) {
      playlist = ['images/dont_include_the_website.mp4'];
    } else if (isJobsAndCareersPage) {
      playlist = ['images/a_company_AVAN_IT_SOLUTIONS_ma.mp4', 'images/make_an_advertisement_video_on.mp4'];
    } else if (isServicesPage) {
      playlist = ['images/Architecting_TheNext_Digital.mp4'];
    } else if (isWhatWeThinkPage) {
      playlist = ['images/home_page_video.mp4'];
    } else {
      playlist = ['images/its_an_it_solutions_company_ma.mp4'];
    }

    const isSubdirVideo = window.location.pathname.includes('/careers/') || window.location.pathname.includes('/learning/') || window.location.pathname.includes('/publications/');
    if (isSubdirVideo) {
      playlist = playlist.map(url => '../' + url);
    }

    const initialVideo = playlist[0];
    const hasMultipleVideos = playlist.length > 1;

    const videoBgHTML = `
      <div id="global-video-bg" aria-hidden="true">
        <video
          id="bg-video"
          autoplay
          muted
          ${hasMultipleVideos ? '' : 'loop'}
          playsinline
          webkit-playsinline
          x5-playsinline
          preload="auto"
        >
          <source src="${initialVideo}" type="video/mp4">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-blue-and-purple-liquid-waves-33824-large.mp4" type="video/mp4">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-glowing-blue-particles-wave-animation-36024-large.mp4" type="video/mp4">
        </video>
      </div>
    `;

    // Inject at the very start of body (before nav)
    document.body.insertAdjacentHTML('afterbegin', videoBgHTML);

    const bgVideo = document.getElementById('bg-video');

    if (bgVideo) {
      let currentVideoIndex = 0;

      // Ensure inline playback attributes on mobile browsers
      bgVideo.setAttribute('playsinline', '');
      bgVideo.setAttribute('webkit-playsinline', '');
      bgVideo.muted = true;

      // Handle continuous playlist sequential looping
      bgVideo.addEventListener('ended', () => {
        if (hasMultipleVideos) {
          currentVideoIndex = (currentVideoIndex + 1) % playlist.length;
          bgVideo.src = playlist[currentVideoIndex];
          bgVideo.load();
          bgVideo.play().catch(err => console.log("Autoplay prevention:", err));
        }
      });

      // Continuous play function with fallbacks for mobile OS low-power mode
      const playVideoMuted = () => {
        if (bgVideo.paused) {
          bgVideo.play().catch(() => {});
        }
      };

      // Initial attempt to play
      playVideoMuted();

      // Trigger playback on first user touch/scroll if blocked by mobile browser power-saving policy
      ['touchstart', 'touchend', 'click', 'scroll'].forEach(evtType => {
        document.addEventListener(evtType, playVideoMuted, { passive: true, once: true });
      });

      // Hero text slide-in logic for index page
      const heroContent = document.querySelector('.hero-content-fade');
      if (heroContent) {
        heroContent.classList.add('visible');
      }

      // Fallback: if video fails to load, show a static background
      bgVideo.addEventListener('error', () => {
        console.warn('Video background failed to load, falling back to static image');
        const videoBg = document.getElementById('global-video-bg');
        if (videoBg) {
          videoBg.innerHTML = `<div style="width:100%;height:100%;background:var(--bg-dark);background-image:url('images/hero-bg-3d.png');background-size:cover;background-position:center;"></div>`;
        }
      });
    }
  }


});

