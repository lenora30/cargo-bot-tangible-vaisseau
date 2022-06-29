
$(window).scroll(function() {

    var posScroll = $(this).scrollTop() / 70;

    $("#debut").css({
        "background-size" : 100 + posScroll + "%"
    })
})
