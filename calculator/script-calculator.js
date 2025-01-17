//va initialiser pour suivre si une nouvelle saisie commence
let isNewInput = false;

function addToScreen(value) {
    //document.getElementById('screen').value += value;

    const display = document.getElementById('screen');

    // Si c'est une nouvelle saisie, réinitialiser l'écran
    if (isNewInput && !isNaN(value)) {
        display.value = '';
        isNewInput = false; 
    }
    display.value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';

    isNewInput = false; // réinitialiser la variable
    
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

        isNewInput = true;
        // Pour marquer le prochain chiffre doit commencer une nouvelle saisie
    } catch {
        document.getElementById('screen').value = 'Erreur';
        isNewInput = true;
        // Pour marquer le prochain chiffre doit commencer une nouvelle saisie
    }
}