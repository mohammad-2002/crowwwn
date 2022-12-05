import { createAction } from "../../utilites/reducer/reducer.utilis";
import { CART_ACTION_TYPES } from "./cart.types";


export  const setIsCartOpen=(bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool)



const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  
  const removeCartItem = (cartItems, CartItemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === CartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== CartItemToRemove.id);
    }
    return cartItems.map((cartItem) =>
      cartItem.id === CartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  
  const clearCartItem = (cartItems, CartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== CartItemToClear.id);
  };



  

 export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };

  export const removeItemFromCart = (cartItems,CartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, CartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };

  export const ClearItemFromCart = (cartItems,CartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, CartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  }; 
  