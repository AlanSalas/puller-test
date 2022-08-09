import { getProducts, getProductById } from "api/product";

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
  productDetail: {},
  fetchProducts: async () => {
    get().startLoading();
    const res = await getProducts(get().querySearchProduct, get().filterCategory);
    set({ products: res?.data?.products });
    get().finishLoading();
  },
  fetchProductDetail: async (id) => {
    get().startLoading();
    const res = await getProductById(id);
    set({ productDetail: res?.data?.product });
    get().finishLoading();
  },
});

export default productSlice;
