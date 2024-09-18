// Получаем элемент canvas и его 2D-контекст
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// Устанавливаем ширину и высоту canvas, равные размерам окна браузера
const canvasWidth = (canvas.width = window.innerWidth);
const canvasHeight = (canvas.height = window.innerHeight);

// Задаем строку символов, которую будем отображать
const text = "01s";
const characters = text.split(""); // Разбиваем строку на массив символов

// Инициализируем переменные для анимации
const fontSize = 11; // Размер шрифта
const columnCount = canvasWidth / fontSize; // Количество столбцов
const characterPositions = [];

for (let i = 0; i < columnCount; i++) {
  characterPositions[i] = 1; // Инициализируем начальные вертикальные позиции символов
}

// Функция для отрисовки анимации
function draw() {
  // Очищаем canvas с небольшой непрозрачностью, чтобы создать эффект плавного исчезания символов
  context.fillStyle = "rgba(0,0,0,.05)";
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  context.fillStyle = "#0f0"; // Задаем цвет для символов (зеленый)
  context.font = fontSize + "px system-ui"; // Задаем размер и шрифт

  for (let i = 0; i < characterPositions.length; i++) {
    // Для каждого столбца
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)]; // Выбираем случайный символ из массива
    context.fillText(randomCharacter, i * fontSize, characterPositions[i] * fontSize); // Рисуем символ в текущей позиции

    if (characterPositions[i] * fontSize > canvasHeight && Math.random() > 0.975) {
      characterPositions[i] = 0; // Если символ достиг нижней границы и выполняется условие, переносим его наверх
    }
    characterPositions[i]++; // Увеличиваем вертикальную позицию символа
  }
}

// Запускаем функцию draw() с интервалом для создания анимации
setInterval(draw, 123);

// Обработчик события изменения размера окна браузера, перезагружающий страницу
window.addEventListener("resize", () => location.reload());
