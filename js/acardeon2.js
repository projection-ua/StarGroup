const parent = document.querySelector(".akuvox-acardeon-container");

parent.addEventListener("click", (event) => {
  const akuvoxItem = event.target.closest(".akuvox-acardeon-item");
  if (!akuvoxItem) return;

  // Тоглінг класу is-active для знайденого елемента та його дочірніх елементів
  akuvoxItem.classList.toggle("is-active");

  ["title", "icon", "text"].forEach((className) => {
    const element = akuvoxItem.querySelector(
      `.akuvox-acardeon-item-${className}`
    );
    if (element) element.classList.toggle("is-active");
  });
});
