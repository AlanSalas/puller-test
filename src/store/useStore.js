import create from "zustand";
import authSlice from "store/slices/authSlice";
import productSlice from "store/slices/productSlice";
import categorySlice from "store/slices/categorySlice";
import uiSlice from "store/slices/uiSlice";

const useStore = create((set, get) => ({
  ...authSlice(set, get),
  ...productSlice(set, get),
  ...categorySlice(set, get),
  ...uiSlice(set, get),
}));

export default useStore;
