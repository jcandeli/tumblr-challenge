import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import tumblr from './redux/tumblr';
import favorites from './redux/favorites';
import sagas from './redux/sagas/sagas';

import './theme/main.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        tumblr,
        favorites
    }),
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(sagas);

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// TODO
// add route for just viewing favorites