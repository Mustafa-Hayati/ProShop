import {
  IUserInfo,
  UserActions,
  UserActionTypes,
} from "../types/userTypes";
import axios from "axios";
import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IApplicationState } from "../store/store";
import { OrderActions, OrderActionTypes } from "../types/orderTypes";

export const login: ActionCreator<
  ThunkAction<Promise<void>, IApplicationState, string, UserActions>
> = (email: string, password: string) => async dispatch => {
  try {
    dispatch({
      type: UserActionTypes.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post<IUserInfo>(
      "/api/users/login",
      {
        email,
        password,
      },
      config
    );

    dispatch({
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout: ActionCreator<
  ThunkAction<
    void,
    IApplicationState,
    null,
    UserActions | OrderActions
  >
> = () => dispatch => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: UserActionTypes.USER_DETAILS_RESET,
  });
  dispatch({
    type: OrderActionTypes.ORDER_LIST_MY_RESET,
  });
  dispatch({
    type: UserActionTypes.USER_LIST_RESET,
  });
  dispatch({
    type: UserActionTypes.USER_LOGOUT,
  });
};

export const register: ActionCreator<
  ThunkAction<Promise<void>, IApplicationState, string, UserActions>
> = (
  name: string,
  email: string,
  password: string
) => async dispatch => {
  try {
    dispatch({
      type: UserActionTypes.USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post<IUserInfo>(
      "/api/users",
      {
        name,
        email,
        password,
      },
      config
    );

    dispatch({
      type: UserActionTypes.USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails: ActionCreator<
  ThunkAction<Promise<void>, IApplicationState, string, UserActions>
> = id => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const token = userInfo ? userInfo.token : "";

    dispatch({
      type: UserActionTypes.USER_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get<IUserInfo>(
      `/api/users/${id}`,
      config
    );

    dispatch({
      type: UserActionTypes.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile: ActionCreator<
  ThunkAction<Promise<void>, IApplicationState, any, UserActions>
> = (user: IUserInfo) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const token = userInfo ? userInfo.token : "";

    dispatch({
      type: UserActionTypes.USER_UPDATE_PROFILE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put<IUserInfo>(
      `/api/users/profile`,
      user,
      config
    );

    dispatch({
      type: UserActionTypes.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listUsers: ActionCreator<
  ThunkAction<Promise<void>, IApplicationState, null, UserActions>
> = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const token = userInfo ? userInfo.token : "";

    dispatch({
      type: UserActionTypes.USER_LIST_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get<IUserInfo[]>(
      `/api/users/`,
      config
    );

    dispatch({
      type: UserActionTypes.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser: ActionCreator<
  ThunkAction<Promise<void>, IApplicationState, string, UserActions>
> = (id: string) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const token = userInfo ? userInfo.token : "";

    dispatch({
      type: UserActionTypes.USER_DELETE_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(`/api/users/${id}`, config);

    dispatch({
      type: UserActionTypes.USER_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUser: ActionCreator<
  ThunkAction<
    Promise<void>,
    IApplicationState,
    IUserInfo,
    UserActions
  >
> = (user: IUserInfo) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const token = userInfo ? userInfo.token : "";

    dispatch({
      type: UserActionTypes.USER_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put<IUserInfo>(
      `/api/users/${user._id}`,
      user,
      config
    );

    dispatch({
      type: UserActionTypes.USER_UPDATE_SUCCESS,
    });

    dispatch({
      type: UserActionTypes.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
