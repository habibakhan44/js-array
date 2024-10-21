
let arrayData = [];

function displayArray() {
    const displaySection = document.querySelector('.display-section');
    displaySection.innerHTML = ''; 
    arrayData.forEach((item) => {
        const element = document.createElement('div');
        element.className = 'display-item';
        element.textContent = item;
        displaySection.appendChild(element);
    });
}

document.querySelector('.add-element').addEventListener('click', () => {
    const arrayInput = document.querySelector('.array-input').value;
    if (arrayInput) {
        arrayData.push(arrayInput);
        displayArray();
        document.querySelector('.array-input').value = ''; 
    }
});

function handlePush() {
    const element = prompt("Enter element to push:");
    if (element) {
        arrayData.push(element);
        displayArray();
        document.querySelector('.result-section').textContent = "Push: Added element to the end.";
    }
}

function handlePop() {
    arrayData.pop();
    displayArray();
    document.querySelector('.result-section').textContent = "Pop: Removed last element.";
}

function handleShift() {
    arrayData.shift();
    displayArray();
    document.querySelector('.result-section').textContent = "Shift: Removed first element.";
}

function handleUnshift() {
    const element = prompt("Enter element to unshift:");
    if (element) {
        arrayData.unshift(element);
        displayArray();
        document.querySelector('.result-section').textContent = "Unshift: Added element to the beginning.";
    }
}

function handleSlice() {
    const start = parseInt(prompt("Enter start index for slice:"));
    const end = parseInt(prompt("Enter end index for slice:"));
    if (!isNaN(start) && !isNaN(end)) {
        const slicedArray = arrayData.slice(start, end);
        alert(`Sliced Array: ${slicedArray}`);
    }
}

function handleSplice() {
    const index = parseInt(prompt("Enter index to splice:"));
    const count = parseInt(prompt("Enter number of elements to remove:"));
    if (!isNaN(index) && !isNaN(count)) {
        const removedItems = arrayData.splice(index, count);
        alert(`Removed items: ${removedItems}`);
        displayArray();
    }
}
