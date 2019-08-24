$(function() {
    var $page = $(".pageAccount");
    $page.delegate(".update", "click", function(e) {
        var $this = $(this);
        $this.closest("tr").find("input").show().siblings().hide();
        $this.hide().siblings().show();
    });
    $page.delegate(".cancle", "click", function(e) {
        var $this = $(this);
        $this.closest("tr").find("input").hide().siblings().show();
        $this.hide().siblings(".save").hide().siblings(".update").show();
    });
    $page.delegate("#saveMobile", "click", function(e) {
        var $this = $(this);
        $this.closest("tr").find("input").hide().siblings().show();
        $this.hide().siblings(".cancle").hide().siblings(".update").show();
        toastr.success('保存成功');
        toastr.error('保存失败');
    });
    $page.delegate("#saveEmail", "click", function(e) {
        var $this = $(this);
        $this.closest("tr").find("input").hide().siblings().show();
        $this.hide().siblings(".cancle").hide().siblings(".update").show();
        toastr.success('保存成功');
        toastr.error('保存失败');
    });
    $page.delegate("#savePw", "click", function(e) {
        var $this = $(this);
        $this.closest("tr").find("input").hide().siblings().show();
        $this.hide().siblings(".cancle").hide().siblings(".update").show();
        toastr.success('保存成功');
        toastr.error('保存失败');
    });
})