activePage = 1;

! function () {
    var href = window.location.href;
    arr = href.split("?");
    console.log(arr)
    if (arr[1]) {
        activePage = 2;
    }
}();