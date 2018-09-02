import { createSelector } from 'reselect'

const querySelector = state => state.filters.query
const ingredientsSelector = state => state.filters.ingredients
const pageSelector = state => state.pages.current

const filtersSelector = createSelector(
    querySelector,
    ingredientsSelector,
    pageSelector,
    (query, ingredients, page) => {
        return {
            query,
            ingredients,
            page
        }
    }
)

export default filtersSelector