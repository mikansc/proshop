import Axios from "axios";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProducts = () => async (dispach) => {
  try {
    dispach({ type: PRODUCT_LIST_REQUEST });
    const { data } = await Axios.get("/api/products");
    dispach({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispach({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispach) => {
  try {
    dispach({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await Axios.get(`/api/products/${id}`);
    dispach({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispach({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
