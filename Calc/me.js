const display = document.querySelector('.field__num'),

buttons = document.querySelectorAll("button"),

operators = ['+', '-', '*', '/', '(', ')', '=', 'AC','.'],

numbers = ['0', '1','2','3','4','5','6','7', '8','9']

let output = "";


// Оптимизация для клавиатуры 

document.onkeydown = function(KeyboardEvent){
    if (numbers.includes(KeyboardEvent.key)){
        output += KeyboardEvent.key;
    } 
    else if (KeyboardEvent.key === 'Backspace'){
         output = output.toString().slice(0,-1);
    }
    else if (KeyboardEvent.key === 'Enter'){
        output = eval(output);
    }
    else if (operators.includes(KeyboardEvent.key)){
        output += KeyboardEvent.key;
    }
    display.value = output;    
};



// Тач нажатие

const calculate = (btnValue) => {
    // Очистка input
    if (btnValue === "AC"){
        output = "";
    }
    // Удалить цифру
    else if (btnValue ==='DE'){
        output = output.toString().slice(0,-1);
    }
    // Ответ
    else if (btnValue === '='){
        output = eval(output);
    }

    else if (btnValue === '(' || btnValue === ')'){
        output += btnValue;
    }

    else if (btnValue === '/'){
        output += btnValue ; 
    }

    // Вывод кнопок в input
    else {
        if (output === "" && operators.includes(btnValue)) return;
        output += btnValue;
        
    }
    
    display.value = output;
};


buttons.forEach(button => {
    button.addEventListener('click', e => calculate(e.target.dataset.value));
});


