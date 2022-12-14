

$(document).ready(function () {
    const entrepreneurs = [
        { first: 'Steve', last: 'Jobs', year: 1955 },
        { first: 'Oprah', last: 'Winfrey', year: 1954 },
        { first: 'Bill', last: 'Gates', year: 1955 },
        { first: 'Sheryl', last: 'Sandberg', year: 1969 },
        { first: 'Mark', last: 'Zuckerberg', year: 1984 },
        { first: 'Beyonce', last: 'Knowles', year: 1981 },
        { first: 'Jeff', last: 'Bezos', year: 1964 },
        { first: 'Diane', last: 'Hendricks', year: 1947 },
        { first: 'Elon', last: 'Musk', year: 1971 },
        { first: 'Marissa', last: 'Mayer', year: 1975 },
        { first: 'Walt', last: 'Disney', year: 1901 },
        { first: 'Larry', last: 'Page', year: 1973 },
        { first: 'Jack', last: 'Dorsey', year: 1976 },
        { first: 'Evan', last: 'Spiegel', year: 1990 },
        { first: 'Brian', last: 'Chesky', year: 1981 },
        { first: 'Travis', last: 'Kalanick', year: 1976 },
        { first: 'Marc', last: 'Andreessen', year: 1971 },
        { first: 'Peter', last: 'Thiel', year: 1967 }];

    function bornInTheSeventies(x) {
        return x.year > 1969 && x.year < 1980;
    }
    //Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
    let tmp = entrepreneurs.filter(bornInTheSeventies);
    console.log("les entrepreneurs qui sont nés dans les années 70 : ")
    console.log(tmp);
    let output = "<h5>Liste des entrepreneurs né dans les 70's :</h5> <br />";
    for (let i = 0; i < tmp.length; i++) {
        output += tmp[i].first + " " + tmp[i].last + "<br />";
    }
    $('#result1').html(output);

    //Sors une array qui contient le prénom et le nom des entrepreneurs
    tmp = [];
    for (let i = 0; i < entrepreneurs.length; i++) {
        tmp[i] = { first: entrepreneurs[i].first, last: entrepreneurs[i].last };
    }
    console.log("Noms des entrepreneurs dans la liste : ")
    console.log(tmp);
    output = "<h5>Noms des entrepreneurs dans la liste :</h5> <br />";
    for (let i = 0; i < tmp.length; i++) {
        output += tmp[i].first + " " + tmp[i].last + "<br />";
    }
    $('#result2').html(output);

    //Quel âge aurait chaque inventeur aujourd'hui ?
    tmp = [];
    for (let i = 0; i < entrepreneurs.length; i++) {
        tmp[i] = { first: entrepreneurs[i].first, last: entrepreneurs[i].last, age: (2020 - entrepreneurs[i].year) }
    }
    console.log("Age actuel des entrepreneurs dans la liste : ")
    console.log(tmp);
    output = "<h5>Age actuel des entrepreneurs dans la liste :</h5> <br />";
    for (let i = 0; i < tmp.length; i++) {
        output += tmp[i].first + " " + tmp[i].last + " est ne il y a " + tmp[i].age + "annees <br />";
    }
    $('#result3').html(output);

    //Trie les entrepreneurs par ordre alphabétique du nom de famille
    function compare(a, b) {
        if (a.last < b.last) {
            return -1;
        }
        if (a.last > b.last) {
            return 1;
        }
        return 0;
    }
    tmp = entrepreneurs;
    tmp.sort(compare);
    console.log("Entrepreneurs classés alphabetic. par noms de famille : ")
    console.log(tmp);
    output = "<h5>Entrepreneurs classés alphabetic. par noms de famille :</h5> <br />";
    for (let i = 0; i < tmp.length; i++) {
        output += tmp[i].last + ", " + tmp[i].first + "<br />";
    }
    $('#result4').html(output);
});





