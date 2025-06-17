// Télécharger le cv après un clic sur le bouton 'Télecharger mon CV'//

document.getElementById('buttonCV').addEventListener('click', function() {
    const lienbutton = document.createElement('a');
    lienbutton.href = '../asset/CVBLANDINE.pdf'; // Utilisez des barres obliques
    lienbutton.download = 'CVBLANDINE.pdf';
    document.body.appendChild(lienbutton);
    lienbutton.click();
    document.body.removeChild(lienbutton);
});

// soumission du formulaire après clic sur le bouton 'envoyer'//

document.getElementById('bSubmit').addEventListener('click', function(event){
    event.preventDefault();

    //reccupération des valeurs des inputs de users
    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const sujet = document.getElementById('sujet').value;
    const message = document.getElementById('message').value;

    //affichage des valeurs sasies

    alert(`Prénom: ${prenom}\nNom: ${nom}\nSujet: ${sujet}\nMessage: ${message}`);
})
