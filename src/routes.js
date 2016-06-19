import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
//import AboutPage from './components/about/AboutPage';
import ItemsPage from './components/item/ItemsPage';
import ManageItemPage from './components/item/ManageItemPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ItemsPage} />
    <Route path="items" component={ItemsPage} />
    <Route path="home" component={HomePage} />
    <Route path="item" component={ManageItemPage} />
    <Route path="item/:id" component={ManageItemPage} />
    <Route path="page/:id" component={ItemsPage} />
  </Route>
);
