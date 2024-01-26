function addCharacter(character) {
    document.getElementById('display').value += character;
}


function calculateResult() {
    try {
        var result = eval(document.getElementById('display').value);

        if (result === Infinity || result === -Infinity) {
            document.getElementById('display').value = 'Error: Dzielenie przez zero!';
        } else {
            document.getElementById('display').value = result;
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearScreen() {
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    var currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}