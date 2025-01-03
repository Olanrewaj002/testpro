let currentSlide = 0;
            const slides = document.querySelectorAll('.testimonial-slide');
            const totalSlides = slides.length;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.style.display = i === index ? 'block' : 'none';
                });
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
            }

            setInterval(nextSlide, 6000);
            showSlide(currentSlide);
    
    
    
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });