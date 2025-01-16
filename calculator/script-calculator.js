function addToScreen(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
    
}

function initialScreen(initValue) {
    document.getElementById('screen').value = initValue;

}

function pourcentage(values) {
    document.getElementById('screen').value = eval(document.getElementById('screen').value += values) ;
}

function calculate() {
    try {
        document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } catch {
        document.getElementById('screen').value = 'Erreur'
    }
}