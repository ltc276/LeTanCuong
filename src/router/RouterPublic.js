import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../layouts/side/Home";
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
const RouterPublic=[
    {path: '/', component:Home},
    {path: '/product-detail/:id', component:ProductDetail},
    {path: '/profile-main', component:ProfileMain},
    {path: '/profile-order', component:ProfileOrder},
    {path: '/profile-setting', component:ProfileSetting},
    {path: '/profile-address', component:ProfileAddress},
    {path: '/profile-wishlist', component:ProfileWishlist},
    {path: '/profile-seller', component:ProfileSeller},
    {path: '/shopping-cart', component:ShoppingCart},
    {path: '/login', component:Login},
    {path: '/register', component:Register},
    {path: '/content', component:Content},
    {path: '/listing-grid', component:ListingGrid},
    {path: '/category', component:AllCategory},
    {path: '/listing-large', component:ListingList},


];
export default RouterPublic;