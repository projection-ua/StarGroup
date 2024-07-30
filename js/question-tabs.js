document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".navigation-item");
  const containers = document.querySelectorAll(".question-container.in-page");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("current-nav-item"));
      this.classList.add("current-nav-item");

      const target = this.getAttribute("data-target");
      containers.forEach((container) => container.classList.remove("active"));
      document.getElementById(target).classList.add("active");
    });
  });

  document
    .getElementById(tabs[0].getAttribute("data-target"))
    .classList.add("active");
});
