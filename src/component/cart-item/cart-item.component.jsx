import React from "react";
import "./cart-item.styles";
import {
  CartItemContainer,
  CartItemDetails,
  CartItemImg,
  CartItemName,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  return (
    <CartItemContainer>
      <CartItemImg src={cartItem.imageUrl} />
      <CartItemDetails>
        <CartItemName>{cartItem.name}</CartItemName>
        <span className="price">
          {cartItem.quantity} x {cartItem.price}{" "}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
