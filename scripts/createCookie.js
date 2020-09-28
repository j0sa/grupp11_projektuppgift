function redirectIfCookieFound() {
    let COOKIE_NAME = Cookies.get('firstvisit');
    if (COOKIE_NAME == undefined) {
        Cookies.set('firstvisit', 'true', { expires: 10 });
        window.location = '/start.html';
    } else {
        window.location = '/index.html';
    }
}