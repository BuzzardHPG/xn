// Site Configuration
const siteConfig = {
    companyName: "EDAMIC Development",
    companyEmail: "contact@EDAMIC-Dev.com",
    companyWebsite: "www.EDAMIC-Dev.com",
    phoneNumber: "+20 155 399 4116",
    location: "Cairo, Egypt",
    yearFounded: 2024,
    // googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.678123456789!2d31.2356789!3d30.056789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzI0LjQiTiAzMcKwMTQnMDguNCJF!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg"

    servicesDescription: "Comprehensive technology solutions tailored to your business needs",

    services: [
        {
            image: 'softwaredev.jpg',
            title: 'Software Development',
            description: 'Custom web, mobile, and desktop applications development with cutting-edge technologies.',
            features: [
                'Web Application Development',
                'Mobile App Development',
                'Enterprise Software Solutions',
                'UI/UX Design'
            ]
        },
        {
            image: 'Automation.jpg',
            title: 'Automation & Robotics',
            description: 'Industrial automation solutions and robotic systems for modern manufacturing.',
            features: [
                'Industrial Automation',
                'Robotic Process Automation',
                'AI-powered Robotics',
                'IoT Integration'
            ]
        },
        {
            image: 'embedded.jpg',
            title: 'Embedded Systems',
            description: 'Custom electronic control systems and embedded solutions for various industries.',
            features: [
                'Circuit Design',
                'Microcontroller Programming',
                'Sensor Integration',
                'Prototyping'
            ]
        }
    ],

    whyChooseUs: {
        intro: "We deliver exceptional value through our unique approach to technology solutions",
        image: "why-choose-us.jpg",
        reasons: [
            {
                key: 'experts',
                icon: 'fas fa-award',
                title: 'Certified Experts',
                description: 'Our team holds professional certifications in various technology domains.'
            },
            {
                key: 'delivery',
                icon: 'fas fa-clock',
                title: 'Fast Delivery',
                description: 'We respect your time and deliver projects within agreed timelines.'
            },
            {
                key: 'support',
                icon: 'fas fa-headset',
                title: '24/7 Support',
                description: 'Our support team is always ready to assist you with any issues.'
            }
        ]
    }
};

// Social Media Links
const socialMedia = {
    youtube: {
        url: "https://www.youtube.com/@Eastern_CADD",
        icon: "fa-youtube",
        active: false
    },
    instagram: {
        url: "https://www.instagram.com/easterncadd/",
        icon: "fa-instagram",
        active: false
    },
    facebook: {
        url: "https://www.facebook.com/EDAMIC",
        icon: "fa-facebook-f",
        active: true
    },
    tiktok: {
        url: "https://www.tiktok.com/@eastern_cadd",
        icon: "fa-tiktok",
        active: false
    },
    twitter: {
        url: "https://x.com/EasternCadd",
        icon: "fa-twitter",
        active: false
    },
    whatsapp: {
        url: "",
        icon: "fa-whatsapp",
        active: false
    }
};

// Navigation Pages
const navPages = {
    index: {
        title: "Home",
        showInNav: true
    },
    about: {
        title: "About Us",
        showInNav: true
    },
    services: {
        title: "Services",
        showInNav: true
    },
    courses: {
        title: "Courses",
        showInNav: true
    },
    contact: {
        title: "Contact",
        showInNav: true
    },
    login: {
        title: "Login",
        showInNav: false
    }
};

// Courses Settings
const coursesSettings = {
    currency: "EGP",
    discountText: "Early Bird Discount",
    certificateText: `Certified by ${siteConfig.companyName}`
};

// Modal Settings
const modalSettings = {
    features: [
        "Hands-on projects",
        "Practical training",
        "Certified instructors"
    ]
};

// Translations
const TRANSLATIONS = {
    en: {
        welcome: "Welcome to EDAMIC Development",
        "welcome-text": "We are leaders in administrative development and digital transformation.",
        "featured-services": "Featured Services",
        "popular-courses": "Popular Courses",
        "learn-more": "Learn More",
        "testimonials": "What Our Clients Say",
        "ready-to-start": "Ready to start your project?",
        "cta-text": "Get in touch with our team for a free consultation.",
        "contact-us": "Contact Us",
        "services-title": "Our Professional Services",
        "services-subtitle": "Comprehensive technology solutions tailored to your business needs",
        "request-service": "Request Service",
        "why-choose-us": "Why Choose EDAMIC Development?",
        "why-choose-text": "We deliver exceptional value through our unique approach to technology solutions.",
        "certified-experts": "Certified Experts",
        "certified-experts-text": "Our team holds professional certifications in various technology domains.",
        "fast-delivery": "Fast Delivery",
        "fast-delivery-text": "We respect your time and deliver projects within agreed timelines.",
        "support-24-7": "24/7 Support",
        "support-24-7-text": "Our support team is always ready to assist you with any issues.",
        "our-process": "Our Working Process",
        "ready-transform": "Ready to Transform Your Business?",
        "ready-transform-text": "Let's discuss how we can help you achieve your technology goals.",
        "contact-us": "Contact Us",
        "call-now": "Call Now"
    },
    ar: {
        welcome: "مرحبًا بكم في EDAMIC Development",
        "welcome-text": "نحن رواد في التطوير الإداري والتحول الرقمي.",
        "featured-services": "الخدمات المميزة",
        "popular-courses": "الكورسات الشائعة",
        "learn-more": "المزيد",
        "testimonials": "ما يقوله عملاؤنا",
        "ready-to-start": "هل أنت مستعد لبدء مشروعك؟",
        "cta-text": "تواصل مع فريقنا للحصول على استشارة مجانية.",
        "contact-us": "اتصل بنا"
    }
};