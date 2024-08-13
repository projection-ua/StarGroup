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


