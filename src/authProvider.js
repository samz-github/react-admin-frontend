import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from 'react-admin';

const LOGIN_URL = 'http://localhost:8080/login';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request(LOGIN_URL, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token,roleName }) => {
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('role', roleName);
            });
    }
    if (type === AUTH_LOGOUT) {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('role');
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return sessionStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    }
    return Promise.resolve();
}
