        const numberElement = document.querySelector('.hidden-number');

        function setRandomPosition() {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const randomX = Math.floor(Math.random() * (viewportWidth - 50));
            const randomY = Math.floor(Math.random() * (viewportHeight - 50));

            numberElement.style.left = randomX + 'px';
            numberElement.style.top = randomY + 'px';
        }

        setRandomPosition();