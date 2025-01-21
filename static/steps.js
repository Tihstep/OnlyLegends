const paths = [
  [
    210.00, 50.00, 0.00,
    230.00, 210.00, 0.00,
    237.53, 264.35, -15.77,
    259.54, 314.61, -31.54,
    294.38, 356.99, -47.30,
    339.42, 388.31, -63.07,
    391.29, 406.22, -78.84,
    446.07, 409.35, -80.61,
    500.07, 415.35, -80.61,
    540.07, 435.35, -76.61,
    600.07, 455.35, -70.61,
    650.07, 480.35, -69.61,
    700.07, 490.35, -70.61,
    750.07, 500.35, -80.61,
    770.07, 515.35, -80.61
  ],
  [
    400.00, 50.00, 0.805,
    403.00, 55.00, 0.805,
    403.00, 60.00, -10.805,
    410.00, 70.00, -15.805,
    415.00, 100.00, -22.805,
    430.00, 120.00, -34.805,
    830.00, 470.00, -48.805
  ],
  [
    600.00, 50.00, 0.00,
    600.00, 170.00, -10.805,
    600.00, 170.00, -10.805,
    610.00, 185.00, -25.805,
    615.00, 200.00, -38.805,
    800.00, 410.00, -25.805,
    820.00, 440.00, -16.805,
    830.00, 470.00, -8.805
  ],
[
800.00, 50.00, -50.39,
813.94, 61.54, -46.93,
824.69, 73.08, -34.46,
829.78, 84.62, -8.29,
828.05, 96.15, 23.19,
819.89, 107.69, 42.13,
807.18, 119.23, 49.56,
792.82, 130.77, 49.56,
780.11, 142.31, 42.13,
771.95, 153.85, 23.19,
770.22, 165.38, -8.29,
775.31, 176.92, -34.46,
786.06, 188.46, -46.93, 
800.00, 200.00, -50.39,
813.94, 211.54, -46.93,
824.69, 223.08, -34.46,
829.78, 234.62, -8.29,
828.05, 246.15, 23.19,
819.89, 257.69, 42.13,
807.18, 269.23, 49.56,
792.82, 280.77, 49.56,
780.11, 292.31, 42.13,
771.95, 303.85, 23.19,
770.22, 315.38, -8.29,
775.31, 326.92, -34.46,
786.06, 338.46, -46.93,
800.00, 350.00, -50.39,
813.94, 361.54, -46.93,
824.69, 373.08, -34.46,
829.78, 384.62, -8.29,
828.05, 396.15, 8.19,
830.89, 400.0, -2.00,
835.05, 500.00, 0.00
],
[
900.00, 50.00, 50.39,
886.06, 61.54, 46.93,
875.31, 73.08, 34.46,
870.22, 84.62, 8.29,
871.95, 96.15, -23.19,
880.11, 107.69, -42.13,
892.82, 119.23, -49.56,
907.18, 130.77, -49.56,
919.89, 142.31, -42.13,
928.05, 153.85, -23.19,
929.78, 165.38, 8.29,
924.69, 176.92, 34.46,
913.94, 188.46, 46.93,
900.00, 200.00, 50.39,
886.06, 211.54, 46.93,
875.31, 223.08, 34.46,
870.22, 234.62, 8.29,
871.95, 246.15, -23.19,
880.11, 257.69, -42.13,
892.82, 269.23, -49.56,
907.18, 280.77, -49.56,
919.89, 292.31, -42.13,
928.05, 303.85, -23.19,
929.78, 315.38, 8.29,
924.69, 326.92, 34.46,
913.94, 338.46, 46.93,
900.00, 350.00, 50.39,
886.06, 361.54, 46.93,
875.31, 373.08, 34.46,
870.22, 384.62, 20.29,
870.22, 400.62, 8.29,
875.22, 420.62, 2.29,
850.00, 500.00, 0.00
],
  [
    1450.00, 0.00, 0.00,
    1450.00, 30.00, 15.00,
    1450.00, 70.00, 30.00,
    1450.00, 100.00, 45.00,
    1420.00, 150.00, 55.00,
    1350.00, 200.00, 55.00,
    1250.00, 270.00, 45.00,
    1150.00, 370.00, 55.00,
    1050.00, 440.00, 63.434,
    950.00, 490.00, 83.434,
    850.00, 500.00, 83.434
  ],
  [
    1650.00, 0.00, 0.00,
    1650.00, 100.00, 0.00,
    1650.00, 130.00, 15.00,
    1650.00, 170.00, 30.00,
    1600.00, 200.00, 45.00,
    1530.00, 270.00, 70.00,
    1420.00, 320.00, 70.00,
    1280.00, 370.00, 70.00,
    1130.00, 400.00, 70.00,
    980.00, 470.00, 80.00,
    850.00, 490.00, 83.434
  ],
  [
    1350.00, 0.00, 0.00,
    1320.00, 100.00, 10.00,
    1300.00, 150.00, 15.00,
    1300.00, 170.00, 20.00,
    1275.00, 200.00, 30.00,
    1220.00, 250.00, 40.00,
    850.00, 490.00, 83.434
  ],
  [
    1000.00, 2400.0, -15.00,
    1030.00, 2500.0, -15.00,
    1050.00, 2520.0, -35.00,
    1080.00, 2570.0, -55.00,
    1100.00, 2600.0, -75.00,
    1500.00, 2700.0, -75.00
  ],
  [
    1000.00, 5050.0, -75.00,
    1400.00, 5120.0, -45.00,
    1420.00, 5150.0, -30.00,
    1440.00, 5180.0, 0.00,
    1460.00, 5210.0, 30.00,
    1440.00, 5240.0, 60.00,
    1420.00, 5270.0, 75.00,
    1420.00, 5270.0, 75.00,
    1100.00, 5330.0, 90.00,
    1050.00, 5310.0, 125.00,
    1030.00, 5290.0, 150.00,
    1030.00, 5270.0, 180.00,
    1030.00, 5200.0, 230.00,
    1030.00, 5150.0, 270.00,
    1150.00, 5080.0, -80.00,
    1200.00, 5120.0, -70.00,
    1400.00, 5150.0, -50.00,
  ]
];

const animationSettings = [
  { stepLen: 30, stepTime: 242, enableOffset: true },
  { stepLen: 25, stepTime: 274, enableOffset: true },
  { stepLen: 20, stepTime: 265, enableOffset: true },
  { stepLen: 25, stepTime: 297, enableOffset: true },
  { stepLen: 25, stepTime: 297, enableOffset: true },
  { stepLen: 30, stepTime: 235, enableOffset: true },
  { stepLen: 30, stepTime: 191, enableOffset: true },
  { stepLen: 27, stepTime: 240, enableOffset: true },
  { stepLen: 30, stepTime: 180, enableOffset: true },
  { stepLen: 30, stepTime: 180, enableOffset: true }
];

// Создаем данные для каждой анимации
const animations = paths.map((path, index) => ({
  path,
  pLen: path.length,
  pos: { x: path[0], y: path[1], index: 0, angle: path[2] },
  pos1: { x: path[0], y: path[1], index: 0, angle: path[2] },
  stepCount: 0,
  stepLen: animationSettings[index].stepLen, // Длина шага из настроек
  stepTime: animationSettings[index].stepTime, // Время между шагами из настроек
  enableOffset: animationSettings[index].enableOffset, // Включение/отключение смещения
  leftFoot: document.getElementById(`leftFoot${index}`), // Элементы ног
  rightFoot: document.getElementById(`rightFoot${index}`),
  trackContainer: document.getElementById('tracks') // Контейнер для следов
}));

// Функция для вычисления смещения перпендикулярно линии движения
function getPerpendicularOffset(angle, footOffset) {
  const offsetX = Math.cos((angle) * (Math.PI / 180)) * footOffset;
  const offsetY = Math.sin((angle) * (Math.PI / 180)) * footOffset;
  return { offsetX, offsetY };
}

// Функция для создания следа
function createFootprint(x, y, angle, isLeftFoot, container) {
  const footprint = document.createElement('div');
  footprint.className = isLeftFoot ? 'footprint left' : 'footprint right';
  footprint.style.transform = `translate(${x*0.000578}vw, ${y*0.0011}vh) rotate(${angle}deg)`;
  container.appendChild(footprint);
}

// Функция для получения нового положения на пути
function getDistOnPath(dist, currentPos, path, pLen) {
  const newPos = { ...currentPos };

  while (dist > 0) {
    // Если достигли конца пути, начинаем с начала
    if (newPos.index + 3 >= pLen) {
      newPos.index = 0;
      newPos.x = path[0];
      newPos.y = path[1];
      newPos.angle = path[2];
      break;
    }

    // Вычисляем вектор до следующей точки
    let nx = path[newPos.index + 3] - newPos.x;
    let ny = path[newPos.index + 4] - newPos.y;
    let d = Math.hypot(nx, ny);

    if (d > dist) {
      // Если расстояние до следующей точки больше шага, движемся на шаг
      newPos.x += (nx / d) * dist;
      newPos.y += (ny / d) * dist;
      newPos.angle = path[newPos.index + 2];
      dist = 0;
    } else {
      // Если расстояние меньше шага, переходим к следующей точке
      dist -= d;
      newPos.index += 3;
      newPos.x = path[newPos.index];
      newPos.y = path[newPos.index + 1];
      newPos.angle = path[newPos.index + 2];
    }
  }

  return newPos;
}

// Функция для анимации шагов
function drawStep(animation) {
  if (!isAnimationEnabled) return; // Остановка анимации, если флаг выключен
  const { path, pLen, stepLen, stepTime, enableOffset, leftFoot, rightFoot, stepCount, trackContainer } = animation;
  const isLeftFoot = (stepCount % 2 === 0);
  const currentFoot = isLeftFoot ? leftFoot : rightFoot;

  // Перпендикулярное смещение для каждой ноги
  let offsetX = 0;
  let offsetY = 0;
  if (enableOffset) {
    const footOffset = isLeftFoot ? 10 : -10; // Левая и правая нога смещаются в разные стороны
    ({ offsetX, offsetY } = getPerpendicularOffset(animation.pos.angle, footOffset));
  }

  // Обновляем позицию текущей ноги
  animation.pos = getDistOnPath(stepLen, animation.pos, path, pLen);

  // Добавляем след
  createFootprint(animation.pos.x + offsetX, animation.pos.y + offsetY, animation.pos.angle, isLeftFoot, trackContainer);
  // Анимируем ногу
  currentFoot.style.transform = `translate(${(animation.pos.x + offsetX)*0.0578}vw, ${(animation.pos.y + offsetY)*0.11}vh) rotate(${animation.pos.angle}deg)`;
  currentFoot.style.opacity = "1";

  // Увеличиваем счетчик шагов
  animation.stepCount++;

  // Планируем следующий шаг
  setTimeout(() => drawStep(animation), stepTime);
}



let isAnimationEnabled = false; // Флаг управления анимацией

// Функция для включения анимации
function enableAnimation() {
  isAnimationEnabled = true;
  animations.forEach(animation => drawStep(animation)); // Перезапуск анимации
}

// Функция для отключения анимации
function disableAnimation() {
  isAnimationEnabled = false;
}

// Пример взаимодействия с модальным окном
const modal = document.getElementById("intro-modal");
const closeModalButton = document.getElementById("close-modal");

// Открытие модального окна
modal.addEventListener("open", () => disableAnimation());

// Закрытие модального окна
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none"; // Скрыть модальное окно
  enableAnimation(); // Возобновить анимацию
});