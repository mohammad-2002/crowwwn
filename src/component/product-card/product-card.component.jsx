import { useContext } from "react";
import Button, { Button_type_classes } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import {
  ProductCardContainer,
  ProductFooter,
  ProductFooterName,
  ProductFooterPrice,
  ProductImg,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
