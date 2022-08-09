import { getProducts } from "api/product";

const productSlice = (set, get) => ({
  products: [],
  filterCategory: "",
  setFilterCategory: (value) => {
    set({ filterCategory: value });
  },
  querySearchProduct: "",
  setSearch: (value) => {
    set({ querySearchProduct: value });
  },
  fetchProducts: async () => {
    get().startLoading();
    const res = await getProducts(get().querySearchProduct, get().filterCategory);
    set({ products: res?.data?.products });
    get().finishLoading();
  },
});

export default productSlice;
