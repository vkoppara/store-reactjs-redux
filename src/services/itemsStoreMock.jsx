import React, { Component } from "react";

const itemsStore = () => {
  return [
    {
      itemId: 1,
      cardTitle: "title1",
      price: 2.5,
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
      catId: 1,
    },
    {
      itemId: 2,
      cardTitle: "title2",
      price: 4.0,
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
      catId: 2,
    },
    { itemId: 3, cardTitle: "title3", price: 6.0, imgLink: "", catId: 2 },
    { itemId: 4, cardTitle: "title4", price: 2.0, imgLink: "", catId: 3 },
    { itemId: 5, cardTitle: "title5", price: 4.0, imgLink: "", catId: 1 },
    { itemId: 6, cardTitle: "title6", price: 6.0, imgLink: "", catId: 1 },
    { itemId: 7, cardTitle: "title5", price: 4.0, imgLink: "", catId: 1 },
    { itemId: 8, cardTitle: "title6", price: 6.0, imgLink: "", catId: 1 },
    {
      itemId: 9,
      cardTitle: "title1",
      price: 2.5,
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
      catId: 1,
    },
    {
      itemId: 10,
      cardTitle: "title2",
      price: 4.0,
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
      catId: 1,
    },
    { itemId: 11, cardTitle: "title3", price: 6.0, imgLink: "", catId: 1 },
    { itemId: 12, cardTitle: "title4", price: 2.0, imgLink: "", catId: 1 },
    { itemId: 13, cardTitle: "title5", price: 4.0, imgLink: "", catId: 1 },
    { itemId: 14, cardTitle: "title6", price: 6.0, imgLink: "", catId: 1 },
    { itemId: 15, cardTitle: "title5", price: 4.0, imgLink: "", catId: 1 },
    { itemId: 16, cardTitle: "title6", price: 6.0, imgLink: "", catId: 1 },
    {
      itemId: 17,
      cardTitle: "title1",
      price: 2.5,
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
      catId: 1,
    },
    {
      itemId: 18,
      cardTitle: "title2",
      price: 4.0,
      imgLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
      catId: 1,
    },
    { itemId: 19, cardTitle: "title3", price: 6.0, imgLink: "", catId: 1 },
    { itemId: 20, cardTitle: "title4", price: 2.0, imgLink: "", catId: 1 },
    { itemId: 21, cardTitle: "title5", price: 4.0, imgLink: "", catId: 2 },
    { itemId: 22, cardTitle: "title6", price: 6.0, imgLink: "", catId: 1 },
    { itemId: 23, cardTitle: "title5", price: 4.0, imgLink: "", catId: 2 },
    { itemId: 24, cardTitle: "title6", price: 6.0, imgLink: "", catId: 2 },
  ];
};

export default itemsStore;
