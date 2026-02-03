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
    researchItems = JSON.parse(storedItems);
  }
  // Print items on UI on page load
  printItemsOnUI();
}

// Call fetch function on page load
fetchDataFromLocalStorage(); // Immediately after script loads

// window.addEventListener("load", fetchDataFromLocalStorage); // After page loads

// Print Data From Local Storageon the UI
function printItemsOnUI() {
  researchItems.forEach(function (item) {
    const printItemName = item.name;
    const printItemLink = item.link;
    const printItemDescription = item.description;

    const itemsSection = document.getElementById("items-section");

    // Create research item div
    const researchItemDiv = document.createElement("div");
    researchItemDiv.classList.add("research-item");

    const titleAndDeleteContainer = document.createElement("div");
    titleAndDeleteContainer.classList.add("title-and-delete-container");

    // Create item link
    const itemLinkElement = document.createElement("a");
    itemLinkElement.setAttribute("href", `${printItemLink}`);
    itemLinkElement.setAttribute("target", "_blank");
    itemLinkElement.textContent = printItemName;

    // Create delete icon
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");

    // Append link and delete icon to title container
    titleAndDeleteContainer.appendChild(itemLinkElement);
    titleAndDeleteContainer.appendChild(deleteIcon);

    // create description div
    const descriptionOfItemDiv = document.createElement("div");
    descriptionOfItemDiv.classList.add("description-of-item");

    // create description paragraph
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = printItemDescription;

    // Append paragraph to description div
    descriptionOfItemDiv.appendChild(descriptionParagraph);

    researchItemDiv.appendChild(titleAndDeleteContainer);
    researchItemDiv.appendChild(descriptionOfItemDiv);

    itemsSection.appendChild(researchItemDiv);
  });
}

// Delete item functionality
const itemsSection = document.getElementById("items-section");

itemsSection.addEventListener("click", deleteItem);

function deleteItem(e) {
  if (e.target.classList.contains("fa-trash")) {
    const itemToDelete = e.target.parentElement.querySelector("a").textContent;

    // Remove from DOM
    e.target.parentElement.parentElement.remove();

    // Remove from researchItems array
    researchItems = researchItems.filter(function (item) {
      return item.name !== itemToDelete;
    });

    // Update local storage
    localStorage.setItem("itemsOfResearch", JSON.stringify(researchItems));
  }
}
