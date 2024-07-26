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

  // Додати активний клас до першої вкладки та її контенту
  if (tabs.length > 0 && tabContents.length > 0) {
    tabs[0].classList.add("current-nav-item");
    tabContents[0].classList.add("active-tab");
  }
});
