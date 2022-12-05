import { getCollectionsAndDocuments } from "../../utilites/firebase/firebase.utilites";
import { createAction } from "../../utilites/reducer/reducer.utilis";
import { CATEGORY_ACTION_TYPES } from "./categories.types";

export const fetchCategoriesStart = () =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

//   thunk function

export const fetchCategoriesAsync = ()=> async(dispatch)=>{
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCollectionsAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {

        dispatch(fetchCategoriesFailed(error))
    }
}
