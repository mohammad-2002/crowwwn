import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selectors";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import Spinner from "../../component/spinner/spinner.component";

const CategoriesPreview = () => {
  // const { CategoriesMap } = useContext(CategoriesContext);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const CategoriesMap = useSelector(selectCategoriesMap);
  return (
    <div className="Categories-Preview-container">
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(CategoriesMap).map((title) => {
          const products = CategoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </div>
  );
};

export default CategoriesPreview;
