import { Reducer } from "redux";
import {
  IProductListState,
  ProductActionTypes,
  IProductDetailsState,
  ProductActions,
  IProductDeleteState,
  IProductCreateState,
  IProductUpdateState,
  IProductReviewState,
  IProductTopState,
} from "../types/productTypes";

const intialProductListState: IProductListState = {
  products: [],
  loading: false,
  error: "",
  pages: 0,
  page: 0,
};

export const productListReducer: Reducer<
  IProductListState,
  ProductActions
> = (state = intialProductListState, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };

    case ProductActionTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        products: action.payload?.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };

    case ProductActionTypes.PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialProductDetailsState: IProductDetailsState = {
  product: null,
  loading: false,
  error: "",
};

export const productDetailsReducer: Reducer<
  IProductDetailsState,
  ProductActions
> = (state = initialProductDetailsState, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case ProductActionTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: "",
      };

    case ProductActionTypes.PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ProductActionTypes.PRODUCT_DETAILS_RESET:
      return {
        ...state,
        loading: false,
        error: "",
        product: null,
      };

    default:
      return state;
  }
};

const initialProductDeleteState: IProductDeleteState = {
  loading: false,
  error: "",
  success: false,
};

export const productDeleteReducer: Reducer<
  IProductDeleteState,
  ProductActions
> = (state = initialProductDeleteState, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        success: false,
      };

    case ProductActionTypes.PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: "",
      };

    case ProductActionTypes.PRODUCT_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialProductCreateState: IProductCreateState = {
  loading: false,
  error: "",
  success: false,
  product: null,
};

export const productCreateReducer: Reducer<
  IProductCreateState,
  ProductActions
> = (state = initialProductCreateState, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        success: false,
      };

    case ProductActionTypes.PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: "",
        product: action.payload,
      };

    case ProductActionTypes.PRODUCT_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ProductActionTypes.PRODUCT_CREATE_RESET:
      return initialProductCreateState;

    default:
      return state;
  }
};

const initialProductUpdateState: IProductUpdateState = {
  loading: false,
  error: "",
  success: false,
  product: null,
};

export const productUpdateReducer: Reducer<
  IProductUpdateState,
  ProductActions
> = (state = initialProductUpdateState, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ProductActionTypes.PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      };

    case ProductActionTypes.PRODUCT_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ProductActionTypes.PRODUCT_UPDATE_RESET:
      return {
        loading: false,
        success: false,
        product: null,
        error: "",
      };

    default:
      return state;
  }
};

const initialProductCreateReviewState: IProductReviewState = {
  loading: false,
  error: "",
  success: false,
};

export const productCreateReviewReducer: Reducer<
  IProductReviewState,
  ProductActions
> = (state = initialProductCreateReviewState, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ProductActionTypes.PRODUCT_CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    case ProductActionTypes.PRODUCT_CREATE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ProductActionTypes.PRODUCT_CREATE_REVIEW_RESET:
      return initialProductCreateReviewState;

    default:
      return state;
  }
};

const initialProductTopState: IProductTopState = {
  loading: false,
  error: "",
  products: [],
};

export const productTopRatedReducer: Reducer<
  IProductTopState,
  ProductActions
> = (state = initialProductTopState, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_TOP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ProductActionTypes.PRODUCT_TOP_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case ProductActionTypes.PRODUCT_TOP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
