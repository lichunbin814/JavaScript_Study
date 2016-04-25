//以下的JS邏輯為什麼不能隱藏TD呢？
    var cbx = $("#cbx");

    cbx.change(function () {
        $("td").hide();
        var selectedVal = $(this).val();
        $("td." + selectedVal).show();
    });

    cbx.change();

