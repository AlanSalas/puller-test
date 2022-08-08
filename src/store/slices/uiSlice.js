const uiSlice = (set, get) => ({
  loading: false,
  startLoading: () => {
    set({ loading: true });
  },
  finishLoading: () => {
    set({ loading: false });
  },
});

export default uiSlice;
