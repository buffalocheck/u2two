$(function() {
    $(".collapse").collapse({
        toggle: false
    });

    $("#alerts").fadeTo(1000, 300).slideUp(300, function() {
        $("#alerts").slideUp(300);
    });

});
