// 冒泡插件参数设置
toastr.options = {
    "positionClass": "toast-center-center",
    "hideDuration": "1000",
    "timeOut": "1500"
}
// 表格 全选 事件
$("body").delegate(".boxTable input[name='all']", "click", function(){
    var $this = $(this),
        $table = $this.closest("table");
    if ($this.prop("checked")) {
        $table.find("tbody input[type='checkbox']").prop("checked",true)
    } else {
        $table.find("tbody input[type='checkbox']").prop("checked",false)
    }
});
// 表格 非全选 checkbox 事件
$("body").delegate(".boxTable tbody input[type='checkbox']", "click", function(){
    var $this = $(this),
        $table = $this.closest("table");
    if ($this.prop("checked")) {
        var flag = true;
        $table.find("tbody input[type='checkbox']").map(function(v,i,arr){
            if (!$(this).prop("checked")) {
                flag = false;
            }
        });
        if (flag) {
            $table.find("input[name='all']").prop("checked",true)
        }
    } else {
        $table.find("input[name='all']").prop("checked",false)
    }
});