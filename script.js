function addName() {
    const nameInput = document.getElementById('childName');
    const queueDiv = document.getElementById('queue');
    if (nameInput.value.trim() !== "") {
        const nameElement = document.createElement('h3');
        nameElement.textContent = nameInput.value;
        queueDiv.appendChild(nameElement);
        nameInput.value = "";
    }
}

function exitName() {
    const queueDiv = document.getElementById('queue');
    if (queueDiv.firstChild) {
        queueDiv.removeChild(queueDiv.firstChild);
    }
}
