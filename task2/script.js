const consoleLog = document.querySelector('#consoleLog');
const alert_ = document.querySelector('#alert');
const prompt_ = document.querySelector('#prompt');

consoleLog.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Метод для вывода сообщения в веб консоль')
});

alert_.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Метод который позволяет вывести какую-либо информацию во всплывающем окне в браузере')
});

prompt_.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Метод который выводит окно для ввода данных во всплывающем окне в браузере')
});
