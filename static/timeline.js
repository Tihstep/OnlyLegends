const body = document.body;
const timelineItems = document.querySelectorAll('.timeline-item');

function getAbsoluteCoords(element) {
    const rect = element.getBoundingClientRect(); // Get viewport-relative coordinates
    const absoluteX = rect.left + window.scrollX; // Add horizontal scroll offset
    const absoluteY = rect.top + window.scrollY;  // Add vertical scroll offset
    return { x: absoluteX, y: absoluteY };
}

function generateRandomPosition(existingPositions, centerX, centerY, maxWidth, maxHeight, minDistance = 100) {
    let x, y;
    let attempts = 0;
    const maxAttempts = 100;

    do {
        x = centerX + (Math.random() - 0.5) * maxWidth;
        y = centerY + (Math.random() - 0.5) * maxHeight;

        // Проверяем, чтобы новая позиция не пересекалась с существующими
        const isOverlapping = existingPositions.some(pos => {
            const dx = pos.x - x;
            const dy = pos.y - y;
            return Math.sqrt(dx * dx + dy * dy) < minDistance;
        });

        if (!isOverlapping) {
            return { x, y };
        }

        attempts++;
    } while (attempts < maxAttempts);

    // Если за максимальное количество попыток не получилось, возвращаем позицию без проверки
    return { x, y };
}

timelineItems.forEach((item, index) => {
    const point = item.querySelector('.timeline-point');

    item.style.marginTop = `${index * 14.5}vh`;
    
    let isModalPinned = false; // Tracks if modals are pinned (clicked)
    // Создаем элемент для отображения title
    const title = document.createElement('div');
    title.classList.add('timeline-title');
    title.textContent = item.getAttribute('data-title'); // Используем текст из атрибута data-title
    item.appendChild(title); // Добавляем его в .timeline-item
    
    function openModals() {
        document.querySelectorAll('.modal').forEach(modal => modal.remove());
        body.classList.add('dimmed');
    
        const images = JSON.parse(item.dataset.images || '[]');
        const videos = JSON.parse(item.dataset.videos || '[]');
        const modals = [];
        const { x: pointX, y: pointY } = getAbsoluteCoords(point);
    
        const existingPositions = [];
    
        [...images, ...videos].forEach((item) => {
            const randomPosition = generateRandomPosition(
                existingPositions,
                pointX,
                pointY,
                window.innerWidth - 400,
                window.innerHeight - 200,
                250 // Минимальное расстояние между элементами
            );
    
            let modal;
            if (/\.(jpg|jpeg|png|gif|webp)$/i.test(item.src))  {
                modal = document.createElement('img');
                modal.src = `/cached/${item.src.trim().replace('static/', '')}`;
            } else {
                modal = document.createElement('video');
                modal.src = `/cached/${item.src.trim().replace('static/', '')}`;
                modal.autoplay = true;
                modal.muted = item.muted;
                modal.loop = true;
                modal.style.width = '200px';
                modal.style.height = 'auto';
            }
            if (item.sensitive) {
                modal.classList.add('sensitive-content');
            }

            
            modal.classList.add('modal', 'hidden');
            modal.style.left = `${randomPosition.x}px`;
            modal.style.top = `${randomPosition.y}px`;
            document.body.appendChild(modal);
     
            modals.push(modal);
            existingPositions.push(randomPosition);
        });
    
        modals.forEach((modal) => {
            setTimeout(() => {
                modal.classList.remove('hidden');
            }, 10);
        });
    }

    function closeModals() {
        document.querySelectorAll('.modal').forEach(modal => modal.remove());
        body.classList.remove('dimmed');
    }

    point.addEventListener('mouseenter', () => {
        if (!isModalPinned) {
            openModals(); // Open modals only if they are not pinned
        }
    });

    point.addEventListener('mouseleave', () => {
        if (!isModalPinned) {
            closeModals(); // Close modals only if they are not pinned
        }
    });

    point.addEventListener('click', () => {
        isModalPinned = !isModalPinned; // Toggle pinned state
        if (!isModalPinned) {
            closeModals(); // If unpinned, close the modals
        }
    });
});



const demoPoints = document.querySelectorAll('.demo-item');
const demoModal = document.getElementById('demo-modal');
const imagesPath = './figures/museum'; // Путь к папке с изображениями


demoPoints.forEach((item, index) => {
    const point = item.querySelector('.demo-point');
    item.style.marginLeft = `${(50 + (index * 90))}px`;
    
    let isModalPinned = false; // Tracks if modals are pinned (clicked)
    // Создаем элемент для отображения title
    
    function openModals() {
        document.querySelectorAll('.demo-modal').forEach(modal => modal.remove());
        body.classList.add('dimmeda');

        const images = item.dataset.images?.split(',') || [];
        const modals = [];
        const { x: pointX, y: pointY } = getAbsoluteCoords(point);
    
        const existingPositions = [];
    
        [...images].forEach((item) => {
            const randomPosition = generateRandomPosition(
                existingPositions,
                pointX,
                pointY,
                300,
                300,
                110 // Минимальное расстояние между элементами
            );
    
            let modal;
            modal = document.createElement('img');
            modal.src = item;
    
            modal.classList.add('demo-modal', 'hidden');
            modal.style.left = `${randomPosition.x}px`;
            modal.style.top = `${randomPosition.y}px`;
            document.body.appendChild(modal);
    
            modals.push(modal);
            existingPositions.push(randomPosition);
        });
    
        modals.forEach((modal) => {
            setTimeout(() => {
                modal.classList.remove('hidden');
            }, 10);
        });
    }

    function closeModals() {
        document.querySelectorAll('.demo-modal').forEach(modal => modal.remove());
        body.classList.remove('dimmeda');
    }

    point.addEventListener('mouseenter', () => {
        if (!isModalPinned) {
            openModals(); // Open modals only if they are not pinned
        }
    });

    point.addEventListener('mouseleave', () => {
        if (!isModalPinned) {
            closeModals(); // Close modals only if they are not pinned
        }
    });

    point.addEventListener('click', () => {
        isModalPinned = !isModalPinned; // Toggle pinned state
        if (!isModalPinned) {
            closeModals(); // If unpinned, close the modals
        }
    });
});

