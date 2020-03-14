$(document).ready(function () {
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good morning!';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good afternoon!';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good evening!';

    document.getElementById('greeting').innerHTML =
        '<h1>' + greet + '</h1>';
});