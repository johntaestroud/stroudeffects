/* ======================
    Preloader 
=========================  */

$(window).on('load', function () { // ensures site is loaded
    $('#preloader').delay(2500).fadeOut('slow');
    $('.longfazers').delay(1700).fadeOut('slow');
    $('.face').delay(1700).fadeOut('slow');
    $('.base span').delay(1700).fadeOut('slow');
    $('.body').delay(1700).fadeOut('slow');
    $('.face').delay(1700).fadeOut('slow');

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
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            // less than 480px
            0: {
                items: 1
            },
            // greater than 480px
            480: {
                items: 2
            }
        }
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

/* ======================
       Section #10
========================= */
$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
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
        Google Map
========================= */
$(window).on('load', function () {

    // Map variables
    var addressString = '413 N Alafaya Trail, FL, Orlando, USA';
    var myLatlng = {
        lat: 28.554483,
        lng: -81.200473
    };

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click to see address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    //shows info when user clicks
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
});