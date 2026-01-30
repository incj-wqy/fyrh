import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function QuickNav() {
  const navItems = [
    { id: 1, icon: 'newspaper', label: '资讯', route: '/news' },
    { id: 2, icon: 'shopping-bag', label: '商城', route: '/shop' },
    { id: 3, icon: 'video', label: '课程', route: '/courses' },
    { id: 4, icon: 'map-marked-alt', label: '旅游', route: '/travel' }
  ];
  
  const handleNavigation = (route: string) => {
    // 可以在这里添加页面加载前的逻辑
    return route;
  };
  
  return (
    <div className="quick-nav flex justify-around my-6">
      {navItems.map(item => (
        <Link 
          key={item.id} 
          to={() => handleNavigation(item.route)} 
          className="quick-nav-item flex flex-col items-center text-[#5c3a21]"
        >
          <motion.div 
            className="quick-nav-icon w-12 h-12 bg-gradient-to-r from-[#d03b3b] to-[#a52a2a] rounded-full flex items-center justify-center text-white text-xl mb-2 shadow-md"
            whileHover={{ scale: 1.1, boxShadow: "0 10px 15px -3px rgba(208, 59, 59, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={`fas fa-${item.icon}`}></i>
          </motion.div>
          <span className="text-sm">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}