/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 09:51:13
 * @LastEditTime: 2019-08-23 10:05:27
 * @LastEditors: Please set LastEditors
 */
$(function() {
    var $page = $(".pageLogin");
    $page.delegate("#submit", "click", function(e) {
        toastr.success('登录成功');
        toastr.error('登录失败');
    });
})