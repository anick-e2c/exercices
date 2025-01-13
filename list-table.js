
let btn = document.getElementById('btn-click',);
let listers = document.getElementById('listers');
let btnDelete = document.getElementById('btn-delete');

let listElemnt = []


//ajout element
btn.addEventListener('click', () => {
    let  entryElemnt = prompt('Ajouter un nom:');
    //recupere l'index 
    //let indx = listElemnt.indexOf(entryElemnt);

    //verifie s'il existe dans le tableau
    //if(indx !== -1) {
        listElemnt.push(entryElemnt);
        listers.innerHTML = `La liste des personnes: ${listElemnt.join('-')}`;
        //listers.innerHTML = listElemnt;
        console.log(listElemnt);
   // }
})
//supression Element
btnDelete.addEventListener('click', () => {
    let elemntDelet = prompt("entrez le nom à suprimer:",);

    // trouve l'index a suprimer
    let index = listElemnt.indexOf(elemntDelet);
    console.log(index);

    if (index !== -1) { // Vérifie si l'élément existe
        listElemnt.splice(index, 1); // Supprime 1 élément à l'index trouvé
        //Affiche
        listers.innerHTML = `La liste des personnes: ${listElemnt.join('-')}`;
      }
})