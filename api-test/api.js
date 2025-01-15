 // requete de l'api avec la methode asynchrone
const cityElement = document.getElementById('city');
const tempElemnt = document.getElementById('temperature');
const envElemnt = document.getElementById('environnement');
const temp_max = document.getElementById('temp-max');
const temp_min = document.getElementById('temp-min');
const apiKey = "4a6c0b808c51edc16150faf5ae72c419";
/* 
async function fetchData() {
    try {
        //Requete GET de l'API 
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4a6c0b808c51edc16150faf5ae72c419', {
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
} 

// appel de la fonction async
//let infos = document.getElementById('infos');
let resp = fetchData();
console.log(resp);
//fetchData(); 
 */
/* fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4a6c0b808c51edc16150faf5ae72c419')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Erreur', error);
}) 

// Autre methode
*/

/* let villes = ['abidjan','bouaké', 'dabou','daloa','gagnoa','korhogo','man', 'yamoussoukro']
let i = 0; 
while (i < villes.length) { */

    async function fetchWeather() {
    
        try {
            // Prend en compte A ville 
            const enterCity = prompt('Entrez le nom d\'une ville:', 'une ville par ici...');
            //let  enterCity = villes[i];
             if (!enterCity) {
                console.log('Entrez le nom d\'une ville:');
                return;
            }
    
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${enterCity}&appid=${apiKey}&units=metric&lang=fr`;
    
            //Faire la requete GET à l'API
            const response = await fetch(apiUrl);
    
           
    
            //Verifier si la response est OK (statut 200)
            if(!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
    
            }
            // Convertir la reponse en JSON
            const data = await response.json();
    
            // Affiche les données dans la console 
            console.log('Données météo:', data);
    
            // Mis à jour des element
            cityElement.textContent = `${data.name}, ${data.sys.country}`;
            tempElemnt.textContent = `${data.main.temp}°C`;
            envElemnt.textContent = `${data.weather[0].description}`;
            temp_max.textContent = `${data.main.temp_max}`;
            temp_min.textContent = `${data.main.temp_min}`;
    
        }catch (error) {
            // Gérer les erreurs
            console.error('Erreur lors de la recuperation des données:', error.message);
        }
    }
    
    // Apperler la fonction pour exécuter la requète
    fetchWeather();


