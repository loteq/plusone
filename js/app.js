const calculator = document.querySelector('.calc');
const keys = calculator.querySelector('.calc-keys');
const display = calculator.querySelector('.calc-display');

keys.addEventListener('click', e => {

    try {

        if (e.target.matches('button')) {

            if (e.target.innerText === '=') {

                calculate();

            } else if (e.target.innerText === 'AC') {
                display.innerText = '0';

            } else {

                if (display.innerText === '0') {
                    display.innerText = '';
                }
                display.innerText += e.target.innerText;
            }
        }
    }
    catch(err) {
        display.innerText = err.message;
    }
})

document.addEventListener('keydown', e => {

    try {

        e.preventDefault();

        if (display.innerText === '0') {
            display.innerText = '';
        }

        switch (e.code) {
            case 'Numpad0':
                display.innerText += '0';
                break;
            case 'Numpad1':
                display.innerText += '1';
                break;
            case 'Numpad2':
                display.innerText += '2';
                break;
            case 'Numpad3':
                display.innerText += '3';
                break;
            case 'Numpad4':
                display.innerText += '4';
                break;
            case 'Numpad5':
                display.innerText += '5';
                break;
            case 'Numpad6':
                display.innerText += '6';
                break;
            case 'Numpad7':
                display.innerText += '7';
                break;
            case 'Numpad8':
                display.innerText += '8';
                break;
            case 'Numpad9':
                display.innerText += '9';
                break;
            case 'NumpadDivide':
                display.innerText += '÷';
                break;
            case 'NumpadMultiply':
                display.innerText += '×';
                break;
            case 'NumpadSubtract':
                display.innerText += '-';
                break;
            case 'NumpadAdd':
                display.innerText += '+';
                break;
            case 'NumpadDecimal':
                display.innerText += '.';
                break;
            case 'NumpadEnter':
                calculate();
                break;
            case 'Delete':
                display.innerText = '0';
                break;
            default:
            // code block
        }
    }
    catch (err) {
        display.innerText = err.message;
    }
})

let calculate = () => {
    const newStr = display.innerText.replaceAll('÷', '/');
    const newStr2 = newStr.replaceAll('×', '*');

    display.innerText = eval(newStr2);
}