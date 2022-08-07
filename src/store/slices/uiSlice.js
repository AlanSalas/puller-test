const uiSlice = (set, get) => ({
  loading: false,
  error: null,
  startLoading: () => {
    set({ loading: true });
  },
  finishLoading: () => {
    set({ loading: false });
  },
  notifyError: (error) => {
    set({ error });
  },
});

export default uiSlice;
