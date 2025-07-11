/**
 * Contact Page Script
 * Handles all contact page functionality
 */

// Contact Page Data
const contactData = {
    contactInfo: {
        title: "Contact Information",
        items: [
            {
                icon: "fas fa-map-marker-alt",
                text: siteConfig.location
            },
            {
                icon: "fas fa-phone",
                text: siteConfig.phoneNumber,
                link: `tel:${siteConfig.phoneNumber}`
            },
            {
                icon: "fas fa-envelope",
                text: siteConfig.companyEmail,
                link: `mailto:${siteConfig.companyEmail}`
            },
            {
                icon: "fas fa-clock",
                text: "Sunday - Thursday: 9:00 AM - 5:00 PM"
            }
        ]
    },
    socialMedia: [
        {
            icon: "fab fa-facebook-f",
            url: socialMedia.facebook.url,
            name: "Facebook"
        },
        {
            icon: "fab fa-instagram",
            url: socialMedia.instagram.url,
            name: "Instagram"
        },
        {
            icon: "fab fa-youtube",
            url: socialMedia.youtube.url,
            name: "YouTube"
        },
        {
            icon: "fab fa-twitter",
            url: socialMedia.twitter.url,
            name: "Twitter"
        }
    ]
};

// Load Contact Page Content
document.addEventListener('DOMContentLoaded', function() {
    // Only run on contact page
    if (!window.location.pathname.includes('contact.html')) return;
    
    loadContactContent();
});

function loadContactContent() {
    const mainContent = document.getElementById('main-content');
    
    // Contact Section
    const contactHTML = `
        <section class="contact-section py-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <h2 class="card-title mb-4">Get In Touch</h2>
                                <form id="contactForm" novalidate>
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Full Name</label>
                                        <input type="text" class="form-control" id="name" required>
                                        <div class="invalid-feedback">Please provide your name.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email Address</label>
                                        <input type="email" class="form-control" id="email" required>
                                        <div class="invalid-feedback">Please provide a valid email.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="subject" class="form-label">Subject</label>
                                        <input type="text" class="form-control" id="subject" required>
                                        <div class="invalid-feedback">Please provide a subject.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="message" class="form-label">Message</label>
                                        <textarea class="form-control" id="message" rows="5" required></textarea>
                                        <div class="invalid-feedback">Please provide a message.</div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <h2 class="card-title mb-4">${contactData.contactInfo.title}</h2>
                                <ul class="list-unstyled">
                                    ${contactData.contactInfo.items.map(item => `
                                        <li class="mb-3 d-flex">
                                            <div class="flex-shrink-0 text-primary me-3">
                                                <i class="${item.icon} fa-lg"></i>
                                            </div>
                                            <div>
                                                ${item.link ? 
                                                    `<a href="${item.link}" class="text-decoration-none">${item.text}</a>` : 
                                                    item.text
                                                }
                                            </div>
                                        </li>
                                    `).join('')}
                                </ul>
                                
                                <h3 class="h5 mt-5 mb-3">Follow Us</h3>
                                <div class="social-links">
                                    ${contactData.socialMedia.filter(sm => sm.url).map(social => `
                                        <a href="${social.url}" target="_blank" class="btn btn-outline-primary me-2 mb-2" aria-label="${social.name}">
                                            <i class="${social.icon}"></i>
                                        </a>
                                    `).join('')}
                                </div>
                                
                                <div class="mt-4">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.678123456789!2d31.2356789!3d30.056789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzI0LjQiTiAzMcKwMTQnMDguNCJF!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg" 
                                        width="100%" 
                                        height="200" 
                                        style="border:0;" 
                                        allowfullscreen="" 
                                        loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    mainContent.innerHTML = contactHTML;
    
    // Apply translations after content is loaded
    const savedLang = localStorage.getItem('edamic-language') || 'en';
    applyLanguage(savedLang);
}