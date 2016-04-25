$(window).scroll(function () {

    //目前頁面呈現的doucment高度
    var doucumentShowHight = $(window).scrollTop() + $(window).height();  

    if (doucumentShowHight > ($(document).height() - 100)) {
        //即將讀取到最尾端的Bottom，跳出訊息
        alert("Oh!");
    }
});