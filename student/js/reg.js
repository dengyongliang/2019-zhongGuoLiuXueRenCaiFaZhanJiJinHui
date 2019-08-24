/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 09:51:13
 * @LastEditTime: 2019-08-23 10:05:27
 * @LastEditors: Please set LastEditors
 */
$(function() {
    var $page = $(".pageReg");
    $page.delegate("#submit", "click", function(e) {
        toastr.success('注册成功');
        toastr.error('注册失败');
    });
})