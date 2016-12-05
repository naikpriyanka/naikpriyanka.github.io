$(document).ready(function() {
    $('.rating').css('display', 'none');
    // $(".project-details").shorten();

    // // $('.progress .progress-bar').css("width",
    // //     function() {
    // //         return $(this).attr("aria-valuenow") + "%";
    // //     }
    // // );
    //
    // $(".project-details").shorten({
    //     "showChars" : 200
    // });
    //
    //
    // $(".project-details").shorten({
    //     "showChars" : 150,
    //     "moreText"	: "See More"
    // });
    //
    // $(".project-details").shorten({
    //     "showChars" : 50,
    //     "moreText"	: "See More",
    //     "lessText"	: "Less"
    // });

    $('#skillJava').hover(function () {
        $('#ratingJava').css('display', 'block');
        $('#skillJava').css('text-decoration', 'underline');
    }, function () {
        $('#ratingJava').css('display', 'none');
        $('#skillJava').css('text-decoration', 'none');
    });

    $('#skillSBF').hover(function () {
        $('#ratingSBF').css('display', 'block');
        $('#skillSBF').css('text-decoration', 'underline');
    }, function () {
        $('#ratingSBF').css('display', 'none');
        $('#skillSBF').css('text-decoration', 'none');
    });

    $('#skillHTML').hover(function () {
        $('#ratingHTML').css('display', 'block');
        $('#skillHTML').css('text-decoration', 'underline');
    }, function () {
        $('#ratingHTML').css('display', 'none');
        $('#skillHTML').css('text-decoration', 'none');
    });

    $('#skillAngularJs').hover(function () {
        $('#ratingAngularJs').css('display', 'block');
        $('#skillAngularJs').css('text-decoration', 'underline');
    }, function () {
        $('#ratingAngularJs').css('display', 'none');
        $('#skillAngularJs').css('text-decoration', 'none');
    });

    $('#skillNodeJs').hover(function () {
        $('#ratingNodeJs').css('display', 'block');
        $('#skillNodeJs').css('text-decoration', 'underline');
    }, function () {
        $('#ratingNodeJs').css('display', 'none');
        $('#skillNodeJs').css('text-decoration', 'none');
    });

    $('#skillC').hover(function () {
        $('#ratingC').css('display', 'block');
        $('#skillC').css('text-decoration', 'underline');
    }, function () {
        $('#ratingC').css('display', 'none');
        $('#skillC').css('text-decoration', 'none');
    });

    $('#skillCpp').hover(function () {
        $('#ratingCpp').css('display', 'block');
        $('#skillCpp').css('text-decoration', 'underline');
    }, function () {
        $('#ratingCpp').css('display', 'none');
        $('#skillCpp').css('text-decoration', 'none');
    });

    $('#skillJavascript').hover(function () {
        $('#ratingJavascript').css('display', 'block');
        $('#skillJavascript').css('text-decoration', 'underline');
    }, function () {
        $('#ratingJavascript').css('display', 'none');
        $('#skillJavascript').css('text-decoration', 'none');
    });

});