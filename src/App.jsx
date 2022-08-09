import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "layout";
import ProtectedRoute from "components/Routes/ProtectedRoute";
import Login from "pages/Login";
import Signup from "pages/SignUp";
import Activation from "pages/Activation";
import ForgotPassword from "pages/ForgotPassword";
import ResetPassword from "pages/ResetPassword";
import Products from "pages/Products";
import ProductDetail from "pages/ProductDetail";
import CreateEditProduct from "pages/CreateEditProduct";
import Categories from "pages/Categories";
import CreateCategory from "pages/CreateCategory";
import Profile from "pages/Profile";
import ProfileEdit from "pages/ProfileEdit";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*Protected Routes*/}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Products />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="product/create" element={<CreateEditProduct />} />
            <Route path="product/edit/:id" element={<CreateEditProduct />} />
            <Route path="categories" element={<Categories />} />
            <Route path="category/create" element={<CreateCategory />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/edit" element={<ProfileEdit />} />
          </Route>
          {/* Public Routes */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="activation/:token" element={<Activation />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
