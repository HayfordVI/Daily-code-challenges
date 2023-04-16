const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

keys.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        console.log(e);
    }
});

const key = e.target
const action = key.dataset.action;

    if (!action) {
        console.log('number key!');
    };
