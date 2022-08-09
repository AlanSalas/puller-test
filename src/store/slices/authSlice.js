const authSlice = (set, get) => ({
  token: localStorage.getItem("token") || null,
  setToken: (token) => set({ token }),
  user: JSON.parse(localStorage.getItem("user")) || null,
  setUser: (user) => set({ user }),
  logOut: () => {
    set({ token: null });
    set({ user: null });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
});

export default authSlice;
