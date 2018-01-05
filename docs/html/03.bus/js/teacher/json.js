var json;

$(document).ready(function () {
    $.getJSON("data.json", function (result) {
        $.each(result, function (i,val) {
            json = this;
            console.log("**********  JSON  **********");
            console.log(json);
        })
    });
});