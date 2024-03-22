import * as actionTypes from "../actions/actionTypes";

const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(
                    (itemId) => itemId !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default cartReducer;
