/**
 * Services Page Script
 * Integrated with config.js and main.js
 */

document.addEventListener('DOMContentLoaded', function() {
    // Only run on services page
    if (!window.location.pathname.includes('services.html')) return;

    // Hide loading spinner when content is ready
    function hideLoading() {
        const loadingElement = document.getElementById('content-loading');
        if (loadingElement) {
            loadingElement.style.opacity = '0';
            setTimeout(() => {
                loadingElement.style.display = 'none';
            }, 300);
        }
    }

    // Render Services Content
    function renderServicesContent() {
        return `
            <!-- Hero Section -->
            <section class="jumbotron text-center bg-light py-5 mb-0">
                <div class="container py-5">
                    <h1 class="display-4 fw-bold" data-lang="services-title">Our Professional Services</h1>
                    <p class="lead text-muted" data-lang="services-subtitle">${siteConfig.servicesDescription}</p>
                </div>
            </section>

            <!-- Main Services Section -->
            <section id="main-services" class="py-5 bg-white">
                <div class="container">
                    <div class="row g-4">
                        ${siteConfig.services.map(service => `
                            <div class="col-lg-4 col-md-6">
                                <div class="card h-100 shadow-sm border-0">
                                    <img src="images/${service.image}" class="card-img-top service-img" alt="${service.title}" loading="lazy">
                                    <div class="card-body">
                                        <h3 class="card-title h5">${service.title}</h3>
                                        <p class="card-text text-muted">${service.description}</p>
                                        <ul class="list-unstyled">
                                            ${service.features.map(feature => `
                                                <li class="mb-2">
                                                    <i class="fas fa-check-circle text-primary me-2"></i>
                                                    ${feature}
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                    <div class="card-footer bg-transparent border-0">
                                        <a href="contact.html" class="btn btn-outline-primary w-100" data-lang="request-service">
                                            Request Service
                                        </a>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Why Choose Us Section -->
            <section class="py-5 bg-light">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <h2 class="display-6 fw-bold mb-4" data-lang="why-choose-us">Why Choose ${siteConfig.companyName}?</h2>
                            <p class="lead text-muted" data-lang="why-choose-text">${siteConfig.whyChooseUs.intro}</p>
                            
                            ${siteConfig.whyChooseUs.reasons.map(reason => `
                                <div class="d-flex align-items-start my-4">
                                    <div class="flex-shrink-0 text-primary me-3">
                                        <i class="${reason.icon} fa-2x"></i>
                                    </div>
                                    <div>
                                        <h5 class="mb-2" data-lang="${reason.key}-title">${reason.title}</h5>
                                        <p class="mb-0 text-muted" data-lang="${reason.key}-text">${reason.description}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="col-lg-6">
                            <div class="card shadow-sm border-0 overflow-hidden">
                                <div class="card-body p-0">
                                    <img src="images/${siteConfig.whyChooseUs.image}" alt="Why Choose Us" class="img-fluid w-100" loading="lazy">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-5 bg-primary text-white">
                <div class="container text-center py-4">
                    <h2 class="display-6 fw-bold mb-4" data-lang="ready-transform">Ready to Transform Your Business?</h2>
                    <div class="d-flex justify-content-center gap-3">
                        <a href="contact.html" class="btn btn-light btn-lg px-4" data-lang="contact-us">
                            Contact Us
                        </a>
                        <a href="tel:${siteConfig.phoneNumber}" class="btn btn-outline-light btn-lg px-4">
                            <i class="fas fa-phone me-2"></i> <span data-lang="call-now">Call Now</span>
                        </a>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize the page
    function initServicesPage() {
        // Render the main structure
        document.getElementById('main-content').innerHTML = renderServicesContent();
        
        // Apply translations
        const savedLang = localStorage.getItem('edamic-language') || 'en';
        applyLanguage(savedLang);
        
        // Hide loading spinner
        setTimeout(hideLoading, 500);
    }

    // Start initialization
    initServicesPage();
});