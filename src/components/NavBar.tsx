import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [activePage, setActivePage] = useState('home');
  
  // 监听路由变化，更新活动页面
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/') setActivePage('home');
      else if (path === '/news') setActivePage('news');
      else if (path === '/shop') setActivePage('shop');
      else if (path === '/profile') setActivePage('profile');
    };
    
    // 初始调用一次
    handleRouteChange();
    
    // 添加路由变化监听
    window.addEventListener('popstate', handleRouteChange);
    
    // 清理函数
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  return (
    <div className="nav-bar fixed bottom-0 left-0 right-0 bg-white flex justify-around py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50">
      <NavLink to="/" className={`nav-item flex flex-col items-center text-decoration-none ${activePage === 'home' ? 'text-[#d03b3b]' : 'text-[#8c7355]'} transition-colors duration-300`}>
        <i className="fas fa-home text-xl mb-1"></i>
        <span className="text-sm">首页</span>
      </NavLink>
      <NavLink to="/news" className={`nav-item flex flex-col items-center text-decoration-none ${activePage === 'news' ? 'text-[#d03b3b]' : 'text-[#8c7355]'} transition-colors duration-300`}>
        <i className="fas fa-newspaper text-xl mb-1"></i>
        <span className="text-sm">讯息</span>
      </NavLink>
      <NavLink to="/shop" className={`nav-item flex flex-col items-center text-decoration-none ${activePage === 'shop' ? 'text-[#d03b3b]' : 'text-[#8c7355]'} transition-colors duration-300`}>
        <i className="fas fa-shopping-bag text-xl mb-1"></i>
        <span className="text-sm">商城</span>
      </NavLink>
      <NavLink to="/profile" className={`nav-item flex flex-col items-center text-decoration-none ${activePage === 'profile' ? 'text-[#d03b3b]' : 'text-[#8c7355]'} transition-colors duration-300`}>
        <i className="fas fa-user text-xl mb-1"></i>
        <span className="text-sm">我的</span>
      </NavLink>
    </div>
  );
}