import Button, { Button_type_classes } from "../button/button.component";
import {
  ProductCardContainer,
  ProductFooter,
  ProductFooterName,
  ProductFooterPrice,
  ProductImg,
} from "./product-card.styles";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";


const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
 const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(cartItems,product));

  return (
    <ProductCardContainer>
      <ProductImg src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <ProductFooterName>{name}</ProductFooterName>
        <ProductFooterPrice>{price}</ProductFooterPrice>
      </ProductFooter>
      <Button
        buttonType={Button_type_classes.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
