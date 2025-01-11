// Open modal
function openModal() {
    document.getElementById('modal-overlay').style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Open modal on page load (for demonstration purposes)
window.onload = openModal;
