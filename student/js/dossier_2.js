$(function() {
    var $page = $(".pageDossier");
    $('select').selectpicker();
    $('#birthday, #school-start, #school-end').datepicker({
        language: "zh-CN",
        todayHighlight: true
    });
    $page.delegate("#submit1", "click", function(e) {
        var $parent = $(this).hide().closest(".box");
        $parent.find(".readonly,.btnUpdate").show();
        $parent.find(".edit,.btns button,.btnUpload").hide();
        toastr.success('提交成功');
        toastr.error('提交失败')
    });
    $page.delegate("#submit2", "click", function(e) {
        var $parent = $(this).hide().closest(".box");
        $parent.find(".readonly,.btnUpdate").show();
        $parent.find(".edit,.btns button,.btnUpload").hide();
        toastr.success('提交成功');
        toastr.error('提交失败')
    });
    $page.delegate(".btnUpdate", "click", function(e) {
        var $parent = $(this).hide().closest(".box");
        $parent.find(".readonly").hide();
        $parent.find(".edit,.btns button").show();
        $parent.find(".btnUpload").css("display","inline-block");
    }); 
    
})