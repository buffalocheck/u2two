$(function() {
    $(".collapse").collapse({
        toggle: false
    });

    $("#alerts").fadeTo(2000, 500).slideUp(500, function() {
        $("#alerts").slideUp(500);
    });
});
