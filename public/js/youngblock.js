
var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,    
    items: 1,
    loop: true,
    margin: 20,
    nav: true,
    navClass: ['.owl-prev', 'owl-next'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoWidth: true,
    responsive: {
        0 :{
            items: 2
        }
    }
});

$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});
