const inputText = document.querySelector('#typeText');
const parentUl = document.querySelector('#listedItems');
const btn = document.querySelector('#add-icon');


inputText.addEventListener('keypress', function (e) {
    if (e.key === 'Enter')
    {
        const newItem = this.value;
        const newListedItem = document.createElement('li');
        newListedItem.innerText = newItem;
        parentUl.appendChild(newListedItem);
        this.value = "";
        newListedItem.classList.add('newTask');
        newListedItem.addEventListener('click', function () {
            newListedItem.style.textDecoration = "line-through";
        });
        newListedItem.addEventListener('dblclick', function () {
            parentUl.removeChild(newListedItem);
        });
    }   
}
);

btn.addEventListener('click', function () {
    const newItem = document.createElement('li');
    newItem.innerText = inputText.value;
    parentUl.appendChild(newItem);
    inputText.value = "";
    newItem.classList.add('newTask');
    newItem.addEventListener('click', function () {
        newItem.style.textDecoration = "line-through";
    });
    newItem.addEventListener('dblclick', function () {
        parentUl.removeChild(newItem);
    });
});