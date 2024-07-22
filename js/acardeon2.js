const parent = document.querySelector(".akuvox-acardeon-container");
const akuvoxItems = Array.from(
  parent.querySelectorAll(".akuvox-acardeon-item")
);
let currentIndex = 0;

function addClassToElement(element) {
  element.classList.add("is-active");
  ["title", "icon", "text"].forEach((className) => {
    const childElement = element.querySelector(
      `.akuvox-acardeon-item-${className}`
    );
    if (childElement) childElement.classList.add("is-active");
  });

  // Додаємо смужку
  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  // element.appendChild(progressBar);

  // Видаляємо смужку через 3 секунди
  setTimeout(() => {
    progressBar.remove();
  }, 3000);
}

function removeClassFromElement(element) {
  element.classList.remove("is-active");
  ["title", "icon", "text"].forEach((className) => {
    const childElement = element.querySelector(
      `.akuvox-acardeon-item-${className}`
    );
    if (childElement) childElement.classList.remove("is-active");
  });
}

function processNextItem() {
  const currentElement = akuvoxItems[currentIndex];

  // Додаємо клас is-active до поточного елемента
  addClassToElement(currentElement);

  // Через 3 секунди видаляємо клас is-active
  setTimeout(() => {
    removeClassFromElement(currentElement);

    // Переходимо до наступного елемента
    currentIndex = (currentIndex + 1) % akuvoxItems.length;

    // Переходимо до наступного елемента через 0.5 секунди після закриття попереднього
    setTimeout(processNextItem, 50);
  }, 6000);
}

// Починаємо процес
processNextItem();
