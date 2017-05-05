$(function() {
    $(".collapse").collapse({
        toggle: false
    });

    $("#alerts").fadeTo(1500, 300).slideUp(300, function() {
        $("#alerts").slideUp(300);
    });
});
