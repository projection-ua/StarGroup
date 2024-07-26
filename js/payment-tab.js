document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".navigation-item");
  const tabContents = document.querySelectorAll(".payment-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Видалити активні класи з усіх вкладок та їх контентів
      tabs.forEach((t) => t.classList.remove("current-nav-item"));
      tabContents.forEach((content) => content.classList.remove("active-tab"));

      // Додати активний клас до поточної вкладки та її контенту
      tab.classList.add("current-nav-item");
      document.querySelector(`.${tab.dataset.tab}`).classList.add("active-tab");
    });
  });
});
