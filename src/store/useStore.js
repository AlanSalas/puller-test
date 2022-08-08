import create from "zustand";
import authSlice from "store/slices/authSlice";
import productSlice from "store/slices/productSlice";
import uiSlice from "store/slices/uiSlice";

const useStore = create((set, get) => ({
  ...authSlice(set, get),
  ...productSlice(set, get),
  ...uiSlice(set, get),
}));

export default useStore;
