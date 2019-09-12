/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 13:09:39
 * @LastEditTime: 2019-08-26 13:23:01
 * @LastEditors: Please set LastEditors
 */
$(function() {
    var $page = $(".pageAccount");
    var currentPage = 1;
    // select实例化
    $('select').selectpicker();
    // 事件绑定
    $page.delegate(".update", "click", function(e) {
        var $this = $(this);
        $this.closest("tr").find("input,.bootstrap-select").show().siblings().hide();
        $this.hide().siblings().show();
    });
    $page.delegate(".cancle", "click", function(e) {
        var $this = $(this);
        $this.closest("tr").find("input,.bootstrap-select").hide().siblings().show();
        $this.hide().siblings(".save").hide().siblings(".update").show();
    });
    $page.delegate("#saveName", "click", function(e) {
        var $this = $(this);
        $this.closest("tr").find("input").hide().siblings().show();
        $this.hide().siblings(".cancle").hide().siblings(".update").show();
        toastr.success('保存成功');
        toastr.error('保存失败');
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
    $page.delegate("#saveBank", "click", function(e) {
        var $this = $(this);
        $this.closest("tr").find("input").hide().siblings().show();
        $this.hide().siblings(".cancle").hide().siblings(".update").show();
        toastr.success('保存成功');
        toastr.error('保存失败');
    });
    $page.delegate("#saveBankCard", "click", function(e) {
        var $this = $(this);
        $this.closest("tr").find("input").hide().siblings().show();
        $this.hide().siblings(".cancle").hide().siblings(".update").show();
        toastr.success('保存成功');
        toastr.error('保存失败');
    });
    $page.delegate("#saveCity", "click", function(e) {
        var $this = $(this);
        $this.closest("tr").find(".bootstrap-select").hide().siblings().show();
        $this.hide().siblings(".cancle").hide().siblings(".update").show();
        toastr.success('保存成功');
        toastr.error('保存失败');
    });
    // 获取数据
    function initData() {
        // $.ajax({
        //     url: "./setPage.php",
        //     data: {
        //       page: currentPage,
        //     },
        //     dataType: "json",
        //     success: function (result) {
        //         // 调用分页函数.参数:当前所在页, 总页数(用总条数 除以 每页显示多少条,在向上取整), ajax函数
        //         setPage(currentPage, Math.ceil(result[0].size/pageSize), render)
        //     }
        // })
        // 调用翻页
        setPage(10, 20, initData);
    }
    initData();
    /**
     *
     * @param pageCurrent 当前所在页
     * @param pageSum 总页数
     * @param callback 调用ajax
     */
    function setPage(pageCurrent, pageSum, callback) {
        $(".pagination").bootstrapPaginator({
            //设置版本号
            bootstrapMajorVersion: 3,
            // 显示第几页
            currentPage: pageCurrent,
            // 总页数
            totalPages: pageSum,
            itemTexts: function (type, page, current) {
                switch (type) {
                    case "first":
                        return "首页";
                    case "prev":
                        return "上一页";
                    case "next":
                        return "下一页";
                    case "last":
                        return "末页";
                    case "page":
                        return page;
                }
            },
            shouldShowPage: true,
            //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
            onPageClicked: function (event,originalEvent,type,page) {
                // 把当前点击的页码赋值给currentPage, 调用ajax,渲染页面
                currentPage = page
                callback && callback()
            }
        })
    }
    //弹出框水平垂直居中
    (window.onresize = function () {
        var win_height = $(window).height();
        var win_width = $(window).width();
        if (win_width <= 768){
            $(".tailoring-content").css({
                "top": (win_height - $(".tailoring-content").outerHeight())/2,
                "left": 0
            });
        }else{
            $(".tailoring-content").css({
                "top": (win_height - $(".tailoring-content").outerHeight())/2,
                "left": (win_width - $(".tailoring-content").outerWidth())/2
            });
        }
    })();

    //弹出图片裁剪框
    $("#replaceImg").on("click",function () {
        $(".tailoring-container").toggle();
    });

    //cropper图片裁剪
    $('#tailoringImg').cropper({
        aspectRatio: 1/1,//默认比例
        preview: '.previewImg',//预览视图
        guides: false,  //裁剪框的虚线(九宫格)
        autoCropArea: 0.5,  //0-1之间的数值，定义自动剪裁区域的大小，默认0.8
        movable: true, //是否允许移动图片
        dragCrop: true,  //是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
        movable: true,  //是否允许移动剪裁框
        resizable: true,  //是否允许改变裁剪框的大小
        zoomable: true,  //是否允许缩放图片大小
        mouseWheelZoom: true,  //是否允许通过鼠标滚轮来缩放图片
        touchDragZoom: true,  //是否允许通过触摸移动来缩放图片
        rotatable: true,  //是否允许旋转图片
        crop: function(e) {
            // 输出结果数据裁剪图像。
        }
    });
    //旋转
    $(".cropper-rotate-btn").on("click",function () {
        $('#tailoringImg').cropper("rotate", 45);
    });
    //复位
    $(".cropper-reset-btn").on("click",function () {
        $('#tailoringImg').cropper("reset");
    });
    //换向
    var flagX = true;
    $(".cropper-scaleX-btn").on("click",function () {
        if(flagX){
            $('#tailoringImg').cropper("scaleX", -1);
            flagX = false;
        }else{
            $('#tailoringImg').cropper("scaleX", 1);
            flagX = true;
        }
        flagX != flagX;
    });

    //裁剪后的处理
    $("#sureCut").on("click",function () {
        if ($("#tailoringImg").attr("src") == null ){
            return false;
        }else{
            var cas = $('#tailoringImg').cropper('getCroppedCanvas');//获取被裁剪后的canvas
            var base64url = cas.toDataURL('image/png'); //转换为base64地址形式
            $("#finalImg").prop("src",base64url);//显示为图片的形式
            uploadFile(encodeURIComponent(base64url))//编码后上传服务器
            //关闭裁剪框
            closeTailor();
        }
    });

})
//图像上传
function selectImg(file) {
    if (!file.files || !file.files[0]){
        return;
    }
    var reader = new FileReader();
    reader.onload = function (evt) {
        var replaceSrc = evt.target.result;
        //更换cropper的图片
        $('#tailoringImg').cropper('replace', replaceSrc,false);//默认false，适应高度，不失真
    }
    reader.readAsDataURL(file.files[0]);
}
//关闭裁剪框
function closeTailor() {
    $(".tailoring-container").toggle();
}

//ajax请求上传  
function uploadFile(file) {  
    $.ajax({  
        url : '/demo/upload.do',  
        type : 'POST',  
        data : "file=" + file,  
        async : true,  
        success : function(data) {  
            console.log(data)  
        }  
    });  
} 
