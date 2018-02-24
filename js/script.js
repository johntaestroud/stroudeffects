/* ======================
    Preloader 
=========================  */

$(window).on('load', function () { // ensures site is loaded
    $('#preloader').delay(3200).fadeOut('slow');
    $('.longfazers').delay(2400).fadeOut('slow');
    $('.face').delay(2400).fadeOut('slow');
    $('.base span').delay(2400).fadeOut('slow');
    $('.body').delay(2400).fadeOut('slow');
    $('.face').delay(2400).fadeOut('slow');

});

/* ======================
    Team 
=========================  */

$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
    });
});


/* ======================
     Progress Bars
========================= */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);

        });

        this.destroy();
    }, {
        offset: "bottom-in-view"
    });

});

/* ======================
     Responsive Tabs
========================= */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
/* =====================================
              Portfolio
  Window load event fires when all the 
  content on your page is fully loaded 
  including the document structures and
  content
  
  Document ready will not wait for the 
  images and frames to be fully loaded
======================================== */
$(window).on('load', function () {

    // Initialize isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    //on click event of button element inside of isotope-filters
    //and perform action using a function 
    $("#isotope-filters").on('click', 'button', function () {

        //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });

});

/* ======================
       Magnifier
========================= */

$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* ======================
       Testimonial
========================= */


$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
    });
});


/* ======================
       Stats
========================= */
$(function () {
    
    $(".counter").counterUp({
       delay: 10,
        time: 2000
    });
    
});
























