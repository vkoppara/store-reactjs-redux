import React, { Component } from "react";
import ItemCards from "./itemCards";
import Pagination from "./pagination";
import { paginate } from "../util/paginate";
import SearchBox from "./searchBox";
import { addToCart, getCountForItem } from "../store/cart";
import { connect } from "react-redux";

class DisplayItems extends Component {
  state = {
    searchQuery: "",
  };

  addToCartHandler = (item) => {
    this.props.addToCartAction({
      itemId: item.itemId,
      item: {
        itemId: item.itemId,
        cardTitle: item.cardTitle,
        price: item.price,
        cartCount: 1,
      },
    });
  };

  render() {
    const {
      items,
      displayColumns,
      selectedCategory,
      currentPage,
      pageSize,
      onPageChange,
      handleSearch,
      searchQuery,
      displaySearch,
      cartCount,
    } = this.props;
    const columnClass = "row row-cols-" + displayColumns;
    let fileteredItems = items;
    if (searchQuery)
      fileteredItems = items.filter((item) =>
        item.cardTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    else if (selectedCategory && selectedCategory.catId)
      fileteredItems = items.filter(
        (item) => item.catId === selectedCategory.catId
      );

    const pageItems = paginate(fileteredItems, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="container">
          {displaySearch === 1 && (
            <SearchBox value={searchQuery} onChange={handleSearch} />
          )}
          <div className={columnClass}>
            {pageItems.map((row) => (
              <div key={row.itemId} className="col col-lg-2">
                <ItemCards
                  itemId={row.itemId}
                  cardTitle={row.cardTitle}
                  imgLink={row.imgLink}
                  price={row.price}
                  cartCount={cartCount(row.itemId)}
                  onAddToCart={() => this.addToCartHandler(row)}
                />
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            itemsCount={fileteredItems.length}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cartCount: (itemId) => getCountForItem(itemId)(state),
});

const mapDispatchingProps = (dispatch) => ({
  addToCartAction: (item) => dispatch(addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchingProps)(DisplayItems);
