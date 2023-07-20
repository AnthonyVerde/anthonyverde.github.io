$(window).on('load', function() {
    setTimeout(function() {
        //Preloader
        preloaderFadeOutTime = 250;
        function hidePreloader() {
        var preloader = $('.loader-container');
        preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    }, 1000);
});