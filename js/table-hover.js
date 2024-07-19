document.addEventListener("DOMContentLoaded", function () {
  // Функція для обробки ховеру
  function handleHover(elements, button, marker) {
    elements.forEach((element) => {
      element.addEventListener("mouseenter", function () {
        elements.forEach((el) => el.classList.add("hovered"));
        button.classList.add("hovered");
        marker.classList.add("hovered");
      });
      element.addEventListener("mouseleave", function () {
        elements.forEach((el) => el.classList.remove("hovered"));
        button.classList.remove("hovered");
        marker.classList.remove("hovered");
      });
    });
  }

  // Знаходимо всі елементи та кнопки
  const firstElements = document.querySelectorAll(".first-column");
  const firstButton = document.querySelector(".first-column-btn");
  const firstMarker = document.querySelector(".first-marker");

  const secondElements = document.querySelectorAll(".second-column");
  const secondButton = document.querySelector(".second-column-btn");
  const secondMarker = document.querySelector(".second-marker");

  const thirdElements = document.querySelectorAll(".third-column");
  const thirdButton = document.querySelector(".third-column-btn");
  const thirdMarker = document.querySelector(".third-marker");

  const fourthElements = document.querySelectorAll(".fourth-column");
  const fourthButton = document.querySelector(".fourth-column-btn");
  const fourthMarker = document.querySelector(".fourth-marker");

  // Використовуємо функцію для обробки ховеру для кожної групи елементів
  handleHover(firstElements, firstButton, firstMarker);
  handleHover(secondElements, secondButton, secondMarker);
  handleHover(thirdElements, thirdButton, thirdMarker);
  handleHover(fourthElements, fourthButton, fourthMarker);
});
