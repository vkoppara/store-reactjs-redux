import React, { Component } from "react";

class Button extends Component {
  render() {
    const { itemId, onClickEvent, cartCount, name, buttonClass } = this.props;
    const btnClass = "btn " + buttonClass + " btn-sm";
    return (
      <div>
        <button
          onClick={() => onClickEvent(itemId)}
          style={{ fontSize: "8px" }}
          className={btnClass}
        >
          {name}
          {cartCount !== 0 ? (
            <span class="badge bg-primary">{cartCount}</span>
          ) : (
            ""
          )}
        </button>
      </div>
    );
  }
}

export default Button;
