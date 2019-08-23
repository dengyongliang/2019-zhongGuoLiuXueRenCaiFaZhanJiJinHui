/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 09:51:13
 * @LastEditTime: 2019-08-23 10:05:27
 * @LastEditors: Please set LastEditors
 */
$(function(){
  var $page = $(".pageFindPw");
  $page.delegate(".hd li:not(.active)", "click", function(){
    var $this = $(this);
    $this.addClass("active").siblings().removeClass("active");
    $page.find(".bd li").eq($this.index()).show().siblings().hide();
  });
  // 邮箱找回-找回密码
  $page.delegate("#btnNext", "click", function(e){
    $page.find(".step1").hide().siblings().show();
    
  });
})