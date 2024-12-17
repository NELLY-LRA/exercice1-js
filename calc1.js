// Fonction pour demander à l'utilisateur de sélectionner une opération
function selectionnerOperation() {
    let operation = prompt("Sélectionnez une opération :\n" +
        " 1 - Addition\n" +
        " 2 - Soustraction\n" +
        " 3 - Multiplication\n" +
        " 4 - Division\n" +
        " 5 - Modulo");

    // Vérification de la saisie
    while (operation !== "1" && operation !== "2" && operation !== "3" && operation !== "4" && operation !== "5") {
        operation = prompt("Erreur de saisie. Veuillez sélectionner une opération valide.");
    }

    return operation;
}

// Fonction pour demander à l'utilisateur de saisir un nombre
function saisirNombre(message) {
    let nombre = prompt(message);

    // Vérification de la saisie
    while (isNaN(nombre)) {
        nombre = prompt("Erreur de saisie. Veuillez saisir un nombre valide.");
    }

    return parseFloat(nombre);
}

// Fonction pour effectuer l'addition
function addition() {
    let nombre1 = saisirNombre("Entrez le premier nombre :");
    let nombre2 = saisirNombre("Entrez le deuxième nombre :");
    let resultat = nombre1 + nombre2;
    alert(`Le résultat de l'addition est : ${resultat}`);
}

// Fonction pour effectuer la soustraction
function soustraction() {
    let nombre1 = saisirNombre("Saisissez un nombre :");
    let nombre2 = saisirNombre("Saisissez un autre nombre :");
    let resultat = nombre1 - nombre2;
    alert(`Le résultat de la soustraction est : ${resultat}`);
}

// Fonction pour effectuer la multiplication
function multiplication() {
    let nombre1 = saisirNombre("Saisissez un nombre :");
    let nombre2 = saisirNombre("Saisissez le deuxième nombre :");
    let resultat = nombre1 * nombre2;
    alert(`Le résultat de la multiplication est : ${resultat}`);
}

// Fonction pour effectuer la division
function division() {
    let nombre1 = saisirNombre("Saisissez le premier nombre :");
    let nombre2 = saisirNombre("Saisissez le deuxième nombre :");

    // Vérification de la division par zéro
    while (nombre2 === 0) {
        nombre2 = saisirNombre("Error! Vous ne pouvez pas diviser par zéro. Veuillez saisir un autre nombre :");
    }

    let resultat = nombre1 / nombre2;
    alert(`Le résultat de la division est : ${resultat}`);
}

// Fonction pour effectuer le modulo
function modulo() {
    let nombre1 = saisirNombre("Saisissez le premier nombre :");
    let nombre2 = saisirNombre("Saisissez le deuxième nombre :");

    // Vérification de la division par zéro
    while (nombre2 === 0) {
        nombre2 = saisirNombre("Erreur de saisie. Vous ne pouvez pas diviser par zéro. Veuillez saisir un autre nombre :");
    }

    let resultat = nombre1 % nombre2;
    alert(`Le résultat du modulo est : ${resultat}`);
}

// Fonction principale
function main() {
    let operation = selectionnerOperation();

    switch (operation) {
        case "1":
            addition();
            break;
        case "2":
            soustraction();
            break;
        case "3":
            multiplication();
            break;
        case "4":
            division();
            break;
        case "5":
            modulo();
            break;
    }
}

// Lancement de la fonction principale
main();
