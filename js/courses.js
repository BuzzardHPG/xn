/**
 * Courses Page Script
 * Handles all functionality for the courses page
 */

// Courses Data
const coursesData = {
    features: [
        {
            title: "Practical-Oriented Training",
            items: [
                "All courses are designed to provide a hands-on learning experience, focusing more on practical application than theoretical knowledge.",
                "Practical projects are provided at the end of each course to ensure the application of what has been learned."
            ]
        },
        {
            title: "Modern Tools and Equipment",
            items: [
                "Modern tools and software are used in training, such as:",
                [
                    "3D Printers",
                    "Robots and Automated Systems",
                    "Microcontrollers (Arduino, AVR, PIC)",
                    "Engineering Design Software (Inventor, SolidWorks, Fusion 360)"
                ]
            ]
        },
        {
            title: "Certified Courses",
            items: [
                "All courses offer certificates accredited by Eastern-CADD (licensed and accredited in the market).",
                "Training on the Latest Technologies:",
                [
                    "Course content is continuously updated to include the latest technologies and trends in various fields."
                ]
            ]
        },
        {
            title: "Professional Training Team",
            items: [
                "Training is conducted by a team of experts with extensive experience in their fields.",
                "Continuous support and guidance even after course completion."
            ]
        }
    ],
    courses: [
        {
            title: "Web Development",
            image: "webdev.jpg",
            options: [
                { name: "Front End", modalId: "frontEndModal" },
                { name: "Back End", modalId: "backEndModal" },
                { name: "Full Stack", modalId: "fullStackModal" }
            ]
        },
        {
            title: "Mobile Development",
            image: "mobiledev.jpg",
            options: [
                { name: "React Native", modalId: "reactNativeModal" },
                { name: "Flutter", modalId: "flutterModal" },
                { name: "iOS (Swift)", modalId: "iosModal" },
                { name: "Android (Kotlin)", modalId: "androidModal" }
            ]
        },
        {
            title: "Desktop Development",
            image: "desk-dev.jpg",
            options: [
                { name: "C Programming", modalId: "cModal" },
                { name: "C++", modalId: "cppModal" },
                { name: "C#", modalId: "csModal" },
                { name: "Python", modalId: "pythonModal" },
                { name: "Java", modalId: "javaModal" }
            ]
        },
        {
            title: "Embedded Systems",
            image: "embedded.jpg",
            options: [
                { name: "Arduino", modalId: "arduinoModal" },
                { name: "ESP", modalId: "espModal" },
                { name: "Raspberry Pi", modalId: "raspiModal" },
                { name: "PIC Microcontrollers", modalId: "picModal" },
                { name: "AVR", modalId: "avrModal" },
                { name: "ARM", modalId: "armModal" }
            ]
        },
        {
            title: "Electrical Systems",
            image: "elecsys.jpg",
            options: [
                { name: "Basic Electrical", modalId: "basicElectricalModal" },
                { name: "Advanced Electrical", modalId: "advancedElectricalModal" },
                { name: "Industrial Electrical", modalId: "industrialElectricalModal" }
            ]
        },
        {
            title: "Engineering Design",
            image: "engdesign.avif",
            options: [
                { name: "Mechanical Design 1", modalId: "mech1Modal" },
                { name: "Mechanical Design 2", modalId: "mech2Modal" },
                { name: "3D Printing", modalId: "3dPrintingModal" },
                { name: "CAD/CAM", modalId: "cadcamModal" }
            ]
        },
        {
            title: "Robotics & Automation",
            image: "robots.avif",
            options: [
                { name: "ROS", modalId: "rosModal" },
                { name: "Gazebo", modalId: "gazeboModal" },
                { name: "Industrial Robotics", modalId: "industrialRoboticsModal" }
            ]
        },
        {
            title: "Automation & Control",
            image: "Automation.jpg",
            options: [
                { name: "PLC Programming", modalId: "plcModal" },
                { name: "SCADA Systems", modalId: "scadaModal" },
                { name: "HMI Design", modalId: "hmiModal" },
                { name: "Industrial Automation", modalId: "industrialAutoModal" }
            ]
        },
        {
            title: "Low Current Systems",
            image: "lowcurrent.avif",
            options: [
                { name: "Light Current", modalId: "lightCurrentModal" },
                { name: "BMS", modalId: "bmsModal" },
                { name: "Home Automation", modalId: "homeautoModal" },
                { name: "Public Address", modalId: "publicaddModal" },
                { name: "IoT", modalId: "iotModal" }
            ]
        },
        {
            title: "MEP Systems",
            image: "mep.avif",
            options: [
                { name: "Firefighting", modalId: "firefightingModal" },
                { name: "Plumbing", modalId: "plumbingModal" },
                { name: "HVAC", modalId: "hvacModal" },
                { name: "Revit MEP", modalId: "revitModal" }
            ]
        },
        {
            title: "Business & Innovation",
            image: "business.avif",
            options: [
                { name: "Startup Development", modalId: "startupModal" },
                { name: "Innovation Management", modalId: "innovationModal" },
                { name: "Digital Marketing", modalId: "digitalMarketingModal" }
            ]
        },
        {
            title: "Data Science & AI",
            image: "data-science.jpg",
            options: [
                { name: "Python for Data Science", modalId: "pythonDataModal" },
                { name: "Machine Learning", modalId: "mlModal" },
                { name: "Deep Learning", modalId: "dlModal" },
                { name: "Computer Vision", modalId: "cvModal" }
            ]
        }
    ],
    modals: {
        // Web Development Modals
        frontEndModal: {
            title: "Front End Development",
            topics: [
                "HTML5 & CSS3 Fundamentals",
                "JavaScript & ES6+",
                "Responsive Design & Bootstrap",
                "React.js Framework",
                "State Management",
                "Performance Optimization"
            ],
            duration: "40 hours",
            price: "3000 EGP",
            originalPrice: "4000",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Hands-on projects",
                "Real-world applications",
                "Portfolio building"
            ]
        },
        backEndModal: {
            title: "Back End Development",
            topics: [
                "Node.js Fundamentals",
                "Express.js Framework",
                "RESTful API Design",
                "Database Integration (SQL & NoSQL)",
                "Authentication & Authorization",
                "Deployment Strategies"
            ],
            duration: "45 hours",
            price: "3500 EGP",
            originalPrice: "4500",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Build complete backend systems",
                "Database design",
                "Security best practices"
            ]
        },
        fullStackModal: {
            title: "Full Stack Development",
            topics: [
                "Frontend with React",
                "Backend with Node.js",
                "Database Integration",
                "Authentication Systems",
                "Full Stack Deployment",
                "Project Architecture"
            ],
            duration: "60 hours",
            price: "5000 EGP",
            originalPrice: "6500",
            certificate: "Certified by Eastern-CADD",
            features: [
                "End-to-end project development",
                "Industry best practices",
                "Capstone project"
            ]
        },

        // Mobile Development Modals
        reactNativeModal: {
            title: "React Native Development",
            topics: [
                "React Native Fundamentals",
                "Component Architecture",
                "State Management",
                "Native Modules",
                "App Deployment",
                "Performance Optimization"
            ],
            duration: "40 hours",
            price: "3500 EGP",
            originalPrice: "4500",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Build cross-platform apps",
                "Publish to app stores",
                "Real-world projects"
            ]
        },
        flutterModal: {
            title: "Flutter Development",
            topics: [
                "Dart Programming",
                "Widget Tree Architecture",
                "State Management",
                "Firebase Integration",
                "Platform Channels",
                "App Publishing"
            ],
            duration: "40 hours",
            price: "3500 EGP",
            originalPrice: "4500",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Beautiful UI design",
                "High performance apps",
                "Complete project lifecycle"
            ]
        },

        // Embedded Systems Modals
        arduinoModal: {
            title: "Arduino Programming",
            topics: [
                "Microcontroller Fundamentals",
                "Digital & Analog I/O",
                "Sensor Integration",
                "Motor Control",
                "Wireless Communication",
                "IoT Applications"
            ],
            duration: "30 hours",
            price: "2500 EGP",
            originalPrice: "3500",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Hands-on hardware projects",
                "Real-world applications",
                "Prototype development"
            ]
        },
        raspiModal: {
            title: "Raspberry Pi Development",
            topics: [
                "Linux for Embedded Systems",
                "Python Programming",
                "GPIO Control",
                "Computer Vision Basics",
                "Home Automation",
                "IoT Systems"
            ],
            duration: "35 hours",
            price: "3000 EGP",
            originalPrice: "4000",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Build complete systems",
                "Integration with cloud services",
                "Practical automation projects"
            ]
        },

        // Engineering Design Modals
        mech1Modal: {
            title: "Mechanical Design I",
            topics: [
                "Engineering Drawing Fundamentals",
                "SolidWorks Basics",
                "Part Modeling",
                "Assembly Design",
                "Basic Simulations",
                "Technical Documentation"
            ],
            duration: "40 hours",
            price: "3000 EGP",
            originalPrice: "4000",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Industry-standard software",
                "Practical design projects",
                "Portfolio development"
            ]
        },
        mech2Modal: {
            title: "Mechanical Design II",
            topics: [
                "Advanced Part Modeling",
                "Complex Assemblies",
                "Motion Analysis",
                "Finite Element Analysis",
                "Sheet Metal Design",
                "Product Documentation"
            ],
            duration: "45 hours",
            price: "3500 EGP",
            originalPrice: "4500",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Professional-level projects",
                "Simulation techniques",
                "Industry workflows"
            ]
        },

        // Automation & Control Modals
        plcModal: {
            title: "PLC Programming",
            topics: [
                "PLC Hardware Architecture",
                "Ladder Logic Programming",
                "Function Block Diagrams",
                "HMI Integration",
                "Industrial Communication",
                "Troubleshooting"
            ],
            duration: "40 hours",
            price: "3500 EGP",
            originalPrice: "4500",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Real industrial equipment",
                "Practical automation projects",
                "Industry-standard practices"
            ]
        },
        scadaModal: {
            title: "SCADA Systems",
            topics: [
                "SCADA Architecture",
                "HMI Design",
                "Alarm Management",
                "Data Acquisition",
                "Reporting Systems",
                "System Integration"
            ],
            duration: "35 hours",
            price: "3000 EGP",
            originalPrice: "4000",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Industrial-grade software",
                "Real-world case studies",
                "Complete system design"
            ]
        },

        // Business & Innovation Modals
        startupModal: {
            title: "Startup Development",
            topics: [
                "Idea Validation",
                "Business Model Canvas",
                "Market Research",
                "Funding Strategies",
                "Legal Framework",
                "Growth Hacking"
            ],
            duration: "30 hours",
            price: "2500 EGP",
            originalPrice: "3500",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Real startup case studies",
                "Mentorship from entrepreneurs",
                "Pitch development"
            ]
        },
        digitalMarketingModal: {
            title: "Digital Marketing",
            topics: [
                "SEO Fundamentals",
                "Social Media Marketing",
                "Content Strategy",
                "Google Analytics",
                "Email Marketing",
                "Advertising Campaigns"
            ],
            duration: "35 hours",
            price: "3000 EGP",
            originalPrice: "4000",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Practical campaign management",
                "Certification preparation",
                "Real-world projects"
            ]
        },

        // Data Science & AI Modals
        pythonDataModal: {
            title: "Python for Data Science",
            topics: [
                "Python Programming",
                "NumPy & Pandas",
                "Data Visualization",
                "Statistical Analysis",
                "Data Cleaning",
                "Basic Machine Learning"
            ],
            duration: "40 hours",
            price: "3500 EGP",
            originalPrice: "4500",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Hands-on data projects",
                "Real datasets",
                "Portfolio building"
            ]
        },
        mlModal: {
            title: "Machine Learning",
            topics: [
                "Supervised Learning",
                "Unsupervised Learning",
                "Model Evaluation",
                "Feature Engineering",
                "Neural Networks",
                "Model Deployment"
            ],
            duration: "45 hours",
            price: "4000 EGP",
            originalPrice: "5000",
            certificate: "Certified by Eastern-CADD",
            features: [
                "Industry projects",
                "Competition datasets",
                "End-to-end ML pipelines"
            ]
        }
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    if (!window.location.pathname.includes('courses.html')) return;
    
    loadCoursesContent();
    setupEventListeners();
});

function loadCoursesContent() {
    const mainContent = document.getElementById('main-content');
    
    // Features Section
    const featuresHTML = `
        <section class="features-section py-5">
            <div class="container">
                <h2 class="section-title text-center mb-5">Why Choose Our Courses?</h2>
                <div class="row g-4">
                    ${coursesData.features.map(feature => `
                        <div class="col-md-6">
                            <div class="feature-card card h-100 shadow-sm">
                                <div class="card-body">
                                    <h3 class="card-title">
                                        <i class="fas fa-check-circle me-2"></i>${feature.title}
                                    </h3>
                                    <ul class="feature-list">
                                        ${feature.items.map(item => 
                                            Array.isArray(item) ? 
                                            `<ul class="sub-features">${item.map(sub => `<li>${sub}</li>`).join('')}</ul>` : 
                                            `<li>${item}</li>`
                                        ).join('')}
                                    </ul>
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
        <section class="courses-section py-5 bg-light">
            <div class="container">
                <h2 class="section-title text-center mb-5">Our Professional Courses</h2>
                <div class="row g-4">
                    ${coursesData.courses.map(course => `
                        <div class="col-lg-4 col-md-6">
                            <div class="course-card card h-100">
                                <div class="course-img-container">
                                    <img src="images/${course.image}" class="card-img-top" alt="${course.title}">
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title">${course.title}</h3>
                                    <div class="course-options">
                                        ${course.options.map(option => `
                                            <button class="btn btn-outline-primary" 
                                                data-bs-toggle="modal" 
                                                data-bs-target="#${option.modalId}">
                                                ${option.name}
                                            </button>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    
    // Contact Section
    const contactHTML = `
        <section class="contact-section py-5">
            <div class="container">
                <h2 class="section-title text-center mb-5">Ready to Start Learning?</h2>
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="card h-100">
                            <div class="card-body">
                                <h3 class="card-title">Contact Information</h3>
                                <ul class="contact-info">
                                    <li><i class="fas fa-map-marker-alt"></i> ${siteConfig.location}</li>
                                    <li><i class="fas fa-phone"></i> ${siteConfig.phoneNumber}</li>
                                    <li><i class="fas fa-envelope"></i> ${siteConfig.companyEmail}</li>
                                    <li><i class="fas fa-globe"></i> ${siteConfig.companyWebsite}</li>
                                </ul>
                                <div class="social-links mt-4">
                                    <a href="${socialMedia.facebook.url}" class="btn btn-outline-primary me-2">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="${socialMedia.instagram.url}" class="btn btn-outline-primary me-2">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="${socialMedia.youtube.url}" class="btn btn-outline-primary">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">Enquire About Courses</h3>
                                <form id="course-contact-form">
                                    <div class="mb-3">
                                        <input type="text" class="form-control" placeholder="Your Name" required>
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" placeholder="Your Email" required>
                                    </div>
                                    <div class="mb-3">
                                        <select class="form-select" required>
                                            <option value="">Select Course Interest</option>
                                            ${coursesData.courses.map(course => 
                                                `<option>${course.title}</option>`
                                            ).join('')}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <textarea class="form-control" rows="5" placeholder="Your Message" required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100">Send Enquiry</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    mainContent.innerHTML = featuresHTML + coursesHTML + contactHTML;
    generateModals();
}

function generateModals() {
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modals-container';
    
    Object.entries(coursesData.modals).forEach(([modalId, modalData]) => {
        const modalHTML = `
            <div class="modal fade" id="${modalId}" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${modalData.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h6>Course Topics:</h6>
                                    <ul class="topics-list">
                                        ${modalData.topics.map(topic => `<li><i class="fas fa-check"></i> ${topic}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <div class="course-details">
                                        <p><strong>Duration:</strong> ${modalData.duration}</p>
                                        <p class="price">
                                            <strong>Price:</strong> 
                                            <span class="original-price">${modalData.originalPrice} EGP</span>
                                            <span class="discounted-price">${modalData.price} EGP</span>
                                        </p>
                                        <p><strong>Certificate:</strong> ${modalData.certificate}</p>
                                        <h6>Course Features:</h6>
                                        <ul class="features-list">
                                            ${modalData.features.map(feat => `<li><i class="fas fa-star"></i> ${feat}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onclick="registerCourse('${modalData.title}')">Register Now</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        modalContainer.innerHTML += modalHTML;
    });
    
    document.body.appendChild(modalContainer);
}

function setupEventListeners() {
    // Contact form submission
    const form = document.getElementById('course-contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your enquiry! We will contact you soon with course details.');
            form.reset();
        });
    }
}

function registerCourse(courseName) {
    console.log('Registering for:', courseName);
    window.location.href = `regform.html?course=${encodeURIComponent(courseName)}`;
}

window.registerCourse = registerCourse;