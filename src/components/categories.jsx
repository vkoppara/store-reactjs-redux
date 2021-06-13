import React, { Component } from "react";

class Categories extends Component {
  render() {
    const { categories, onGroupItemClick, selectedCategory } = this.props;
    return (
      <ul className="list-group">
        {categories.map((cat) => (
          <li
            key={cat.catId}
            onClick={() => onGroupItemClick(cat)}
            className={
              selectedCategory.catId === cat.catId
                ? "list-group-item active"
                : "clickable list-group-item"
            }
          >
            {cat.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Categories;
