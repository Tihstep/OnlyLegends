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
    console.log(attempts)
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
                window.innerWidth/1.15,
                window.innerHeight/1.15,
                160 // Минимальное расстояние между элементами
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
                modal.style.width = '12vw';
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
    item.style.marginLeft = `${(50 + (index * 90))*0.058}vw`;
    
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


const modalContent = document.querySelector('.modal-content');
const modalContenth1 = document.querySelector('.modal-content h1');
const modalContenth3 = document.querySelector('.modal-content h3');
const modalContentButton = document.querySelector('.modal-content button');
const modalContentSpans = document.querySelectorAll('.modal-content span'); // Для всех span
const instructiontext = document.querySelectorAll('.instruction-text'); // Для всех span

function resizeFont() {
    const parentHeight = modalContent.offsetHeight;
    const parentWidth = modalContent.offsetWidth;

    // Изменяем размеры шрифтов в зависимости от высоты родителя
    modalContenth1.style.fontSize = `${parentHeight * 0.06}px`;
    modalContenth3.style.fontSize = `${parentHeight * 0.03}px`;
    modalContentButton.style.fontSize = `${parentHeight * 0.03}px`;

    // Проходимся по всем span в modal-content
    instructiontext.forEach((text) => {
        text.style.fontSize = `${parentHeight * 0.03}px`;
        text.style.height = `${parentHeight * 0.08}px`;
        text.style.width = `${parentWidth * 0.2}px`;
    });
}

// Обновляем размеры шрифтов при загрузке страницы и изменении размеров окна
window.addEventListener('resize', resizeFont);
document.addEventListener('DOMContentLoaded', resizeFont);
