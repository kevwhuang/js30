const addItems = document.querySelector('.add-items');
const items = JSON.parse(localStorage.getItem('items')) || [];
const itemsList = document.querySelector('.plates');

populateList(items, itemsList);

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

function addItem(e) {
    const item = {
        done: false,
        text: this.querySelector('[name=item]').value,
    };

    e.preventDefault();
    this.reset();
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function populateList(plates, platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input id="item${i}" type="checkbox" data-index=${i} ${plate.done ? 'checked' : ''}>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return;
    items[e.target.dataset.index].done = !items[e.target.dataset.index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}
