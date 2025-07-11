/**
 * Main Application Script
 * Handles common functionality across all pages
 */

// DOM Elements
const loadingElement = document.getElementById('content-loading');
const navbarContainer = document.getElementById('navbar-container');
const footerContainer = document.getElementById('footer-container');
const mainContent = document.getElementById('main-content');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load common components
    loadNavbar();
    loadFooter();
    
    // Hide loading spinner after everything is loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingElement.style.display = 'none';
        }, 500);
    });
});

// Load Navigation Bar
function loadNavbar() {
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="images/logo.png" alt="${siteConfig.companyName} Logo" width="180" class="img-fluid">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="mainNavbar">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        ${Object.entries(navPages)
                            .filter(([_, details]) => details.showInNav)
                            .map(([page, details]) => `
                                <li class="nav-item">
                                    <a class="nav-link ${window.location.pathname.includes(page) ? 'active' : ''}" 
                                        href="${page === 'index' ? '/' : `/${page}.html`}">
                                        ${details.title}
                                    </a>
                                </li>
                            `).join('')}
                    </ul>
                    
                    <div class="d-flex">
                        <button id="theme-toggle" class="btn btn-outline-light me-2" title="Toggle Theme">
                            <i class="fas fa-moon"></i>
                        </button>
                        <button id="language-toggle" class="btn btn-outline-light" title="Toggle Language">
                            <span class="lang-icon">EN</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    `;
    
    navbarContainer.innerHTML = navbarHTML;
    setupThemeToggle();
    setupLanguageToggle();
}

// Load Footer
function loadFooter() {
    const footerHTML = `
        <footer class="bg-dark text-white pt-5 pb-4">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <h5 class="mb-3">${siteConfig.companyName}</h5>
                        <p class="text-muted">Leading technology solutions provider since ${siteConfig.yearFounded}.</p>
                        <div class="social-links mt-3">
                            ${Object.entries(socialMedia)
                                .filter(([_, details]) => details.active && details.url)
                                .map(([platform, details]) => `
                                    <a href="${details.url}" target="_blank" class="text-white me-3 social-icon" aria-label="${platform}">
                                        <i class="fab ${details.icon} fa-lg"></i>
                                    </a>
                                `).join('')}
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <h5>Quick Links</h5>
                        <ul class="list-unstyled">
                            ${Object.entries(navPages)
                                .map(([page, details]) => `
                                    <li class="mb-2">
                                        <a href="${page === 'index' ? '/' : `/${page}.html`}" class="text-white text-decoration-none">
                                            ${details.title}
                                        </a>
                                    </li>
                                `).join('')}
                        </ul>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <h5>Contact Info</h5>
                        <ul class="list-unstyled text-muted">
                            <li class="mb-2"><i class="fas fa-map-marker-alt me-2"></i> ${siteConfig.location}</li>
                            <li class="mb-2"><i class="fas fa-phone me-2"></i> ${siteConfig.phoneNumber}</li>
                            <li class="mb-2"><i class="fas fa-envelope me-2"></i> ${siteConfig.companyEmail}</li>
                        </ul>
                    </div>
                </div>
                
                <hr class="my-4 bg-secondary">
                
                <div class="row">
                    <div class="col-md-6 text-center text-md-start">
                        <p class="mb-0">&copy; ${new Date().getFullYear()} ${siteConfig.companyName}. All rights reserved.</p>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <p class="mb-0">
                            <a href="/privacy.html" class="text-white text-decoration-none me-3">Privacy Policy</a>
                            <a href="/terms.html" class="text-white text-decoration-none">Terms of Service</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    footerContainer.innerHTML = footerHTML;
}

// Theme Toggle Functionality
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('edamic-theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the saved theme
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('edamic-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('edamic-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// Language Toggle Functionality
function setupLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    if (!languageToggle) return;
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('edamic-language') || 'en';
    applyLanguage(savedLang);
    
    // Toggle language on button click
    languageToggle.addEventListener('click', function() {
        const currentLang = document.documentElement.lang || 'en';
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        
        applyLanguage(newLang);
        localStorage.setItem('edamic-language', newLang);
    });
}

// Apply language to the page
function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.querySelector('.lang-icon').textContent = lang === 'en' ? 'AR' : 'EN';
    }
    
    // Update all translatable elements
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            el.textContent = TRANSLATIONS[lang][key];
        }
    });
}