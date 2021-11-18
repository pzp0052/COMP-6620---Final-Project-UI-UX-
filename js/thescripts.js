/**
 * Created by Prashamsa Pandey
 * Email: pzp0052@auburn.edu
 */


var winWidth = $(window).width();

$(document).ready(function () {
    sliderInit();
    addClassInit();
    navInit();
    mcustomInit();
});


/*------------------------------- Functions Starts -------------------------------*/
function sliderInit() {
    $('.funding-container').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 500,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

}

function addClassInit() {
    var items = $(".list-wrapper li");
    var numItems = items.length;
    var perPage = 5;

    items.slice(perPage).hide();

    $('.pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
}

function navInit() {

}

function mcustomInit() {

}

function hamburgerMenu() {
    console.log('anukriti');
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
    x.style.display = "none";
} else {
    x.style.display = "block";
}
}



/*-------------------------------- Functions Ends --------------------------------*/
