$(document).ready(function () {
    $("#pages2").hide();
    $("#icon1").addClass("activeIcon");
    $("#icon1").click(function () {
        $("#icon1").addClass("activeIcon");
        $("#icon2").removeClass("activeIcon");
        $("#pages1").show();
        $("#pages2").hide();
        console.log("icon1 clicked")
    });
    $("#icon2").click(function () {
        $("#icon2").addClass("activeIcon");
        $("#icon1").removeClass("activeIcon");
        $("#pages1").hide();
        $("#pages2").show();

        console.log("icon2 clicked")
    })

    var a = 1;
    $("#menuButton").click(function () {
        a++;
        a = a % 2;
        if (a === 1) {
            $("#rightNav").slideDown("800");
        } else {
            $("#rightNav").slideUp("800");
        }
        console.log(a);
    })

    $("#rightNav").hide();


    function dddd() {
        var href = window.location.href;
        arr = href.split("?");
        console.log(arr)
        if (arr[1]) {
            $("#icon2").click();
        }
    }
    dddd();
});