// header
$(document).ready(function () {
    $('.menu-btn').click(function(event) {
        $('.navbar-main').toggleClass('open-nav');
    });
    $('.nav-link').click(function(){
        $('.navbar-main').removeClass('open-nav');
    });

 
});

$(document).ready(function() {
    new WOW().init();
})
