$(document).ready(function () {
    var myDate = new Date();
    var hrs = myDate.getHours();
    var greet;
    var imgUrl

    if (hrs < 12){
        greet = 'Good morning!';
        $('#header-container-home').addClass('morning');
        $('#header-container-about').addClass('morning');
        $('#header-container-contact').addClass('morning');
        $('#greeting').addClass('morning');
    }
        
    else if (hrs >= 12 && hrs <= 17)
    {
        greet = 'Good afternoon!';
        $('#header-container-home').addClass('afternoon');
        $('#header-container-about').addClass('afternoon');
        $('#header-container-contact').addClass('afternoon');
        $('#greeting').addClass('afternoon');
    }
        
    else if (hrs >= 17 && hrs <= 24){
        greet = 'Good evening!';
        $('#header-container-home').addClass('evening');
        $('#header-container-about').addClass('evening');
        $('#header-container-contact').addClass('evening');
        $('#greeting').addClass('evening');
    }

    document.getElementById('greeting').innerHTML =
        '<h1>' + greet + '</h1>';
});