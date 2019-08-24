$(function() {
    var $page = $(".pageIndex");
    $('.input-daterange').datepicker({
        language: "zh-CN",
        todayHighlight: true
    });
    // 添加
    $page.delegate("#toAdd", "click", function(e) {
        toastr.success('添加成功');
        toastr.error('添加失败');
    });
    // 删除
    $page.delegate(".btnDel", "click", function(e) {
        toastr.success('删除成功');
        toastr.error('删除失败');
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
})