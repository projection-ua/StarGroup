// Відкрити відповідний попап при натисканні на кнопку
document.querySelectorAll(".open-popup-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const popupId = btn.getAttribute("data-popup-target");
    document.getElementById(popupId).style.display = "block";
  });
});

// Закрити попап при натисканні на кнопку закриття
document.querySelectorAll(".popup .close").forEach(function (closeBtn) {
  closeBtn.addEventListener("click", function () {
    closeBtn.closest(".popup").style.display = "none";
  });
});

// Закрити попап при натисканні поза межами попапу
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("popup")) {
    event.target.style.display = "none";
  }
});
