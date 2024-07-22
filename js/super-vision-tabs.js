const withinTab = document.getElementById("within-tab");
const outsideTab = document.getElementById("outside-tab");

const withinList = document.querySelector(".within");
const outsideList = document.querySelector(".outside");

// Function to switch active tab and content list
function switchTab(activeTab, inactiveTab, activeList, inactiveList) {
  if (activeList.classList.contains("is-active")) {
    return;
  }
  activeList.classList.add("is-active");
  inactiveList.classList.remove("is-active");

  activeTab.classList.add("current-nav-item");
  inactiveTab.classList.remove("current-nav-item");
}

outsideTab.addEventListener("click", () => {
  switchTab(outsideTab, withinTab, outsideList, withinList);
});

withinTab.addEventListener("click", () => {
  switchTab(withinTab, outsideTab, withinList, outsideList);
});
