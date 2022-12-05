import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartItems)=>cartItems.isCartOpen
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems)=>cartItems.reduce(
    (cartTotal, cartItem) => cartTotal + cartItem.quantity * cartItem.price,
    0
  )
)
