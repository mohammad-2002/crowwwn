import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewDiv,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title} className="title">
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <CategoryPreviewDiv>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return (
              <ProductCard
                key={product.id}
                title={title}
                product={product}
              ></ProductCard>
            );
          })}
      </CategoryPreviewDiv>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
