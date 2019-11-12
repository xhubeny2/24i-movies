import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import createRootReducer from '../reducers/rootReducer';

// history is hold in redux store as well
export const history = createBrowserHistory();

// redux store
const configureStore = (preloadedState) => {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
            ),
            devToolsEnhancer()
        ), 
    );

    return store;
};

export default configureStore;
