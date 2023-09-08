const field = document.querySelector('#duplicateField');
const input = document.querySelector('input');
const button = document.querySelector('button');

input.addEventListener('input', (e) => {
    e.preventDefault();
    field.textContent = input.value;
}
)

button.addEventListener('click', (e) => {
    e.preventDefault();
    field.textContent = '';
    console.log(input.value);
    input.value = '';
})