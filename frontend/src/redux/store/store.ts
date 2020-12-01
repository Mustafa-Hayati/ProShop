import {
  applyMiddleware,
  createStore,
  Store,
  Middleware,
} from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/rootReducer";
import {
  IProductDetailsState,
  IProductListState,
} from "../types/productTypes";
import { ICartAddress, ICartState } from "../types/cartTypes";
import {
  IUserDetailsState,
  IUserLoginState,
  IUserRegisterState,
  IUserUpdateProfileState,
} from "../types/userTypes";
import {
  IOrderCreateState,
  IOrderDetailsState,
  IOrderPayState,
} from "../types/orderTypes";

export interface IApplicationState {
  productList: IProductListState;
  productDetails: IProductDetailsState;
  cart: ICartState;
  userLogin: IUserLoginState;
  userRegister: IUserRegisterState;
  userDetails: IUserDetailsState;
  userUpdateProfile: IUserUpdateProfileState;
  orderCreate: IOrderCreateState;
  orderDetails: IOrderDetailsState;
  orderPay: IOrderPayState;
}

const cartItems = localStorage.getItem("cartItems");
const cartItemsFromStorage = cartItems ? JSON.parse(cartItems) : [];

const shippingAddress = localStorage.getItem("shippingAddress");
const shippingAddressFromStorage: ICartAddress = shippingAddress
  ? JSON.parse(shippingAddress)
  : { address: "", country: "", city: "", postalCode: "" };

const paymentMethod = localStorage.getItem("paymentMethod");
const paymentMethodFromStorage = paymentMethod
  ? JSON.parse(paymentMethod)
  : "";

const userInfo = localStorage.getItem("userInfo");
const userInfoFromStorage = userInfo
  ? { loading: false, error: "", userInfo: JSON.parse(userInfo) }
  : { loading: false, error: "", userInfo: null };

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
  },
  userLogin: userInfoFromStorage,
};

const middlewares: Middleware[] = [thunk];

const store: Store<IApplicationState> = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
