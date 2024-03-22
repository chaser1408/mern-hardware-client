import * as actionTypes from "./actionTypes";

export const addToCart = (productId) => ({
    type: actionTypes.ADD_TO_CART,
    payload: productId,
});

export const removeFromCart = (productId) => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: productId,
});
