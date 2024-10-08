// const rangeInput = document.getElementById("speedRange");
// const labels = document.querySelectorAll(".range-label");
// const values = [100, 300, 1000];

// function updateLabels(value) {
//   labels.forEach((label) => label.classList.remove("selected"));
//   document.getElementById(`label-${values[value]}`).classList.add("selected");
// }

// rangeInput.addEventListener("input", (e) => {
//   const value = parseInt(e.target.value, 10);
//   updateLabels(value);
// });

// // Initialize with the first label selected
// updateLabels(0);


document.querySelectorAll(".range-container").forEach((container) => {
  const rangeInput = container.querySelector(".range-input");
  const labels = container.querySelectorAll(".range-label");
  const values = [100, 300, 1000];

  function updateLabels(value) {
    labels.forEach((label) => label.classList.remove("selected"));
    const selectedLabel = container.querySelector(`#label-${values[value]}`);
    if (selectedLabel) {
      selectedLabel.classList.add("selected");
    }
  }

  rangeInput.addEventListener("input", (e) => {
    const value = parseInt(e.target.value, 10);
    updateLabels(value);
  });

  // Initialize with the first label selected
  updateLabels(0);
});