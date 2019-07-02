grid(16);

function grid(size) {
let container = document.querySelector('.container');

container.style.gridTemplateColumns = '1fr '.repeat(size);
container.style.gridTemplateRows = '1fr '.repeat(size);

while (container.firstChild) {
    container.removeChild(container.firstChild);
};

for (i = 0; i < (size * size); i++) {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('griddiv');
    gridDiv.classList.remove('hover');
    gridDiv.classList.add('squares');
    gridDiv.addEventListener('mouseover', function() {
        gridDiv.classList.add('hover');
        gridDiv.classList.remove('squares');
    });
container.appendChild(gridDiv);
};

};  

let resetBtn = document.querySelector('#resetbtn');
    resetBtn.addEventListener('click', function() {
        newSize = prompt("Please enter new sketchpad size(ex. 100 x 100, enter 100):");
        grid(newSize);
    });
