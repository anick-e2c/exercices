const cityElement = document.getElementById('city');
const tempElement = document.getElementById('temperature');
const envElement = document.getElementById("environnement");
const apiKey = "a70b7581d04cd7dfb72e645aa64c72bf";

(async () => {
    try {
        const enterCity = prompt("Entrez le nom d'une ville");
        if (!enterCity) {
            console.log('Entrez le nom d\'une ville');
            return;
        }

        // Effectuer la requête à l'API
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${enterCity}&appid=${apiKey}&units=metric&lang=fr');

        // Vérifier si la réponse est réussie
        if (!response.ok) {
            throw new Error(`Erreur : ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        // Afficher les données dans la console pour vérifier
        console.log('Données reçues :', data);

        // Mettre à jour les éléments du DOM
        cityElement.textContent = Ville : ${data.name}, ${data.sys.country};
        tempElement.textContent = Température : ${data.main.temp}°C;
        envElement.textContent = Environnement : ${data.weather[0].description};
    } catch (error) {
        // Gérer les erreurs
        console.error('Erreur lors de la récupération des données météo :', error.message);
    }
})();