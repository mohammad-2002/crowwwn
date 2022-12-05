// memoize concept

import { createSelector } from 'reselect';

// input selector
const selectCategoryReducer = (state) => state.categories;

// if input selector is same than the memoize selector will not fire, if input changes then only it changes

// memoize selector 

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories)=>categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {})
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>categoriesSlice.isLoading
)

