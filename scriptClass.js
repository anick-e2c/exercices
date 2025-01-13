// class
const nom = prompt('Entrez votre nom', ""); 
const ages = parseInt(prompt('Entrez votre ages:', ""));
const taile = parseFloat(prompt('Entrez votre taile:', ""));
const poid = parseFloat(prompt('Entrez votre poids:', ""));
const permi  = prompt('Vous avez le permis oui/non', "");

let classinf = document.getElementById('classinfos');
let result = document.getElementById('result');
let btnResult = document.getElementById('btn-result');

class Personne {
    constructor(nom, age, taille, poids, permis = false){
        this.nom = nom ;
        this.age = age ;
        this.poids = poids
        this.taille = taille ;
        this.permis = permis ;
    }

   
    peutConduire() {
        if (this.age >= 18 && this.permis != null) {
            if (this.permis != null ) {
                this.permis = true;

                classinf.innerHTML =`Felicitation Monsieur ${this.nom} vous avez le permis et vous avez l'âge de conduire.`;
            
            }else if (this.permis != null && this.age < 18){
                this.permis = false;
                classinf.innerHTML = `Desolé monsieur ${this.nom} vous n'avez pas l'age de conduire.`;

            }
        } else {
        
            classinf.innerHTML = `Dommage vous ne pouvez pas conduire.`;
            }
        }
    

   detail() {

        return `Nom: ${this.nom}- Age: ${this.age} -taille: ${this.taille}-Poids: ${this.poids}-Permis: ${this.permis}`
    } 
}


// instance de class Personne 
let personne2 = new Personne(nom, ages, taile, poid, false);
console.log(personne2.peutConduire());

classinfos.textContent = personne2.peutConduire();

//clique
btnResult.addEventListener('click', () =>{
    result.textContent = personne2.detail();
})