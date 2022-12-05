import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, ClearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

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

     const { name, imageUrl, price, quantity} = cartItem;
     const cartItems = useSelector(selectCartItems);
     const dispatch = useDispatch() 


    const IncreaseQty = ()=> dispatch(addItemToCart(cartItems,cartItem));
    const DecreaseQty = ()=> dispatch(removeItemFromCart(cartItems,cartItem));
    const remove = ()=> dispatch(ClearItemFromCart(cartItems,cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={name} />
      </ImageContainer>
      <CheckoutComponent>{name}</CheckoutComponent>

      <Quantity>
        <Arrow onClick={DecreaseQty}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={IncreaseQty}>&#10095;</Arrow>
      </Quantity>

      <CheckoutComponent>{price}</CheckoutComponent>

      <RemoveButton onClick={remove}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
