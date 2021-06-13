import { createSlice, createSelector } from "@reduxjs/toolkit";
import * as actions from "./api";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const calculateTotalAmount = (items) => {
  let fullTotalAmount = 0;
  items.map((item) => (fullTotalAmount += item.price * item.cartCount));
  return fullTotalAmount;
};

const calculateCount = (items) => {
  let count = 0;
  items.map((item) => (count += item.cartCount));
  return count;
};

const initialFullTotalAmount = calculateTotalAmount(cartItemsFromStorage);
const initialCartCount = calculateCount(cartItemsFromStorage);

const slice = createSlice({
  name: "cart",
  initialState: {
    list: {
      cartItems: cartItemsFromStorage,
      fullTotalAmount: initialFullTotalAmount,
      cartCount: initialCartCount,
      post: {},
    },
    loading: false,
  },
  reducers: {
    addToCart: (cart, action) => {
      if (cart.list.post.transactionId) {
        cart.list.cartItems = [];
        cart.list.post = {};
      }
      const index = cart.list.cartItems.findIndex(
        (item) => item.itemId === action.payload.itemId
      );
      if (cart.list.cartItems[index]) {
        const cartItem = cart.list.cartItems[index];
        const count = cartItem.cartCount;
        cart.list.cartItems[index] = { ...cartItem, cartCount: count + 1 };
      } else cart.list.cartItems.push(action.payload.item);
      cart.list.fullTotalAmount = calculateTotalAmount(cart.list.cartItems);
      cart.list.cartCount = calculateCount(cart.list.cartItems);
      localStorage.setItem("cartItems", JSON.stringify(cart.list.cartItems));
    },
    decreaseItemCount: (cart, action) => {
      const index = cart.list.cartItems.findIndex(
        (item) => item.itemId === action.payload.itemId
      );
      if (cart.list.cartItems[index].cartCount > 1)
        cart.list.cartItems[index].cartCount--;
      cart.list.fullTotalAmount = calculateTotalAmount(cart.list.cartItems);
      cart.list.cartCount = calculateCount(cart.list.cartItems);
      localStorage.setItem("cartItems", JSON.stringify(cart.list.cartItems));
    },
    removeItemFromCart: (cart, action) => {
      const index = cart.list.cartItems.findIndex(
        (item) => item.itemId === action.payload.itemId
      );
      cart.list.cartItems = cart.list.cartItems.filter(
        (item) => item.itemId !== action.payload.itemId
      );
      cart.list.fullTotalAmount = calculateTotalAmount(cart.list.cartItems);
      cart.list.cartCount = calculateCount(cart.list.cartItems);
      localStorage.setItem("cartItems", JSON.stringify(cart.list.cartItems));
    },
    saveRequested: (cart, action) => {
      cart.loading = true;
    },
    save: (cart, action) => {
      cart.list.post = action.payload.list;
      cart.list.cartCount = 0;
      localStorage.setItem("cartItems", JSON.stringify([]));
    },
    saveFailed: (cart, action) => {
      cart.loading = false;
    },
  },
});

export const {
  addToCart,
  decreaseItemCount,
  removeItemFromCart,
  save,
  saveRequested,
  saveFailed,
} = slice.actions;

export default slice.reducer;

export const checkoutCart = (items) =>
  actions.apiCallBegin({
    url: "/checkout",
    method: "POST",
    data: items,
    onStart: saveRequested.type,
    onSuccess: save.type,
    onError: saveFailed.type,
  });

export const getCountForItem = (itemId) =>
  createSelector(
    (state) => state.entities.cart.list,
    (list) => {
      const index = list.cartItems.findIndex((item) => item.itemId === itemId);
      if (index !== -1 && !list.post.transactionId)
        return list.cartItems[index].cartCount;
      else return 0;
    }
  );
