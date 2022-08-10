const routes = {
  // Auth
  login: "/login",
  signup: "/signup",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  activation: "/activation",
  // Producst
  products: "/",
  productDetail: "/product/:id",
  productCreate: "/product/create",
  productEdit: "/product/edit/:id",
  // Categories
  categories: "/categories",
  categoryCreate: "/category/create",
  // Profile
  profile: "/profile",
  profileEdit: "/profile/edit",
  error404: "/error404",
};

export default routes;
