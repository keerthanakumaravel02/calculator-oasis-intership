const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function clearOneDisplay(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error :/";
        setTimeout(() => {clearDisplay();}, 1000); 
    }
}
function calculateSquareRoot() {
    let currentValue = document.getElementById('display').value;
    let result = Math.sqrt(parseFloat(currentValue));
    document.getElementById('display').value = result;
}

