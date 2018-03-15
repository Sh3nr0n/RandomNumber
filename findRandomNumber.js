//Consigne:
// Créer une page internet où un input et un bouton de validation sont présents. 
// En tant qu'utilisateur, j'ai droit à trois essais pour trouver un chiffre 
// généré automatiquement et aléatoirement entre 1 et 10.
// - Si je ne trouve pas, un message apparait m'indiquant si le chiffre généré 
// est plus grand ou plus petit que celui entré précédemment.
// - Au bout de trois essais infructueux, le chiffre généré est affiché avec un 
// message. Un bouton pour rejouer apparait.
// - Si je trouve la bonne réponse, un message de félicitation apparait. Un bouton
//  pour rejouer apparait.

//"Algo":
//Créer un input, un bouton de validation (submit) et un bouton pour rejouer en JS
//Créer une fonction qui génère aléatoirement un chiffre entre 1 et 10
//Créer une fonction qui compare le chiffre entré dans l'input et celui généré
//aléatoirement et qui compte le nombre de tentatives utilisateur (max 3 puis reset)
//Si le chiffre de l'input est égal au chiffre généré : afficher "Bravo vous avez gagné!" et afficher un bouton pour rejouer
//Si le chiffre de l'input est supérieur au chiffre généré  : afficher un message "Le chiffre à trouver est plus petit!"
//Si le chiffre de l'input est inférieur au chiffre généré  : afficher un message "Le chiffre à trouver est plus grand!"
//Si le "compteur de tentatives" est égal à trois et que le chiffre de l'input est différent du chiffre généré :
//afficher un message "Dommage, le chiffre était (afficher le chiffre)... essaye encore!" et affiche un bouton pour rejouer

$(document).ready(function () {
    console.log("ready!");
    var random;
    var i = 0;
    var essai = 3;


    function getRandomInt() {
        random = Math.floor(Math.random() * Math.floor(10));
        console.log("random =", random);
    }

    getRandomInt();
    console.log("random =", random);


    //Générer le contenu du body
    $("#count").append(essai);
    $("#content").append("<input id='userInput' class='btn-primary'> </button>");
    $("#content").append("<button id='validate' class='btn-primary'>Valider</button>");
    $("#content").append("<button id='play' class='btn-primary'>Rejouer</button>");
    
    
    $('#play').hide();

    //Bouton "Valider" : récupère la valeur de l'input utilisateur et la passe dans une fonction qui la compare avec une valeur aléatoire

    $('#validate').click(function () {
        console.log("click validate")
        console.log("user input =", $("#userInput").val());
        $(".message").empty();
        compare($("#userInput").val(), random);
        if (i == 3) {
            $('#play').show();
            $('#validate').hide();
        }
    });

    //Bouton "Rejouer" : efface le dernier message affiché, cache le bouton "Rejouer", remet le décompte des essais à 0 et génère un nouveau nomre aléatoire

    $('#play').click(function () {
        $(".message").empty();
        $('#play').hide();
        $('#validate').show();
        $("#count").empty();
        $("#answer").empty();
        essai=3;
        $("#count").append(essai);
        i = 0;
        getRandomInt();

    });
    //Comparer la valeur en entrée avec le nombre aléatoire, le nombre d'essai max est de 3, 

    function compare(input, random) {

        i += 1;
        essai -= 1;
        console.log("i=", i);
        console.log("essai=", essai);

        //Ajouter condition if (check caractère et valeur comprise entre 0 et 10) else (continuer)
        if (0 <= input && input <= 10) {

            if (i == 3 && input != random) {
                console.log("perdu!");
                $("#content").append("<p class = 'message'>Ceybalotaperdu!, le chiffre à trouver était : " + random + "</p>");
                $("#count").empty();
                $("#count").append(essai);

            } else if (input == random) {
                console.log("Et c'est! la win!");
                $("#content").append("<p class = 'message'>Et c'est! la win!</p>");
                $("#count").empty();
                $("#count").append(essai);
                $('#play').show();
                $('#validate').hide();
            } else if (input > random) {
                console.log("Le chiffre à trouver est plus petit!");
                $("#content").append("<p class = 'message'>Le chiffre à trouver est plus petit!</p>");
                $("#count").empty();
                $("#count").append(essai);

                
            } else if (input < random) {
                console.log("Le chiffre à trouver est plus grand!");
                $("#content").append("<p class = 'message'>Le chiffre à trouver est plus grand!</p>");
                $("#count").empty();
                $("#count").append(essai);
            }

        } else {
            console.log("Essaie pas de me filouter, petit vilain va!");
            $("#content").append("<p class = 'message'>Essaie pas de me filouter, petit vilain va!</p>");
            $("#count").empty();
            $("#count").append(essai);
        }

    }

});