const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const deleteItems = document.querySelector('#delete');
const selectItems = document.querySelector('#select');
const buttons = document.querySelector('.select-items');

const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done:false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    show_buttons(buttons);
    this.reset();
}

function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, i) => {
        return`
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
                <label for="item${i}">${plate.text}</label>
                <button id="${i}" onclick="deleteitem(this.id)">delete</button>
            </li>
            `;
    }).join('');
}

function toggleDone(e){
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function deleteitem(elid){
    items.splice(elid, 1);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
    show_buttons(buttons);
    }

function deleteAll(e){
    while(items.length){
        items.pop();
    }
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
    show_buttons(buttons);
}

function selectAll(e){
    if(items.every(function check(item){
        return item.done === false;
    })){
    items.forEach(item => {
        item.done = true;
    });

} else{
    items.forEach(item => {
    item.done = false;
    }); 
}
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function show_buttons(buttons){
    if(items.length){
        buttons.style.display = 'block';
    } else{
        buttons.style.display = 'none';
    }
}

addItems.addEventListener('submit', addItem);
deleteItems.addEventListener('click', deleteAll);
selectItems.addEventListener('click', selectAll);
itemsList.addEventListener('click', toggleDone);

show_buttons(buttons);
populateList(items, itemsList);
    
