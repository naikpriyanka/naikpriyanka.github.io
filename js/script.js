// $(document).ready(function() {
//     $(".details").shorten();
// });
//
// $(".details").shorten({
//     "showChars" : 200
// });
//
//
// $(".details").shorten({
//     "showChars" : 150,
//     "moreText"	: "See More"
// });
//
// $(".details").shorten({
//     "showChars" : 50,
//     "moreText"	: "See More",
//     "lessText"	: "Less"
// });


$(document).ready(function() {
    $('.rating').css('display', 'none');

    // $('.progress .progress-bar').css("width",
    //     function() {
    //         return $(this).attr("aria-valuenow") + "%";
    //     }
    // );

    $('#skillJava').hover(function () {
        $('#ratingJava').css('display', 'block')
    }, function () {
        $('#ratingJava').css('display', 'none')
    });

    $('#skillSBF').hover(function () {
        $('#ratingSBF').css('display', 'block')
    }, function () {
        $('#ratingSBF').css('display', 'none')
    });

    $('#skillHTML').hover(function () {
        $('#ratingHTML').css('display', 'block')
    }, function () {
        $('#ratingHTML').css('display', 'none')
    });

    $('#skillAngularJs').hover(function () {
        $('#ratingAngularJs').css('display', 'block')
    }, function () {
        $('#ratingAngularJs').css('display', 'none')
    });

    $('#skillNodeJs').hover(function () {
        $('#ratingNodeJs').css('display', 'block')
    }, function () {
        $('#ratingNodeJs').css('display', 'none')
    });

    $('#skillC').hover(function () {
        $('#ratingC').css('display', 'block')
    }, function () {
        $('#ratingC').css('display', 'none')
    });

    $('#skillCpp').hover(function () {
        $('#ratingCpp').css('display', 'block')
    }, function () {
        $('#ratingCpp').css('display', 'none')
    });

    $('#skillJavascript').hover(function () {
        $('#ratingJavascript').css('display', 'block')
    }, function () {
        $('#ratingJavascript').css('display', 'none')
    });

});