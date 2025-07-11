/**
 * Home Page Specific Script
 */

// Home Page Data
const homeData = {
    hero: {
        title: "Welcome to EDAMIC Development",
        text: "We are leaders in administrative development and digital transformation.",
        image: "images/home.jpg"
    },
    services: [
        {
            image: "softwaredev.jpg",
            title: "Software Development",
            text: "We develop websites, mobile apps, and desktop applications tailored to your needs."
        },
        {
            image: "Automationrobots.jpg",
            title: "Automation & Robotics",
            text: "Designing and programming automated machinery and robots for industry and research."
        },
        {
            image: "Electronicircuits.jpg",
            title: "Electronic Control Circuits",
            text: "Design and development of electronic control circuits for various projects."
        }
    ],
    courses: [
        {
            image: "webdev.jpg",
            title: "Web Design",
            text: "Learn HTML5, CSS3, JavaScript, and Bootstrap to create modern websites."
        },
        {
            image: "mobiledev.jpg",
            title: "Mobile Development",
            text: "Build mobile apps using React Native and Flutter."
        },
        {
            image: "elecsys.jpg",
            title: "Electrical Systems",
            text: "Learn the basics and advanced concepts of electrical systems."
        }
    ],
    stats: [
        { value: "50+", label: "Projects Completed" },
        { value: "95%", label: "Client Satisfaction" },
        { value: "20+", label: "Professional Team" },
        { value: "5", label: "Years Experience" }
    ],
    testimonials: [
        {
            text: "Excellent service and professional team. Highly recommended!",
            author: "Ahmed Mohamed",
            position: "CEO, Tech Solutions"
        },
        {
            text: "The training courses transformed our team's skills dramatically.",
            author: "Sarah Mahmoud",
            position: "HR Manager, Future Corp"
        }
    ]
};

// Load Home Page Content
document.addEventListener('DOMContentLoaded', function() {
    // Only run on home page
    if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/') return;
    
    loadHomeContent();
});

function loadHomeContent() {
    const mainContent = document.getElementById('main-content');
    
    // Hero Section
    const heroHTML = `
        <section id="hero" class="py-5 text-center">
            <div class="container">
                <h1 class="display-4 mb-4" data-lang="welcome">${homeData.hero.title}</h1>
                <p class="lead mb-5" data-lang="welcome-text">${homeData.hero.text}</p>
                <img src="${homeData.hero.image}" alt="${siteConfig.companyName} Banner" class="img-fluid rounded shadow-lg">
            </div>
        </section>
    `;
    
    // Services Section
    const servicesHTML = `
        <section id="featured-services" class="py-5 sec-diff">
            <div class="container">
                <h2 class="text-center mb-5" data-lang="featured-services">Featured Services</h2>
                <div class="row">
                    ${homeData.services.map(service => `
                        <div class="col-md-4 mb-4">
                            <div class="card h-100 shadow-sm">
                                <img src="images/${service.image}" class="card-img-top" alt="${service.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${service.title}</h5>
                                    <p class="card-text">${service.text}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    
    // Courses Section
    const coursesHTML = `
        <section id="popular-courses" class="py-5">
            <div class="container">
                <h2 class="text-center mb-5" data-lang="popular-courses">Popular Courses</h2>
                <div class="row">
                    ${homeData.courses.map(course => `
                        <div class="col-md-4 mb-4">
                            <div class="card h-100 shadow-sm">
                                <img src="images/${course.image}" class="card-img-top" alt="${course.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${course.title}</h5>
                                    <p class="card-text">${course.text}</p>
                                </div>
                                <div class="card-footer bg-transparent">
                                    <a href="courses.html" class="btn btn-primary" data-lang="learn-more">Learn More</a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    
    // Stats Section
    const statsHTML = `
        <section id="stats" class="py-5 sec-diff">
            <div class="container">
                <div class="row text-center">
                    ${homeData.stats.map(stat => `
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="stat-item p-4">
                                <h3 class="stat-value">${stat.value}</h3>
                                <p class="stat-label">${stat.label}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    
    // Testimonials Section
    const testimonialsHTML = `
        <section id="testimonials" class="py-5">
            <div class="container">
                <h2 class="text-center mb-5" data-lang="testimonials">What Our Clients Say</h2>
                <div class="row">
                    ${homeData.testimonials.map(testimonial => `
                        <div class="col-md-6 mb-4">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <p class="card-text mb-4">"${testimonial.text}"</p>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-placeholder rounded-circle"></div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-0">${testimonial.author}</h6>
                                            <small class="text-muted">${testimonial.position}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    
    // CTA Section
    const ctaHTML = `
        <section id="cta" class="py-5 bg-primary text-white">
            <div class="container text-center">
                <h2 class="mb-4" data-lang="ready-to-start">Ready to start your project?</h2>
                <p class="lead mb-5" data-lang="cta-text">Get in touch with our team for a free consultation.</p>
                <a href="contact.html" class="btn btn-light btn-lg px-5" data-lang="contact-us">Contact Us</a>
            </div>
        </section>
    `;
    
    // Combine all sections
    mainContent.innerHTML = `
        ${heroHTML}
        ${servicesHTML}
        ${coursesHTML}
        ${statsHTML}
        ${testimonialsHTML}
        ${ctaHTML}
    `;
    
    // Apply translations after content is loaded
    const savedLang = localStorage.getItem('edamic-language') || 'en';
    applyLanguage(savedLang);
}