import {
    CREATE_USER,
    RETRIEVE_USERS,
    UPDATE_USER,
    DELETE_USER,
    DELETE_ALL_USERS
} from "./types";

import UserDataService from "../services/UserService";

export const createUser = (username, firstName, lastName, email) => async (dispatch) => {

    try {
        const res = await UserDataService.create({ username, firstName, lastName, email });
    
        dispatch({
            type: CREATE_USER,
            payload: res.data,
          });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};