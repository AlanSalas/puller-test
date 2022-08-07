import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import authSlice from "store/slices/authSlice";
import productSlice from "store/slices/productSlice";
import uiSlice from "store/slices/uiSlice";

const useStore = create((set, get) => ({
  ...authSlice(set, get),
  ...productSlice(set, get),
  ...uiSlice(set, get),
}));

mountStoreDevtool("Store", useStore);

export default useStore;
