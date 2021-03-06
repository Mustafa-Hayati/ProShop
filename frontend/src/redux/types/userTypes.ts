/*
 * TODO
 * Change the duplicate types. like login and register types
 */
export interface IUserInfo {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export enum UserActionTypes {
  USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL = "USER_LOGIN_FAIL",
  USER_LOGOUT = "USER_LOGOUT",
  USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST",
  USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS",
  USER_REGISTER_FAIL = "USER_REGISTER_FAIL",
  USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST",
  USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS",
  USER_DETAILS_RESET = "USER_DETAILS_RESET",
  USER_DETAILS_FAIL = "USER_DETAILS_FAIL",
  USER_UPDATE_PROFILE_REQUEST = "USER_UPDATE_PROFILE_REQUEST",
  USER_UPDATE_PROFILE_SUCCESS = "USER_UPDATE_PROFILE_SUCCESS",
  USER_UPDATE_PROFILE_FAIL = "USER_UPDATE_PROFILE_FAIL",
  USER_UPDATE_PROFILE_RESET = "USER_UPDATE_PROFILE_RESET",
  USER_LIST_REQUEST = "USER_LIST_REQUEST",
  USER_LIST_SUCCESS = "USER_LIST_SUCCESS",
  USER_LIST_FAIL = "USER_LIST_FAIL",
  USER_LIST_RESET = "USER_LIST_RESET",
  USER_DELETE_REQUEST = "USER_DELETE_REQUEST",
  USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS",
  USER_DELETE_FAIL = "USER_DELETE_FAIL",
  USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST",
  USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS",
  USER_UPDATE_FAIL = "USER_UPDATE_FAIL",
  USER_UPDATE_RESET = "USER_UPDATE_RESET",
}

export interface IUserLoginRequest {
  type: UserActionTypes.USER_LOGIN_REQUEST;
}

export interface IUserLoginSuccess {
  type: UserActionTypes.USER_LOGIN_SUCCESS;
  payload: IUserInfo;
}

export interface IUserLoginFail {
  type: UserActionTypes.USER_LOGIN_FAIL;
  payload: string;
}

export interface IUserLogout {
  type: UserActionTypes.USER_LOGOUT;
}

export interface IUserRegisterRequest {
  type: UserActionTypes.USER_REGISTER_REQUEST;
}
export interface IUserRegisterSuccess {
  type: UserActionTypes.USER_REGISTER_SUCCESS;
  payload: IUserInfo;
}
export interface IUserRegisterFail {
  type: UserActionTypes.USER_REGISTER_FAIL;
  payload: string;
}

export interface IUserDetailsRequest {
  type: UserActionTypes.USER_DETAILS_REQUEST;
}
export interface IUserDetailsSuccess {
  type: UserActionTypes.USER_DETAILS_SUCCESS;
  payload: IUserInfo;
}
export interface IUserDetailsFail {
  type: UserActionTypes.USER_DETAILS_FAIL;
  payload: string;
}

export interface IUserDetailsReset {
  type: UserActionTypes.USER_DETAILS_RESET;
}

export interface IUserUpdateProfileRequest {
  type: UserActionTypes.USER_UPDATE_PROFILE_REQUEST;
}
export interface IUserUpdateProfileSuccess {
  type: UserActionTypes.USER_UPDATE_PROFILE_SUCCESS;
  payload: IUserInfo;
}
export interface IUserUpdateProfileFail {
  type: UserActionTypes.USER_UPDATE_PROFILE_FAIL;
  payload: string;
}

export interface IUserUpdateProfileReset {
  type: UserActionTypes.USER_UPDATE_PROFILE_RESET;
}

export interface IUserListRequest {
  type: UserActionTypes.USER_LIST_REQUEST;
}
export interface IUserListSuccess {
  type: UserActionTypes.USER_LIST_SUCCESS;
  payload: IUserInfo[];
}
export interface IUserListFail {
  type: UserActionTypes.USER_LIST_FAIL;
  payload: string;
}

export interface IUserListReset {
  type: UserActionTypes.USER_LIST_RESET;
}

export interface IUserDeleteRequest {
  type: UserActionTypes.USER_DELETE_REQUEST;
}
export interface IUserDeleteSuccess {
  type: UserActionTypes.USER_DELETE_SUCCESS;
}
export interface IUserDeleteFail {
  type: UserActionTypes.USER_DELETE_FAIL;
  payload: string;
}

export interface IUserUpdateRequest {
  type: UserActionTypes.USER_UPDATE_REQUEST;
}
export interface IUserUpdateSuccess {
  type: UserActionTypes.USER_UPDATE_SUCCESS;
}
export interface IUserUpdateFail {
  type: UserActionTypes.USER_UPDATE_FAIL;
  payload: string;
}

export interface IUserUpdateReset {
  type: UserActionTypes.USER_UPDATE_RESET;
}

export type UserActions =
  | IUserLoginRequest
  | IUserLoginSuccess
  | IUserLoginFail
  | IUserLogout
  | IUserRegisterRequest
  | IUserRegisterSuccess
  | IUserRegisterFail
  | IUserDetailsRequest
  | IUserDetailsSuccess
  | IUserDetailsFail
  | IUserDetailsReset
  | IUserUpdateProfileRequest
  | IUserUpdateProfileSuccess
  | IUserUpdateProfileFail
  | IUserUpdateProfileReset
  | IUserListRequest
  | IUserListSuccess
  | IUserListFail
  | IUserListReset
  | IUserDeleteRequest
  | IUserDeleteSuccess
  | IUserDeleteFail
  | IUserUpdateRequest
  | IUserUpdateSuccess
  | IUserUpdateFail
  | IUserUpdateReset;

export interface IUserLoginState {
  loading: boolean;
  userInfo: IUserInfo | null;
  error: string;
}

export interface IUserRegisterState {
  loading: boolean;
  userInfo: IUserInfo | null;
  error: string;
}

export interface IUserDetailsState {
  user: IUserInfo | null;
  loading: boolean;
  error: string;
}

export interface IUserUpdateProfileState {
  loading: boolean;
  userInfo: IUserInfo | null;
  error: string;
  success: boolean;
}

export interface IUserListState {
  users: IUserInfo[];
  loading: boolean;
  error: string;
}

export interface IUserDeleteState {
  loading: boolean;
  error: string;
  success: boolean;
}

export interface IUserUpdateState {
  user: IUserInfo | null;
  loading: boolean;
  error: string;
  success: boolean;
}
