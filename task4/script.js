const link = document.querySelector('.link');

link.addEventListener('click', (e) => {
    e.preventDefault();
    let txt = prompt('введите текст ссылки');
    link.textContent = txt;
    console.log(txt);
})