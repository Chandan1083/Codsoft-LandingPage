const carousel = document.querySelector('.carousel-images');
        const images = document.querySelectorAll('.carousel-images img');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let index = 0;
        
        function showImage(direction) {
          if (direction === 'next') {
            index = (index + 1) % images.length;
          } else {
            index = (index - 1 + images.length) % images.length;
          }
          carousel.style.transform = `translateX(-${index * 100}%)`;
        }
        
        prevButton.addEventListener('click', () => showImage('prev'));
        nextButton.addEventListener('click', () => showImage('next'));