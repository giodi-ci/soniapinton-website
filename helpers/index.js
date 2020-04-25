import jwtDecode from 'jwt-decode';
let cookieparser = require('cookieparser');

export function getUserFromCookie(request) {
    if (!process.serve && process.static) return
    if (!request.headers.cookie) return

    if (request.headers.cookie) {
        const parsed = cookieparser.parse(request.headers.cookie);
        const accessTokenCookie = parsed.access_token;

        if (!accessTokenCookie) return

        const decodedToken = jwtDecode(accessTokenCookie);

        if (!decodedToken) return

        return decodedToken;
    }
}
