/*情境:這個js很多人都寫過，也累積了二千多行，時常自己掛掉，但大家都懶的測試，所以前輩盯寧說千萬不要改他，能動就好...*/

/***
    請自行想像這個區塊已經有寫了二千多行的JS.....
**/

$(document).ready(function () {

    $("#target").text("把顯示的內容改為Edit1");

    //動態新增的元素
    var addEleemnt = $('<p>').text("把顯示的內容改為Edit2");
    $("body").append(addEleemnt);    
});