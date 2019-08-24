/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 09:51:13
 * @LastEditTime: 2019-08-23 10:05:27
 * @LastEditors: Please set LastEditors
 */
$(function() {
    var $page = $(".pageAttestation");
    $page.delegate("#submit", "click", function(e) {
        $page.find(".step1").hide().siblings().show();
        toastr.success('提交成功');
        toastr.error('提交失败');
    });
})