const trafficLightEl = document.querySelectorAll('#trafficLight');
const colors = ['green', 'yellow', 'red'];

let i = 0;


const changeColors = () => {

    trafficLightEl.forEach((el) => {
        el.style.backgroundColor = 'black';
    })

    if (i > 2) i = 0;
    trafficLightEl[i].style.backgroundColor = colors[i];
    i++;
}

trafficLightEl.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();

        changeColors();
    });

})



// function makeGreen() {
//     trafficLightEl.style.background = ('green');
//     trafficLightEl.removeEventListener('click', makeGreen);
//     trafficLightEl.addEventListener('click', makeYellow);
// }

// function makeYellow() {
//     trafficLightEl.style.background = ('yellow');
//     trafficLightEl.removeEventListener('click', makeYellow);
//     trafficLightEl.addEventListener('click', makeRed);
// }

// function makeRed() {
//     trafficLightEl.style.background = ('red');
//     trafficLightEl.removeEventListener('click', makeRed);
//     trafficLightEl.addEventListener('click', makeGreen);
// }


// trafficLightEl.addEventListener('click', makeGreen);