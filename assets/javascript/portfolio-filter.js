$('document').ready( function($) {
    $('.portfolio-filters li').on('click', function() {
        $('.portfolio-filters li').removeClass('active');
        $(this).addClass('active');
        filter = $(this).attr('portfolio-filter');

        $('.portfolio-img').each( function() {
            if (filter == 'all') {
                $(this).fadeIn(); 
            } else {
                $(this).hide();
                if ($(this).attr('filter-category') == filter) {
                    $(this).fadeIn();
                }
            }
        });
    });
});