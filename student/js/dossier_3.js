$(function() {
    var $page = $(".pageDossier");
    $page.delegate(".list input", "click", function(e) {
        $(this).closest("li").addClass("active").siblings().removeClass("active");
    });
})