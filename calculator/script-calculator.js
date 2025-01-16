function addToScreen(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
    
}
function pourcentage(values) {
    console.log(values);
    document.getElementById('screen').value += values;
}

function calculate() {
    try {
        document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } catch {
        document.getElementById('screen').value = 'Erreur'
    }
}