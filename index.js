const additemButton = document.getElementById("add-button");
const modalOverlay = document.getElementById("modal-overlay");
const nameofItem = document.getElementById("name-of-item");
const closeIcon = document.getElementById("close-icon");
const form = document.getElementById("form");
const linkToItem = document.getElementById("link-to-item");
const descriptionOfItem = document.getElementById("description-of-item");

// Reveal and hide modal overlay
additemButton.addEventListener("click", revealModalOverlay);

function revealModalOverlay() {
  modalOverlay.classList.remove("modal-overlay");
  modalOverlay.classList.add("modal-overlay-visible");
  nameofItem.focus();
}

closeIcon.addEventListener("click", hideModalOverlay);

function hideModalOverlay() {
  if (modalOverlay.classList.contains("modal-overlay-visible")) {
    modalOverlay.classList.add("modal-overlay");
    modalOverlay.classList.remove("modal-overlay-visible");
  }
}

// Collect and handle form data
let researchItems = [];

form.addEventListener("submit", handleFormData);

function handleFormData(e) {
  e.preventDefault();
  // Input Data collection
  const itemName = nameofItem.value.trim();
  const itemLink = linkToItem.value.trim();
  const itemDescription = descriptionOfItem.value.trim();
  // Create research item object
  const researchItem = {
    name: itemName,
    link: itemLink,
    description: itemDescription,
  };
  // Add research item to array
  researchItems.push(researchItem);
  // Store data in local storage
  localStorage.setItem("itemsOfResearch", JSON.stringify(researchItems));
  // Clear form fields
  form.reset();
}
