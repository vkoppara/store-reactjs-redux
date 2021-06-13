import React, { Component } from "react";
import DisplayItems from "./displayItems";
import Categories from "./categories";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import { fetchCategories } from "../store/categories";
import Spinner from "./spinner";

class StoreFront extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  render() {
    const {
      categories,
      onGroupItemHandler,
      selectedCategory,
      productsLoading,
      categoriesLoading,
      products: items,
      columns,
      addToCartHandler,
      currentPage,
      pageSize,
      onPageChange,
      handleSearch,
      searchQuery,
    } = this.props;
    console.log(productsLoading, categoriesLoading);

    if (productsLoading === true || categoriesLoading === true) {
      return <Spinner />;
    }

    return (
      <div className="row">
        <div className="col-2 m-2">
          <Categories
            categories={categories}
            onGroupItemClick={onGroupItemHandler}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="col m-2">
          <DisplayItems
            items={items}
            displayColumns={columns}
            addToCartHandler={addToCartHandler}
            currentPage={currentPage}
            pageSize={pageSize}
            selectedCategory={selectedCategory}
            onPageChange={onPageChange}
            handleSearch={handleSearch}
            searchQuery={searchQuery}
            displaySearch={1}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.entities.products.list,
  productsLoading: state.entities.products.loading,
  categories: [
    { catId: "", name: "All Categories" },
    ...state.entities.categories.list,
  ],
  categoriesLoading: state.entities.categories.loading,
});

const mapDispatchingProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchingProps)(StoreFront);
