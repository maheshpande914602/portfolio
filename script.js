document.addEventListener('DOMContentLoaded', () => {
    // Data for Dynamic Content
    const aboutContent = `
        <p>Hello! I’m Mahesh, a passionate Java Developer specializing in building impactful web and mobile applications.</p>
        <p>With a strong foundation in Java, I have worked on a variety of projects, ranging from enterprise-level systems to user-friendly mobile apps. My goal is to deliver high-quality solutions that empower users and businesses.</p>
    `;
    
    const projects = [
        {
            title: "Inventory Management System",
            description: "A web application for managing inventory efficiently, built using Java, Spring Boot, and MySQL.",
            link: "https://github.com/maheshpande914602/inventory-management"
        },
        {
            title: "Android Expense Tracker",
            description: "A mobile app for tracking personal expenses, developed with Android Studio and Firebase.",
            link: "https://github.com/maheshpande914602/expense-tracker"
        },
        {
            title: "E-commerce Website",
            description: "An online shopping platform using JSP, Servlets, and Hibernate.",
            link: "https://github.com/maheshpande914602/ecommerce-website"
        },
        {
            title: "Weather Forecast App",
            description: "A real-time weather app built with Python, Flask, and OpenWeatherMap API.",
            link: "https://github.com/maheshpande914602/weather-app"
        }
    ];
    
    const skills = ['Java', 'Spring Boot', 'Hibernate', 'Android Development', 'Python', 'PHP', 'RESTful APIs', 'Git'];
    
    const contactInfo = `
        <p>Email: <a href="mailto:maheshpande2015@gmail.com">maheshpande2015@gmail.com</a></p>
        <p>Phone: <a href="tel:+919146024870">+91 9146024870</a></p>
        <p><a href="https://www.linkedin.com/in/mahi946/" target="_blank">LinkedIn</a> | <a href="https://github.com/maheshpande914602" target="_blank">GitHub</a></p>
    `;
    
    // Load Dynamic Content
    document.getElementById('about-content').innerHTML = aboutContent;
    
    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="#" class="project-link" data-title="${project.title}" data-description="${project.description}" data-link="${project.link}">View Project</a>
        `;
        projectsGrid.appendChild(projectCard);
    });
    
    const skillsGrid = document.getElementById('skills-grid');
    skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.textContent = skill;
        skillsGrid.appendChild(skillDiv);
    });
    
    document.getElementById('contact-info').innerHTML = contactInfo;

    // Modal for Project Details
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const modalClose = document.querySelector('.close');
    
    // Show Modal
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            modalTitle.textContent = e.target.getAttribute('data-title');
            modalDescription.textContent = e.target.getAttribute('data-description');
            modalLink.href = e.target.getAttribute('data-link');
        });
    });
    
    // Close Modal
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Back-to-Top Button
    const backToTop = document.createElement('button');
    backToTop.textContent = '↑';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #0078d7;
        color: white;
        border: none;
        border-radius: 50%;
        padding: 0.8rem;
        font-size: 1.5rem;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        display: none;
        cursor: pointer;
    `;
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
