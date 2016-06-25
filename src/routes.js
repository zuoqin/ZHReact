import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
//import HomePage from './components/home/HomePage';
import MainContainer from './components/item/MainContainer';
//import ItemsPage from './components/item/ItemsPage';
//import ManageItemPage from './components/item/ManageItemPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainContainer} />
    <Route path="item/:id" component={MainContainer} />
    <Route path="page/:id" component={MainContainer} />
  </Route>
);
