import React, { Component } from "react";
import DisplayItems from "./displayItems";
import { paginate } from "../util/paginate";
import { connect } from "react-redux";

class ItemDetails extends Component {
  getPrimaryItem = (items, itemId) => {
    const tempItems = [...items];
    return tempItems.filter((item) => item.itemId === itemId);
  };

  getSimilarItems = (items, categoryId, itemId) => {
    let tempItems = [...items];
    tempItems = tempItems.filter(
      (item) => item.catId === categoryId && item.itemId !== itemId
    );
    return paginate(tempItems, 1, 6);
  };

  render() {
    const { products: items, addToCartHandler, onPageChange } = this.props;
    const itemId = Math.ceil(this.props.match.params.id);
    const displayItem = this.getPrimaryItem(items, itemId);
    let catId = 0;
    displayItem.map((item) => (catId = item.catId));
    const similarItems = this.getSimilarItems(items, catId, itemId);
    console.log(similarItems);
    return (
      <React.Fragment>
        <h1> Item Details</h1>
        <DisplayItems
          items={displayItem}
          displayColumns={1}
          addToCartHandler={addToCartHandler}
          currentPage={1}
          pageSize={1}
          selectedCategory={{}}
          onPageChange={() => {}}
          handleSearch={() => {}}
          searchQuery=""
          displaySearch={0}
        />
        <br />

        {similarItems.length === 0 ? <h1></h1> : <h1> Similar Items</h1>}
        <DisplayItems
          items={similarItems}
          displayColumns={6}
          addToCartHandler={addToCartHandler}
          currentPage={1}
          pageSize={6}
          selectedCategory={{}}
          onPageChange={onPageChange}
          handleSearch={() => {}}
          searchQuery=""
          displaySearch={0}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.entities.products.list,
});

const mapDispatchingProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchingProps)(ItemDetails);
