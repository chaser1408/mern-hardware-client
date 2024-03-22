import * as actionTypes from "./actionTypes";
import userService from "../services/userService";

export const login = (credentials) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.LOGIN_REQUEST });
        const user = await userService.login(credentials);
        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: user });
    } catch (error) {
        dispatch({ type: actionTypes.LOGIN_FAILURE, payload: error.message });
    }
};
