import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, useRouterHistory  } from 'react-router';
import { createHashHistory } from 'history';

import App from './containers/App';
import Home from './containers/Home';
import Login from './containers/Login'
import Registration from './containers/Registration'
import store from './store';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const init = () => {
    render(
        <Provider store={store}>
            <Router history={appHistory}>
                <Route path="/">
                    <IndexRoute component={Login} />
                    <Route path="/register" component={Registration}>
                    </Route>
                    <Route path="/home" component={App}>
                        {/*<Route path="/merchants/:action(/:id)" component={Merchant} />*/}
                    </Route>
                </Route>
            </Router>
        </Provider>,
        document.querySelector('#root')
    );
};

init();
