import { getCategories } from "api/category";

const categorySlice = (set, get) => ({
  categories: [],
  fetchCategories: async () => {
    get().startLoading();
    const res = await getCategories();
    set({ categories: res?.data?.categories });
    get().finishLoading();
  },
});

export default categorySlice;
