import * as actionTypes from "./actionTypes";
import productService from "../services/productService";

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.FETCH_PRODUCT_REQUEST });
        const products = await productService.getProducts();
        dispatch({
            type: actionTypes.FETCH_PRODUCTS_SUCCESS,
            payload: products,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.FETCH_PRODUCTS_FAILURE,
            payload: error.message,
        });
    }
};
