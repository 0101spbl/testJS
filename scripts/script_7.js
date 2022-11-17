$(document).ready(function () {
    function computeAwnser(question) {
        console.log(question);
        if (question[question.length - 1] == "?") {
            return "ouaiiis , ouaiiis";
        } else if (question == question.toUpperCase() && question.length > 0) {
            return "Pwa, calme-toi...";
        } else if (question.includes("fortnite")) {
            return "on s' fait une partie soum-soum ?";
        } else if (question == "") {
            return "t'es en PLS ?";
        } else {
            return "balek"
        }
    }
    for (; ;) {
        question = prompt("toi encore? - entre q pour quitter -");
        if (question === null) { return; }
        console.log(computeAwnser(question));
    }
});