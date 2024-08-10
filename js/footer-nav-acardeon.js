document.querySelectorAll(".footer-question-title").forEach(function (title) {
  title.addEventListener("click", function () {
    var navBlock = this.nextElementSibling;
    navBlock.classList.toggle("active");
  });
});
