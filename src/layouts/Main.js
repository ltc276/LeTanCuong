import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "../pages/product/ProductDetail";
import ProfileMain from "../pages/profile/ProfileMain";
import ProfileSetting from "../pages/profile/ProfileSetting";
import ProfileAddress from "../pages/profile/ProfileAddress";
import ProfileWishlist from "../pages/profile/ProfileWishlist";
import ProfileSeller from "../pages/profile/ProfileSeller";
import ProfileOrder from "../pages/profile/ProfileOrder";
import ShoppingCart from "../pages/Cart/Cart";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";
import Content from "../pages/Content/Content";
import ListingGrid from "../pages/category/Grid";
import ListingList from "../pages/category/Large";
import AllCategory from "../pages/category/Category";


const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />

      <Route path="/profile-main" element={<ProfileMain />} />
      <Route path="/profile-order" element={<ProfileOrder />} />
      <Route path="/profile-setting" element={<ProfileSetting />} />
      <Route path="/profile-address" element={<ProfileAddress />} />
      <Route path="/profile-wishlist" element={<ProfileWishlist />} />
      <Route path="/profile-seller" element={<ProfileSeller />} />

      <Route path="/shopping-cart" element={<ShoppingCart />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/content" element={<Content />} />

      <Route path="/category" element={<AllCategory />} />
      <Route path="/listing-grid" element={<ListingGrid />} />
      <Route path="/listing-large" element={<ListingList />} />

    </Routes>
  </main>
);
export default Main;
