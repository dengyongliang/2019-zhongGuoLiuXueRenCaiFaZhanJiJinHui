$(function() {
    var $page = $(".pageLogin");
    $page.delegate("#submit", "click", function(e) {
        toastr.success('登录成功');
        toastr.error('登录失败');
    });
})