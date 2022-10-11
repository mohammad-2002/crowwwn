import { ReactComponent as ShoppingBag } from "../../assests/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const CartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={CartToggle}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartItems.length}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
