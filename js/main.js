//$(document).ready(function(){....})可省略document縮寫下如下範例$(function(){...})
$(function () {
    $("#sample1").velocity(
        {
            width: '300px',
        },
        {
            //完成全部動畫需秏費1000豪秒(1秒)
            duration: 1000,
            //sample1完成動畫才會執行complete方法，因此sample2就不用特定指定delay來達到連續動畫的效果
            complete: function () {
                $("#sample2").velocity(
                {
                    width: '300px',
                },
                {
                    //完成全部動畫需秏費500豪秒(0.5秒)
                    duration: 500
                });
            }
        });
})