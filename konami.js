document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. SISTEMA MULTIIDIOMA (i18n)
    // ==========================================
    
    const translations = {
        es: {
            "nav-about": "Sobre Mí",
            "nav-experience": "Trayectoria",
            "nav-skills": "Habilidades",
            "nav-stack": "Stack",
            "nav-contact": "Contacto",
            "hero-subtitle": "Administrador de Sistemas de TI",
            "hero-btn": "Ver mi trayectoria",
            "about-title": "Sobre Mí",
            "about-text": "Mi trayectoria profesional comenzó con una sólida base académica en administración de sistemas, la cual he podido aplicar y expandir en un entorno profesional real. En mi rol en UQUIFA, he evolucionado desde una posición de becario hasta convertirme en Administrador de Sistemas de TI, lo que me ha permitido desarrollar una capacidad avanzada para la resolución de problemas y la gestión de infraestructuras tecnológicas. Me apasiona seguir aprendiendo y aplicar mis conocimientos para optimizar sistemas y garantizar su eficiencia.",
            "about-cv": "Descargar CV",
            "experience-title": "Trayectoria",
            "exp-hs-title": "Bachillerato de Ciencias y Tecnología",
            "exp-asix-title": "CFGS en Administración de Sistemas Informáticos en Red (ASIX)",
            "exp-intern-date": "jun. 2023 - may. 2024",
            "exp-intern-title": "Becario de Sistemas en UQUIFA",
            "exp-intern-desc": "Periodo de prácticas donde adquirí experiencia práctica en el mantenimiento y la administración de sistemas.",
            "exp-admin-date": "may. 2024 - Actualidad",
            "exp-admin-title": "Administrador de Sistemas de TI en UQUIFA",
            "exp-admin-desc": "Promoción a rol de administrador, gestionando la infraestructura TI de la empresa tras el periodo de prácticas.",
            "exp-uni-date": "2024 - Actualidad",
            "exp-uni-title": "Grado en Ingeniería Informática",
            "skills-title": "Habilidades Clave",
            "skills-cat1": "Sistemas y Redes",
            "skills-cat2": "Programación y Datos",
            "skills-cat3": "Competencias",
            "skill-1": "Implantación de Sistemas Operativos",
            "skill-2": "Administración de Redes Locales",
            "skill-3": "Manejo de Windows, Linux y macOS",
            "skill-4": "Virtualización de Sistemas",
            "skill-5": "Programación en Python",
            "skill-6": "Lenguajes de Marcas (HTML/XML)",
            "skill-7": "Bases de Datos (SQL)",
            "skill-8": "Scripting para automatización",
            "skill-9": "Resolución de Problemas",
            "skill-10": "Trabajo en Equipo",
            "skill-11": "Comunicación Efectiva",
            "skill-12": "Ofimática y Redes Sociales",
            "stack-title": "Stack Tecnológico",
            "stack-intro": "Plataformas, software y herramientas que configuro y administro para garantizar el rendimiento y la seguridad de la infraestructura TI.",
            "stack-cat1": "Ecosistema Microsoft",
            "stack-cat2": "Redes y Seguridad",
            "stack-cat3": "Virtualización y Operaciones",
            "stack-tag1": "Seguridad Perimetral",
            "contact-title": "Contacto",
            "contact-text": "Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en ponerte en contacto conmigo.",
            "footer-text": "© 2026 Daniel Rosquellas. Todos los derechos reservados."
        },
        en: {
            "nav-about": "About Me",
            "nav-experience": "Experience",
            "nav-skills": "Skills",
            "nav-stack": "Stack",
            "nav-contact": "Contact",
            "hero-subtitle": "IT Systems Administrator",
            "hero-btn": "View my experience",
            "about-title": "About Me",
            "about-text": "My professional journey began with a solid academic foundation in systems administration, which I have been able to apply and expand in a real professional environment. In my role at UQUIFA, I have evolved from an intern position to becoming an IT Systems Administrator, allowing me to develop advanced problem-solving skills and technology infrastructure management. I am passionate about continuous learning and applying my knowledge to optimize systems and ensure their efficiency.",
            "about-cv": "Download CV",
            "experience-title": "Experience",
            "exp-hs-title": "High School Diploma in Science and Technology",
            "exp-asix-title": "Higher Degree in Network Computer Systems Administration (ASIX)",
            "exp-intern-date": "Jun 2023 - May 2024",
            "exp-intern-title": "IT Systems Intern at UQUIFA",
            "exp-intern-desc": "Internship period where I gained practical experience in system maintenance and administration.",
            "exp-admin-date": "May 2024 - Present",
            "exp-admin-title": "IT Systems Administrator at UQUIFA",
            "exp-admin-desc": "Promoted to administrator role, managing the company's IT infrastructure after the internship period.",
            "exp-uni-date": "2024 - Present",
            "exp-uni-title": "Bachelor's Degree in Computer Engineering",
            "skills-title": "Key Skills",
            "skills-cat1": "Systems and Networks",
            "skills-cat2": "Programming and Data",
            "skills-cat3": "Soft Skills",
            "skill-1": "Operating Systems Deployment",
            "skill-2": "Local Area Network Administration",
            "skill-3": "Windows, Linux, and macOS proficiency",
            "skill-4": "Systems Virtualization",
            "skill-5": "Python Programming",
            "skill-6": "Markup Languages (HTML/XML)",
            "skill-7": "Databases (SQL)",
            "skill-8": "Scripting for automation",
            "skill-9": "Problem Solving",
            "skill-10": "Teamwork",
            "skill-11": "Effective Communication",
            "skill-12": "Office Automation & Social Networks",
            "stack-title": "Tech Stack",
            "stack-intro": "Platforms, software, and tools I configure and administer to ensure the performance and security of the IT infrastructure.",
            "stack-cat1": "Microsoft Ecosystem",
            "stack-cat2": "Networks & Security",
            "stack-cat3": "Virtualization & Operations",
            "stack-tag1": "Perimeter Security",
            "contact-title": "Contact",
            "contact-text": "I am open to new opportunities and collaborations. Feel free to get in touch with me.",
            "footer-text": "© 2026 Daniel Rosquellas. All rights reserved."
        },
        ca: {
            "nav-about": "Sobre Mi",
            "nav-experience": "Trajectòria",
            "nav-skills": "Habilitats",
            "nav-stack": "Stack",
            "nav-contact": "Contacte",
            "hero-subtitle": "Administrador de Sistemes de TI",
            "hero-btn": "Veure la meva trajectòria",
            "about-title": "Sobre Mi",
            "about-text": "La meva trajectòria professional va començar amb una sòlida base acadèmica en administració de sistemes, la qual he pogut aplicar i expandir en un entorn professional real. En el meu rol a UQUIFA, he evolucionat des d'una posició de becari fins a convertir-me en Administrador de Sistemes de TI, fet que m'ha permès desenvolupar una capacitat avançada per a la resolució de problemes i la gestió d'infraestructures tecnològiques. M'apassiona seguir aprenent i aplicar els meus coneixements per optimitzar sistemes i garantir la seva eficiència.",
            "about-cv": "Descarregar CV",
            "experience-title": "Trajectòria",
            "exp-hs-title": "Batxillerat de Ciències i Tecnologia",
            "exp-asix-title": "CFGS en Administració de Sistemes Informàtics en Xarxa (ASIX)",
            "exp-intern-date": "juny 2023 - maig 2024",
            "exp-intern-title": "Becari de Sistemes a UQUIFA",
            "exp-intern-desc": "Període de pràctiques on vaig adquirir experiència pràctica en el manteniment i l'administració de sistemes.",
            "exp-admin-date": "maig 2024 - Actualitat",
            "exp-admin-title": "Administrador de Sistemes de TI a UQUIFA",
            "exp-admin-desc": "Promoció a rol d'administrador, gestionant la infraestructura TI de l'empresa després del període de pràctiques.",
            "exp-uni-date": "2024 - Actualitat",
            "exp-uni-title": "Grau en Enginyeria Informàtica",
            "skills-title": "Habilitats Clau",
            "skills-cat1": "Sistemes i Xarxes",
            "skills-cat2": "Programació i Dades",
            "skills-cat3": "Competències",
            "skill-1": "Implantació de Sistemes Operatius",
            "skill-2": "Administració de Xarxes Locals",
            "skill-3": "Maneig de Windows, Linux i macOS",
            "skill-4": "Virtualització de Sistemes",
            "skill-5": "Programació en Python",
            "skill-6": "Llenguatges de Marques (HTML/XML)",
            "skill-7": "Bases de Dades (SQL)",
            "skill-8": "Scripting per automatització",
            "skill-9": "Resolució de Problemes",
            "skill-10": "Treball en Equip",
            "skill-11": "Comunicació Efectiva",
            "skill-12": "Ofimàtica i Xarxes Socials",
            "stack-title": "Stack Tecnològic",
            "stack-intro": "Plataformes, programari i eines que configuro i administro per garantir el rendiment i la seguretat de la infraestructura TI.",
            "stack-cat1": "Ecosistema Microsoft",
            "stack-cat2": "Xarxes i Seguretat",
            "stack-cat3": "Virtualització i Operacions",
            "stack-tag1": "Seguretat Perimetral",
            "contact-title": "Contacte",
            "contact-text": "Estic obert a noves oportunitats i col·laboracions. No dubtis a posar-te en contacte amb mi.",
            "footer-text": "© 2026 Daniel Rosquellas. Tots els drets reservats."
        }
    };

    // Obtenemos todos los radio buttons del selector
    const langRadios = document.querySelectorAll('input[name="lang"]');

    function setLanguage(lang) {
        // Traducir textos
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Cambiar enlace del CV según idioma
        const cvLink = document.getElementById('cv-link');
        if (cvLink) {
            cvLink.href = `cv_${lang}.pdf`; // Genera: cv_es.pdf, cv_en.pdf o cv_ca.pdf
        }

        document.documentElement.lang = lang;
        localStorage.setItem('preferredLanguage', lang);
    }

    // Escuchador de eventos en los botones radio
    langRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                setLanguage(e.target.value);
            }
        });
    });

    // Revisar idioma guardado y actualizar el radio button seleccionado
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        setLanguage(savedLang);
        const activeRadio = document.querySelector(`input[name="lang"][value="${savedLang}"]`);
        if (activeRadio) {
            activeRadio.checked = true;
        }
    }

    // ==========================================
    // 2. LÓGICA DEL EASTER EGG (KONAMI CODE)
    // ==========================================
    const konamiCode = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    let konamiCodePosition = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === konamiCode[konamiCodePosition].toLowerCase()) {
            konamiCodePosition++;
            if (konamiCodePosition === konamiCode.length) {
                activateSnowEffect();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });

    const snowContainer = document.getElementById('snow-container');
    let isSnowing = false;
    let snowInterval;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        const size = Math.random() * 5 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}%`;
        const duration = Math.random() * 8 + 5;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${Math.random() * 2}s`;
        const randomX = (Math.random() - 0.5) * 200;
        snowflake.style.setProperty('--random-x', `${randomX}px`);
        snowContainer.appendChild(snowflake);
        snowflake.addEventListener('animationend', () => snowflake.remove());
    }

    function startSnowing() {
        if (!isSnowing) {
            isSnowing = true;
            snowContainer.style.display = 'block';
            snowInterval = setInterval(createSnowflake, 100);
        }
    }

    function stopSnowing() {
        if (isSnowing) {
            isSnowing = false;
            clearInterval(snowInterval);
            snowContainer.style.display = 'none';
            snowContainer.innerHTML = '';
        }
    }

    function activateSnowEffect() {
        if (!isSnowing) {
            startSnowing();
        } else {
            stopSnowing();
        }
    }
});
