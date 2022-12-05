import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../component/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selectors";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import Spinner from "../../component/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();

  const CategoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setproducts] = useState(CategoriesMap[category]);
  
  useEffect(() => {
    setproducts(CategoriesMap[category]);
  }, [category, CategoriesMap]);
  
  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <br></br>
      {
       isLoading ? <Spinner/> : 
       <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
      }
      
    </>
  );
};

export default Category;
