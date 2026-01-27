const additemButton = document.getElementById("add-button");
const modalOverlay = document.getElementById("modal-overlay");
const nameofItem = document.getElementById("name-of-item");
const closeIcon = document.getElementById("close-icon");
const form = document.getElementById("item-form");
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

// collet and handle the form data
