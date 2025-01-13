

//greeting.addEventListener('clik', click());

function fClick() {
    let greeting = document.getElementById('greetting');
    greeting.innerHTML = 'hello world';
}

document.getElementById('btnc-b').addEventListener('click', () =>{
    document.getElementById('greetting').textContent = "Bouton 2 cliqué";
})

