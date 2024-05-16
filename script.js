document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const editor = document.getElementById('editor');
    const editForm = document.getElementById('edit-form');
    const itemName = document.getElementById('item-name');
    const itemDescription = document.getElementById('item-description');
    const itemPrice = document.getElementById('item-price');
    let currentEditItem = null;

    document.querySelectorAll('.edit-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.menu-item');
            const name = menuItem.querySelector('h2').innerText;
            const description = menuItem.querySelector('p').innerText;
            const price = parseFloat(menuItem.querySelector('span').innerText.replace('$', '')).toFixed(2);

            itemName.value = name;
            itemDescription.value = description;
            itemPrice.value = price;

            currentEditItem = menuItem;
            editor.classList.remove('hidden');
            menu.classList.add('hidden');
        });
    });

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        currentEditItem.querySelector('h2').innerText = itemName.value;
        currentEditItem.querySelector('p').innerText = itemDescription.value;
        currentEditItem.querySelector('span').innerText = `$${parseFloat(itemPrice.value).toFixed(2)}`;

        editor.classList.add('hidden');
        menu.classList.remove('hidden');
    });

    document.getElementById('cancel-edit').addEventListener('click', () => {
        editor.classList.add('hidden');
        menu.classList.remove('hidden');
    });
});
