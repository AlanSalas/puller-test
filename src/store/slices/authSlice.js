const authSlice = (set, get) => ({
  token: null,
  setToken: (token) => set({ token }),
  user: null,
  setUser: (user) => set({ user }),
});

export default authSlice;
