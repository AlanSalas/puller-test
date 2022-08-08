const routes = {
  // Auth
  login: "/login",
  signup: "/signup",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password/:token",
  activation: "/activation/:token",
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
};

export default routes;
