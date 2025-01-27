document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const contents = [
        'img/ttt.jpg',
        'img/kkk.jpg',
        'img/yyy.jpg',
        'img/hhhh.jpg',
        'img/ppp.jpg',
        'img/lllll.jpg',
        'img/uu.jpg',
        'img/demas.jpg',
        'img/charli.jpeg',
        'img/heathers.jpeg',
        'img/tony.jpeg',
        'img/train.jpeg',
    ];
    let currentIndex = 0;

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const src = this.getAttribute('src');
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${src}" alt="Imagen ampliada">
                    <div class="navigation">
                        <button id="prevButton">Retroceder</button>
                        <button id="nextButton">Avanzar</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            const closeModal = modal.querySelector('.close');
            closeModal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });

            modal.addEventListener('click', function(event) {
                if (event.target === modal) {
                    document.body.removeChild(modal);
                }
            });

            const prevButton = modal.querySelector('#prevButton');
            const nextButton = modal.querySelector('#nextButton');
            const content = modal.querySelector('img');

            prevButton.addEventListener('click', function() {
                if (currentIndex > 0) {
                    currentIndex--;
                    content.src = contents[currentIndex];
                }
            });

            nextButton.addEventListener('click', function() {
                if (currentIndex < contents.length - 1) {
                    currentIndex++;
                    content.src = contents[currentIndex];
                }
            });
        });
    });
});
