var json;

$(document).ready(function () {
    $.getJSON("data.json", function (result) {
        $.each(result, function (i,val) {
            json = this;
            console.log("");
            console.log("This is JSON:");
            console.log(json);

        })
    });
});