import React, { Component } from 'react';
import AppNavbar from './Components/AppNavbar';
import CategoriesList from './Components/CategoriesList';
import CategoriesModal from './Components/CategoriesModal';
import ApiScripts from './Components/ApiScripts';
import EditCategories from './Components/EditCategories';
import ProductsList from './Components/ProductsList';
import AddProductions from './Components/AddProductions';
import EditProducts from './Components/EditProducts';
import Login from './Components/Login'
import {Provider} from 'react-redux';
import store from './store'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <BrowserRouter>
      <switch>
      <AppNavbar />
      <switch>
        <Route exact path="/" component={Login}></Route> 
        <Route exact path="/categories/" component={CategoriesList}></Route>
        <Route exact path="/categories/" component={CategoriesModal}></Route>
        <Route exact path="/edit/:id" component={EditCategories}></Route>
        <Route exact path="/products/" component={ProductsList}></Route>
        <Route exact path="/products/add/" component={AddProductions}></Route>
        <Route exact path="/products/edit/:id" component={EditProducts}></Route>
        <Route exact path="/update/" component={ApiScripts}></Route>
      </switch>
      </switch>
      </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
