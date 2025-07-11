/**
 * About Page Script
 * Handles all about page specific functionality
 */

// About Page Data
const aboutData = {
    about: {
        title: "About Us",
        text: `Established in ${siteConfig.yearFounded}, ${siteConfig.companyName} specializes in delivering advanced technological solutions.`,
        image: "images/about-us.jpg"
    },
    visionMission: {
        title: "Vision & Mission",
        vision: {
            title: "Vision",
            text: "To lead the region in delivering advanced technology solutions and administrative development by transforming innovative ideas into tangible realities."
        },
        mission: {
            title: "Mission",
            text: "To provide exceptional technology services rooted in innovation and quality, enhancing productivity and fostering continuous development for businesses and individuals."
        }
    },
    history: {
        title: "Our History",
        text: `Since our inception in ${siteConfig.yearFounded}, ${siteConfig.companyName} has been at the forefront of technological innovation. We started as a small team of passionate engineers and developers, and over the years, we have grown into a leading company in the region, delivering cutting-edge solutions to our clients.`,
        image: "images/history.avif"
    },
    values: {
        title: "Our Values",
        items: [
            {
                key: "innovation",
                title: "Innovation",
                text: "We constantly strive to innovate and bring new ideas to life"
            },
            {
                key: "quality",
                title: "Quality",
                text: "We are committed to delivering high-quality solutions"
            },
            {
                key: "integrity",
                title: "Integrity",
                text: "We conduct our business with the highest level of integrity"
            }
        ]
    }
};

// Load About Page Content
document.addEventListener('DOMContentLoaded', function() {
    // Only run on about page
    if (!window.location.pathname.includes('about.html')) return;
    
    loadAboutContent();
});

function loadAboutContent() {
    const mainContent = document.getElementById('main-content');
    
    // About Section
    const aboutHTML = `
        <section id="about" class="py-5 text-center">
            <div class="container">
                <h2 class="display-5" data-lang="about">${aboutData.about.title}</h2>
                <p class="lead" data-lang="about-text">${aboutData.about.text}</p>
                <img src="${aboutData.about.image}" alt="About Us" class="img-fluid mt-4 rounded">
            </div>
        </section>
    `;
    
    // Vision & Mission Section
    const visionMissionHTML = `
        <section id="vision-mission" class="py-5 sec-diff">
            <div class="container">
                <h2 class="text-center mb-5" data-lang="vision-mission">${aboutData.visionMission.title}</h2>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card mb-4 shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title" data-lang="vision">${aboutData.visionMission.vision.title}</h5>
                                <p class="card-text" data-lang="vision-text">${aboutData.visionMission.vision.text}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card mb-4 shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title" data-lang="mission">${aboutData.visionMission.mission.title}</h5>
                                <p class="card-text" data-lang="mission-text">${aboutData.visionMission.mission.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    // History Section
    const historyHTML = `
        <section id="history" class="py-5">
            <div class="container">
                <h2 class="text-center mb-5" data-lang="our-history">${aboutData.history.title}</h2>
                <div class="row">
                    <div class="col-md-6">
                        <img src="${aboutData.history.image}" alt="Our History" class="img-fluid rounded">
                    </div>
                    <div class="col-md-6">
                        <p class="lead" data-lang="history-text">${aboutData.history.text}</p>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    // Values Section
    const valuesHTML = `
        <section id="values" class="py-5 sec-diff">
            <div class="container">
                <h2 class="text-center mb-5" data-lang="our-values">${aboutData.values.title}</h2>
                <div class="row">
                    ${aboutData.values.items.map(value => `
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <div class="card-body">
                                    <h5 class="card-title" data-lang="${value.key}">${value.title}</h5>
                                    <p class="card-text" data-lang="${value.key}-text">${value.text}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    
    // Combine all sections
    mainContent.innerHTML = `
        ${aboutHTML}
        ${visionMissionHTML}
        ${historyHTML}
        ${valuesHTML}
    `;
    
    // Apply translations after content is loaded
    const savedLang = localStorage.getItem('edamic-language') || 'en';
    applyLanguage(savedLang);
}