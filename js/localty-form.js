document.addEventListener("DOMContentLoaded", function () {
  const stepsForm = document.querySelector(".steps-form");
  const steps = stepsForm.querySelectorAll(".locality-input");
  const nextButtons = stepsForm.querySelectorAll(".step-form-btn");

  let currentStep = 0;

  nextButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      steps[currentStep].classList.remove("active");
      currentStep++;
      if (currentStep < steps.length) {
        steps[currentStep].classList.add("active");
      } else {
        currentStep = steps.length - 1; // Щоб не перевищити кількість форм
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const stepsForm = document.querySelector(".steps-form");
  const steps = stepsForm.querySelectorAll(".locality-input");
  const nextButtons = stepsForm.querySelectorAll(".step-form-btn");
  const stepTabs = document.querySelectorAll(".form-step-tabs > div");

  let currentStep = 0;

  nextButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Знімаємо клас active з поточного кроку
      steps[currentStep].classList.remove("active");
      stepTabs[currentStep].classList.remove("active");

      // Переходимо до наступного кроку
      currentStep++;

      if (currentStep < steps.length) {
        // Додаємо клас active до наступного кроку
        steps[currentStep].classList.add("active");
        stepTabs[currentStep].classList.add("active");
      } else {
        currentStep = steps.length - 1; // Щоб не перевищити кількість форм
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Отримуємо всі кнопки і контейнери
  const orderBtns = document.querySelectorAll(".map-order-backdrop-container");
  const orderContainers = document.querySelectorAll(".order-backdrop-JS");

  // Переконуємось, що кількість кнопок і контейнерів однакова
  if (orderBtns.length === orderContainers.length) {
    // Додаємо обробник подій до кожної кнопки
    orderBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        // Перемикаємо клас active для відповідного контейнера
        orderContainers[index].classList.toggle("active");
      });
    });
  } else {
    console.error("Кількість кнопок не відповідає кількості контейнерів.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const navigationItems = document.querySelectorAll(".navigation-item");
  const sections = document.querySelectorAll(".map-section");

  navigationItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Видаляємо клас active з усіх навігаційних елементів і секцій
      navigationItems.forEach((navItem) => {
        navItem.classList.remove("current-nav-item");
        navItem.classList.remove("active");
      });
      sections.forEach((section) => section.classList.remove("active"));

      // Додаємо клас active до натиснутого навігаційного елемента
      item.classList.add("current-nav-item");

      // Додаємо клас active до відповідної секції
      sections[index].classList.add("active");
    });
  });
});