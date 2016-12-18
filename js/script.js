$(document).ready(function() {
    $(".show-more").click(function () {
        if($(".text").hasClass("show-more-height")) {
            $(this).text("Show Less");
        } else {
            $(this).text("Show More");
        }
        $(".text").toggleClass("show-more-height");
    });

    $(".naik-electroman-project").hide();
    $(".show-more-projects").click(function () {
        if($(".text-project").hasClass("show-more-height-projects")) {
            $(this).text("View Less");
            $(".naik-electroman-project").show();
        } else {
            $(this).text("View More Projects");
            $(".naik-electroman-project").hide();
        }
        $(".text-project").toggleClass("show-more-height-projects");
        $(this).find('i').toggleClass('fa-caret-down fa-caret-up')
    });

});