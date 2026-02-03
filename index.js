const additemButton = document.getElementById("add-button");
const modalOverlay = document.getElementById("modal-overlay");
const nameofItem = document.getElementById("name-of-item");
const closeIcon = document.getElementById("close-icon");
const form = document.getElementById("form");
const linkToItem = document.getElementById("link-to-item");
const descriptionOfItem = document.getElementById("description-of-item");

// Reveal and hide modal overlay
additemButton.addEventListener("click", openModalOverlay);

function openModalOverlay() {
  modalOverlay.classList.remove("modal-overlay");
  modalOverlay.classList.add("modal-overlay-visible");
  nameofItem.focus();
}

closeIcon.addEventListener("click", closeModalOverlay);

function closeModalOverlay() {
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
  closeModalOverlay();
  fetchDataFromLocalStorage();
}

// fetch data from local storage on page load
function fetchDataFromLocalStorage() {
  // get data from local storage
  const storedItems = localStorage.getItem("itemsOfResearch");
  // if Data exists
  if (storedItems) {
    // convert back to array of object
    const parsedItems = JSON.parse(storedItems);
  }
}

// Call fetch function on page load
fetchDataFromLocalStorage(); // Immediately after script loads

// window.addEventListener("load", fetchDataFromLocalStorage); // After page loads

// Print Data From Local Storageon the UI
function printItemsOnUI() {
  const researchList = document.getElementById("research-list");
  const storedItems = localStorage.getItem("itemsOfResearch");
}
// Print items on UI on page load
printItemsOnUI();
