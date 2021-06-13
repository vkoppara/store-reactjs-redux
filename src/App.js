import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import ItemDetails from "./components/itemDetails";
import Login from "./components/login";
import NavBar from "./components/navBar";
import StoreFront from "./components/storeFront";
import Checkout from "./components/checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

class App extends Component {
  state = {
    columns: 6,
    selectedCategory: {},
    pageSize: 12,
    currentPage: 1,
    totalCount: 0,
    searchQuery: "",
  };

  onGroupItemHandler = (cat) => {
    this.setState({ selectedCategory: cat, searchQuery: "", currentPage: 1 });
  };

  onPageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedCategory: {}, currentPage: 1 });
  };

  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <NavBar addToCartCount={this.state.totalCount} />
        <main className="container">
          <Switch>
            <Route
              path="/home"
              component={(props) => (
                <StoreFront
                  onGroupItemHandler={this.onGroupItemHandler}
                  selectedCategory={this.state.selectedCategory}
                  columns={this.state.columns}
                  currentPage={this.state.currentPage}
                  pageSize={this.state.pageSize}
                  onPageChange={this.onPageChange}
                  searchQuery={this.state.searchQuery}
                  handleSearch={this.handleSearch}
                  {...props}
                />
              )}
            />
            <Route path="/login" component={Login} />
            <Route path="/checkout" component={Checkout} />
            <Route
              path="/item/:id"
              component={(props) => (
                <ItemDetails
                  items={this.state.items}
                  addToCartHandler={this.addToCartHandler}
                  onPageChange={this.onPageChange}
                  {...props}
                />
              )}
            />
            <Redirect from="/" exact to="/home" />
          </Switch>
        </main>
      </Provider>
    );
  }
}

export default App;
