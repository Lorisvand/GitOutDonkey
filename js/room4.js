let clickCount = 0;

const image = document.getElementById('clickable-image');
const number = document.getElementById('reveal-number');

const init = () => {
    image.addEventListener('click', function() {
        clickCount++;
        if (clickCount < 8) {
          const maxX = window.innerWidth - image.width;
          const maxY = window.innerHeight - image.height;
          const randomX = Math.floor(Math.random() * maxX);
          const randomY = Math.floor(Math.random() * maxY);
          image.style.position = 'absolute';
          image.style.left = randomX + 'px';
          image.style.top = randomY + 'px';
        } else {
          image.style.display = 'none';
          number.style.display = 'block';
        }
      });
}

init();