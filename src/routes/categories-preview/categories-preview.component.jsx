import {  useContext } from "react";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";


const CategoriesPreview = () => {
  const { CategoriesMap } = useContext(CategoriesContext);
  return (
    <div className="Categories-Preview-container">
      {Object.keys(CategoriesMap).map((title) => {
        const products = CategoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
