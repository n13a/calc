const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')){
            return;
        } else {
            console.log(value)
        }
    })

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value) {
        switch(value) {
            case '=':
                
        }
    }
}