document
  .querySelector(".reviews-coments-container")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-text")) {
      var commentItem = event.target.closest(".reviews-coment-item");
      var comment = commentItem.querySelector(".comment-text");
      var icon = commentItem.querySelector(".btnIcon");

      if (comment.classList.contains("show-more")) {
        comment.classList.remove("show-more");
        event.target.textContent = "Докладніше";
        icon.style.transform = "rotate(0deg)";
      } else {
        comment.classList.add("show-more");
        event.target.textContent = "Звернути";
        icon.style.transform = "rotate(180deg)";
      }
    }
  });
