function redirectIfCookieFound() {
    let COOKIE_NAME = Cookies.get('visited');
    if (COOKIE_NAME == undefined) {
        Cookies.set('visited', 'true', { expires: 10 });
        window.location = '/start.html';
    }
}