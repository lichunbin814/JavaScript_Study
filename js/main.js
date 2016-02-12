//$(document).ready(function(){....})可省略document縮寫下如下範例$(function(){...})
$(function () {
    $("#sample1").velocity(
        {
            width: '300px',
        },
        {
            //完成全部動畫需秏費1000豪秒(1秒)
            duration: 1000,
        });

    $("#sample2").velocity(
    {
        width: '300px',
    },
    {
        //完成全部動畫需秏費500豪秒(0.5秒)
        duration: 500,
        //一秒後才執行，需搭配sample1的duration秒數，才會有連續的效果
        delay : 1000
    });
})