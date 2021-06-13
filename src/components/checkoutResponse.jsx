import React, { Component } from "react";

class CheckoutResponse extends Component {
  render() {
    const { tranactionId, responseMessage } = this.props;
    return (
      <React.Fragment>
        <h2>Transaction Reference# - {tranactionId}</h2>
        <br />
        <h2>Status - {responseMessage}</h2>
      </React.Fragment>
    );
  }
}

export default CheckoutResponse;
