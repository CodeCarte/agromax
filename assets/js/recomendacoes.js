  const carousel = document.querySelector('.carousel');
  const cards = document.querySelectorAll('.card-container');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateY(-${currentIndex * 100}%)`; 
    updateButtons();
  }

  function updateButtons() {
    if (currentIndex === 0) {
      prevBtn.style.display = 'none';
    } 

    else {
      prevBtn.style.display = 'block';
    }


    if (currentIndex === cards.length - 1) {
      nextBtn.style.display = 'none';
    }

    else {
      nextBtn.style.display = 'block'
    }
  }

  nextBtn.addEventListener('click', () => {

    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {

    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  carousel.addEventListener('wheel', (event) => {

    event.preventDefault();

    if (event.deltaY > 0) {

      if (currentIndex < cards.length - 1) {
        
        currentIndex++;
        updateCarousel();
      }
    }

    else {
      if (currentIndex > 0) {
        
        currentIndex--;
        updateCarousel();
      }
    }
  });

  updateButtons();