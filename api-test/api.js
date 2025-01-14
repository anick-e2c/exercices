 // requete de l'api avec la methode asynchrone

/* async function fetchData() {
    try {
        //Requete GET de l'API 
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=', {
            method: 'GET',
            headers: {
                'Authorization': '4a6c0b808c51edc16150faf5ae72c419',
                'Content-type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erreur réseau');
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error('Erreur', error);
    }
} */

// appel de la fonction async
/* let infos = document.getElementById('infos');
console.log(fetchData()) */
//fetchData(); 

/* fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4a6c0b808c51edc16150faf5ae72c419')
.then(Response => Response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Erreur', error);
}) */

// Autre methode

/* async function fetchWeather() {
    const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4a6c0b808c51edc16150faf5ae72c419';

    try {
        //Faire la requete GET à l'API
        const response = await fetch(apiUrl);

        console.log(response.json());
        //Verifier si la response est OK (statut 200)
        if(!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);

        }
        // C onvertir la reponse en JSON
        const data = await response.json();

        // Affiche les données dans la console 
        console.log('Données météo:', data);

    }catch (error) {
        // Gérer les erreurs
        console.error('Erreur lors de la recuperation des données:', error);
    }
}

// Apperler la fonction pour exécuter la requète
console.log(fetchWeather()) */

const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4a6c0b808c51edc16150faf5ae72c419';
const response = await fetch(apiUrl);
console.log(response);
