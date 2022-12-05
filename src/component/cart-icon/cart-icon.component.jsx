import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";

const CartIcon = () => {

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  
  const dispatch = useDispatch();
  const CartToggle = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={CartToggle}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartItems.length}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
