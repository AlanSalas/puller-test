const authSlice = (set, get) => ({
  token: null,
  setToken: (token) => set({ token }),
  user: null,
  setUser: (user) => set({ user }),
  loginLoading: false,
  startLoginLoad: () => set({ loginLoading: true }),
  endLoginLoad: () => set({ loginLoading: false }),
});

export default authSlice;
