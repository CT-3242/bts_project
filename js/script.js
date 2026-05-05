const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

        // Add click event listeners for smooth scrolling
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the target section ID from the href attribute
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                // Smooth scroll to the target section
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Highlight active navigation link based on scroll position
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                // Check if the current scroll position is within this section
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            // Remove active class from all links and add to current
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

        // Add navbar background change on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(44, 44, 44, 0.95)';
            } else {
                navbar.style.backgroundColor = '#2c2c2c';
            }
        });