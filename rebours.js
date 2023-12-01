const dateInput = document.getElementById('dateInput');
let dateAnniversaire = new Date(dateInput.value);
dateInput.addEventListener('change', () => {
    dateAnniversaire = new Date(dateInput.value);
});

const countdownElement = document.getElementById('countdown');

function afficherTempsRestant() {
    const maintenant = new Date();
    const tempsRestant = dateAnniversaire - maintenant;

    const jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
    const heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${jours} jours, ${heures} heures, ${minutes} minutes, ${secondes} secondes`;
}

const timer = setInterval(afficherTempsRestant, 1000);