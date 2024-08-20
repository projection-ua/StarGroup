function moveText() {
  const items = document.querySelectorAll(".b2b-we-can-item");

  items.forEach((item) => {
    const textElement = item.querySelector(".b2b-we-can-item-text");
    const titleContainer = item.querySelector(
      ".b2b-we-can-item-title-container"
    );
    const parentElement = item;

    if (window.innerWidth <= 1024) {
      titleContainer.appendChild(textElement);
    } else {
      parentElement.appendChild(textElement);
    }
  });
}

window.addEventListener("resize", moveText);
window.addEventListener("load", moveText);


document.addEventListener("DOMContentLoaded", function () {
  function movePartnersBlock() {
    const container = document.querySelector(".equipment-option-container");
    const partnersBlock = document.querySelector(".partners-block-list");
    const title = document.querySelector(".equipment-option-title");

    if (window.innerWidth <= 1024) {
      container.insertBefore(partnersBlock, title.nextElementSibling);
    } else {
      const originalContainer = document.querySelector(
        ".partners-block-container"
      );
      originalContainer.appendChild(partnersBlock);
    }
  }

  // Викликати функцію при завантаженні сторінки та зміні розміру вікна
  movePartnersBlock();
  window.addEventListener("resize", movePartnersBlock);
});
