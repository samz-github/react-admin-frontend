import React, {Component} from 'react';
import './App.css';

import { fetchUtils, Admin, Resource, Login } from 'react-admin';
import role from './role/index';
import authProvider from "./authProvider";
import myDataProvider from "./myDataProvider";
import chineseMessages from 'ra-language-chinese';

const BACKEND_URL = 'http://localhost:8080/api';
//设置默认语言为中文：https://github.com/chen4w/ra-language-chinese
const messages = {
    'cn': chineseMessages,
}
const i18nProvider = locale => messages[locale];

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = sessionStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    //Tip: fetchJson() is just a shortcut for fetch().then(r => r.json()), plus a control of the HTTP response code to throw an HTTPError in case of 4xx or 5xx response.
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = myDataProvider(BACKEND_URL, httpClient);
//设置登陆背景图片
const myLoginPage = () => <Login backgroundImage='/background.jpg'/>

class App extends Component
{
    render() {
        return (
            <Admin loginPage={myLoginPage}
                   dataProvider={dataProvider}
                   locale="cn" i18nProvider={i18nProvider}
                   authProvider={authProvider}>
                <Resource name="role"  options={{label: '角色'}} {...role} />
            </Admin>
        );
    }
}

export default App;
