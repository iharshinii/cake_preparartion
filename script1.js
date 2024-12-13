document.addEventListener("DOMContentLoaded", () => {
    const ingredientsBtn = document.getElementById("toggle-ingredients");
    const stepsBtn = document.getElementById("toggle-steps");
    const startCookingBtn = document.getElementById("start-cooking");
    const ingredientsList = document.querySelector(".ingredients");
    const stepsList = document.querySelector(".steps");
    const progressBar = document.querySelector(".progress");
    let currentStep = 0;
  
    // Toggle Ingredients
    ingredientsBtn.addEventListener("click", () => {
      ingredientsList.classList.toggle("hidden");
      ingredientsBtn.textContent = ingredientsList.classList.contains("hidden") 
        ? "Show Ingredients" 
        : "Hide Ingredients";
    });
  
    // Toggle Steps
    stepsBtn.addEventListener("click", () => {
      stepsList.classList.toggle("hidden");
      stepsBtn.textContent = stepsList.classList.contains("hidden") 
        ? "Show Steps" 
        : "Hide Steps";
    });
  
    // Start Cooking
    startCookingBtn.addEventListener("click", () => {
      if (currentStep === 0) {
        stepsList.children[currentStep].classList.add("highlight");
        progressBar.style.width = `${(currentStep + 1) * 20}%`;
        currentStep++;
      } else if (currentStep < stepsList.children.length) {
        stepsList.children[currentStep - 1].classList.remove("highlight");
        stepsList.children[currentStep].classList.add("highlight");
        progressBar.style.width = `${(currentStep + 1) * 20}%`;
        currentStep++;
      } else {
        stepsList.children[currentStep - 1].classList.remove("highlight");
        alert("You're done!");
      }
    });
  });
  