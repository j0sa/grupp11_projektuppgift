function redirectIfCookieFound() {
    let COOKIE_NAME = Cookies.get('firstvisit');
    if (COOKIE_NAME == undefined) {
        Cookies.set('firstvisit', 'true', { expires: 10 });
        window.location = '/start.html';
    } else {
    }
}

/* jQuery.fn.center = function () {
    var w = $(window);
    this.css("position", "absolute");
    this.css("top", Math.max(0, (
        (w.height() - $(this).outerHeight()) / 2) + w.scrollTop()
    ) + "px");
    this.css("left", Math.max(0, (
        (w.width() - $(this).outerWidth()) / 2) + w.scrollLeft()
    ) + "px");
    return this;
}
var hasReadAnnouncement = localStorage
    .getItem("hasReadAnnouncement");
if (!hasReadAnnouncement) {
    $('<div>', { id: 'overlay' }).appendTo('body');
    $("#announcement").fadeIn('slow').center();
}
$("#close").click(function (e) {
    localStorage.setItem("hasReadAnnouncement", "true");
    $("#announcement").remove();
    $("#overlay").remove();
    e.preventDefault();
});
$("button").on("click", function () {
    localStorage.removeItem("hasReadAnnouncement");
    alert("Storage cleared");
}) */

/* $(function () {
    var COOKIE_NAME = 'splash-page-cookie';
    $go = $.cookie(COOKIE_NAME);
    if ($go == null) {
        $.cookie(COOKIE_NAME, 'test', { path: '/', expires: 6 });
        window.location = "/splash.php"
    }
    else {
    }
}); */