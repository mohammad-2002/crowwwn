import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
