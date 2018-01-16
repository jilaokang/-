$(document).ready(function () {



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



    var a = 0;

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



    if (activePage === 2) {
        $("#icon2").click();
    }
    if (activePage === 1) {
        $("#icon1").click();
    }

});