$(function() {
    $(".collapse").collapse({
        toggle: false
    });

    $("#alerts").fadeTo(2000, 500).slideUp(500, function() {
        $("#alerts").slideUp(500);
    });
});

$('#profileForm').on('submit', function(e) {
    e.preventDefault();
    var profileElement = $(this);
    console.log(profileElement);
    var profileUrl = profileElement.attr('action');
    var profileData = profileElement.serialize();
    console.log(profileData);
    $.ajax({
        method: 'PUT',
        url: profileUrl,
        data: profileData
    }).done(function(data) {
        // get data returned from the PUT route
        console.log(data);

        // do stuff when the PUT action is complete
        profileElement.remove();

        // or, you can redirect to another page
        window.location = '/profile';
    });
});
