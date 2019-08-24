$(function() {
    var $page = $(".pageDossier");
    $('select').selectpicker();
    $('#birthday, #school-start, #school-end').datepicker({
        language: "zh-CN",
        todayHighlight: true
    });
    $page.delegate("#submit1", "click", function(e) {
        toastr.success('提交成功');
        toastr.error('提交失败')
    });
    $page.delegate("#submit2", "click", function(e) {
        toastr.success('提交成功');
        toastr.error('提交失败')
    });   
    
})