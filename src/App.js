import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux'; 

import Home from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';

import configureStore, { history } from './redux/store/store';

import { HOME, DETAIL, SEARCH } from './constants/routerConstants';

const store = configureStore();

// whole application component with connection to redux and react-router 
const App = () => (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Header />
            
            <Switch>
              <Route exact path={HOME}>
                <Home />
              </Route>  
              <Route exac path={DETAIL}>
                <DetailPage />
              </Route>
              <Route exac path={SEARCH}>
                <SearchPage />
              </Route> 
              <Route render={
                () => (<div className='empty-search'>Page not found.</div>)
              } />   
            </Switch>

            <Footer />
          </ConnectedRouter>
        </Provider>
);

export default App;