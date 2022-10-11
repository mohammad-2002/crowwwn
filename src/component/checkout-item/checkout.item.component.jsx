import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  CheckoutComponent,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, ClearItemFromCart } =
    useContext(CartContext);

  const IncreaseQty = () => addItemToCart(cartItem);

  const DecreaseQty = () => removeItemFromCart(cartItem);

  const remove = () => ClearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={cartItem.imageUrl} alt={cartItem.name} />
      </ImageContainer>
      <CheckoutComponent>{cartItem.name}</CheckoutComponent>

      <Quantity>
        <Arrow onClick={DecreaseQty}>&#10094;</Arrow>
        <Value>{cartItem.quantity}</Value>
        <Arrow onClick={IncreaseQty}>&#10095;</Arrow>
      </Quantity>

      <CheckoutComponent>{cartItem.price}</CheckoutComponent>

      <RemoveButton onClick={remove}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
