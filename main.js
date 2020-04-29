///////////////////
// INSTRUCTIONS  //
///////////////////

//   -Create the JavaScript logic necessary to add functionality to the jQuery Calculator.
//   -Your calculator should be able to handle basic mathematical operations like addition, subtraction, multiplication, and division.
//   -You should be making use of the existing buttons.
//   -You should be making use of the existing placeholders for entering content (i.e. "firstNumber", "operator", "secondNumber", "result").

let value1 = '';
let value2 = '';
let operator = '';
let result = '';

let firstNumber = $('#first-number');
let secondNumber = $('#second-number');
let operatorField = $('#operator');
let resultField = $('#result');

const updateResult = () => {
    resultField.text(`${ value1 } ${ operator } ${ value2 } = ${ result }`);
    console.log(resultField.text);
}

// Write a handleNumber event handler to assign numeric values to
// variables value1 & value2
const handleNumber = (event) => {
    if (result == '' && operator == '')
        if (event.currentTarget.value != '.' || value1.indexOf('.') == -1)
            value1 += event.currentTarget.value;
    if (result == '' && operator != '')
        if (event.currentTarget.value != '.' || value2.indexOf('.') == -1)
            value2 += event.currentTarget.value;
    updateResult();
}

// Assign the handleNumber function as an event listener for the click
// function on the number keys.
$('.number').click((event) => handleNumber(event));

// Write a handleOperator event handler to assign operators to the
// operator variable
const handleOperator = (event) => {
    if (result == '')
        operator = event.currentTarget.value;
    updateResult();
}

// Assign the handleOperator function as an event listener for the
// operator keys.
$('.operator').click((event) => handleOperator(event));

// Write and assign an event listener to handle the equals key. It will
// use the value1, value2, operator and result variables.
$('#button-equal').click((event) => {
    if (result != '') {
        value2 = result;
        result = `${
            (operator == '+') ? (Number(value1) + Number(value2)) :
            (operator == '-') ? (Number(value1) - Number(value2)) :
            (operator == '*') ? (Number(value1) * Number(value2)) :
            (operator == '/') ? (Number(value1) / Number(value2)) : (Number(value1) % Number(value2))
        }`;
    }
    if (result == '' && value1 != '' && value2 != '' && operator != '')
        result = `${
            (operator == '+') ? (Number(value1) + Number(value2)) :
            (operator == '-') ? (Number(value1) - Number(value2)) :
            (operator == '*') ? (Number(value1) * Number(value2)) :
            (operator == '/') ? (Number(value1) / Number(value2)) : (Number(value1) % Number(value2))
        }`;
    updateResult();
});

// Write and assign an event listener to handle the CLEAR key.
$('#button-clear').click((event) => {
    value1 = '';
    value2 = '';
    operator = '';
    result = '';
    updateResult();
});
