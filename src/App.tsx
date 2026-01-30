import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Shop from "@/pages/Shop";
import Profile from "@/pages/Profile";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import { Empty } from "@/components/Empty";

// 详情页组件
import NewsDetail from "@/pages/NewsDetail";
import TravelDetail from "@/pages/TravelDetail";
import CourseDetail from "@/pages/CourseDetail";
import InheritorDetail from "@/pages/InheritorDetail";
import ProductDetail from "@/pages/ProductDetail";

// 个人中心子页面组件
import Orders from "@/pages/Orders";
import Collections from "@/pages/Collections";
import UserCourses from "@/pages/UserCourses";
import Address from "@/pages/Address";
import Settings from "@/pages/Settings";

// 创建课程和旅游列表页面组件
import { CourseList, TravelList, ProductsList, CustomerService, UserProfileEdit } from './pages/OtherPages';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <div className="min-h-screen bg-[#f9f3ea] text-[#5c3a21] pb-20">
        <Routes>
          {/* 主要页面 */}
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* 详情页路由 */}
          <Route path="/news/detail/:id" element={<NewsDetail />} />
          <Route path="/travel/detail/:id" element={<TravelDetail />} />
          <Route path="/courses/detail/:id" element={<CourseDetail />} />
          <Route path="/inheritor/detail/:id" element={<InheritorDetail />} />
          <Route path="/shop/product/:id" element={<ProductDetail />} />
          
          {/* 个人中心子页面 */}
          <Route path="/profile/edit" element={<UserProfileEdit />} />
          <Route path="/profile/orders" element={<Orders />} />
          <Route path="/profile/collections" element={<Collections />} />
          <Route path="/profile/courses" element={<UserCourses />} />
          <Route path="/profile/address" element={<Address />} />
          <Route path="/profile/customer-service" element={<CustomerService />} />
          <Route path="/profile/settings" element={<Settings />} />
          
          {/* 其他页面 */}
          <Route path="/courses" element={<CourseList />} />
          <Route path="/travel" element={<TravelList />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/details/:id" element={<Empty />} />
        </Routes>
        <NavBar />
      </div></AuthContext.Provider>
  );
}
