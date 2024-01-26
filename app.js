function appendCharacter(character) {
    document.getElementById('display').value += character;
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearScreen() {
    document.getElementById('display').value = '';
}