//$(document).ready(function(){....})可省略document縮寫下如下範例$(function(){...})
$(function () {
    /*改用RunSequence的方式解决過多的巢狀Complete方法，增加可讀性*/
    //定義動畫參數
    var seq = [
        {
            elements: $("#sample1"),
            properties: { width: "300px" },
            options: { duration: 1000 }
        },
        {
            elements: $("#sample2"),
            properties: { width: "300px" },
            options: { duration: 500 }
        },
        {
            elements: $("#sample3"),
            properties: { width: "300px" },
            options: { duration: 500 }
        }
    ];
    //執行
    $.Velocity.RunSequence(seq);
})