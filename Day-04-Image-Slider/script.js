
  let currentIndex = 0;
  let slidesContainer = document.getElementById('slides');

  let images = JSON.parse(localStorage.getItem('sliderImages')) || [];

  function renderSlider() {
    slidesContainer.innerHTML = '';
    if(images.length === 0) return;

    const lastClone = document.createElement('img');
    lastClone.src = images[images.length - 1];
    slidesContainer.appendChild(lastClone);

    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      slidesContainer.appendChild(img);
    });

    const firstClone = document.createElement('img');
    firstClone.src = images[0];
    slidesContainer.appendChild(firstClone);

    currentIndex = 1;
    updateSlider(false);
  }

  function updateSlider(animate = true) {
    slidesContainer.style.transition = animate ? 'transform 0.6s ease' : 'none';
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  document.getElementById('next').addEventListener('click', () => {
    if(images.length === 0) return;
    currentIndex++;
    updateSlider();

    if(currentIndex === images.length + 1) {
      setTimeout(() => {
        currentIndex = 1;
        updateSlider(false);
      }, 610);
    }
  });

  document.getElementById('prev').addEventListener('click', () => {
    if(images.length === 0) return;
    currentIndex--;
    updateSlider();

    if(currentIndex === 0) {
      setTimeout(() => {
        currentIndex = images.length;
        updateSlider(false);
      }, 610);
    }
  });

  renderSlider();