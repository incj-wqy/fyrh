import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { Bell, Lock, Palette, User, LogOut, ChevronRight, Shield, MessageSquare, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { useTheme } from '../hooks/useTheme';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(theme === 'dark');
  
  // 切换通知设置
  const toggleNotifications = () => {
    setNotifications(!notifications);
    toast(notifications ? '已关闭通知' : '已开启通知');
  };
  
  // 切换深色模式
  const toggleDarkMode = () => {
    toggleTheme();
    setDarkMode(!darkMode);
    toast(darkMode ? '已切换至浅色模式' : '已切换至深色模式');
  };
  
  // 导航到其他设置页面
  const navigateTo = (route: string) => {
    window.location.href = route;
  };
  
  // 退出登录
  const logout = () => {
    toast('已退出登录');
    // 这里可以添加实际的退出登录逻辑
  };

  return (
    <div className="container max-w-[800px] mx-auto px-4 pb-20">
      <Header title="非遗绒花 - 设置" />
      
      {/* 账户与安全 */}
      <motion.div 
        className="bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-base font-bold text-[#8c7355] px-5 py-3 border-b border-[#f0e6d9]">
          账户与安全
        </h3>
        
        <div className="divide-y divide-[#f0e6d9]">
          <div 
            className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-[#fffaf0] transition-colors"
            onClick={() => navigateTo('/profile/edit')}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#d03b3b]/10 rounded-full flex items-center justify-center mr-3">
                <User className="w-4 h-4 text-[#d03b3b]" />
              </div>
              <span className="text-[#5c3a21]">个人信息</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#8c7355]" />
          </div>
          
          <div 
            className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-[#fffaf0] transition-colors"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#d03b3b]/10 rounded-full flex items-center justify-center mr-3">
                <Lock className="w-4 h-4 text-[#d03b3b]" />
              </div>
              <span className="text-[#5c3a21]">修改密码</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#8c7355]" />
          </div>
          
          <div 
            className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-[#fffaf0] transition-colors"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#d03b3b]/10 rounded-full flex items-center justify-center mr-3">
                <Shield className="w-4 h-4 text-[#d03b3b]" />
              </div>
              <span className="text-[#5c3a21]">账户安全</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#8c7355]" />
          </div>
        </div>
      </motion.div>
      
      {/* 通知设置 */}
      <motion.div 
        className="bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-base font-bold text-[#8c7355] px-5 py-3 border-b border-[#f0e6d9]">
          通知设置
        </h3>
        
        <div className="divide-y divide-[#f0e6d9]">
          <div className="flex justify-between items-center px-5 py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#d03b3b]/10 rounded-full flex items-center justify-center mr-3">
                <Bell className="w-4 h-4 text-[#d03b3b]" />
              </div>
              <span className="text-[#5c3a21]">接收通知</span>
            </div>
            <div 
              className={`w-10 h-5 rounded-full transition-colors duration-300 ${
                notifications ? 'bg-[#d03b3b]' : 'bg-[#e5e5e5]'
              } flex items-center px-0.5`}
              onClick={toggleNotifications}
            >
              <div 
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  notifications ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </div>
          </div>
          
          <div 
            className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-[#fffaf0] transition-colors"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#d03b3b]/10 rounded-full flex items-center justify-center mr-3">
                <MessageSquare className="w-4 h-4 text-[#d03b3b]" />
              </div>
              <span className="text-[#5c3a21]">消息通知</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#8c7355]" />
          </div>
          
          <div 
            className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-[#fffaf0] transition-colors"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#d03b3b]/10 rounded-full flex items-center justify-center mr-3">
                <FileText className="w-4 h-4 text-[#d03b3b]" />
              </div>
              <span className="text-[#5c3a21]">活动通知</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#8c7355]" />
          </div>
        </div>
      </motion.div>
      
      {/* 外观设置 */}
      <motion.div 
        className="bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-base font-bold text-[#8c7355] px-5 py-3 border-b border-[#f0e6d9]">
          外观设置
        </h3>
        
        <div>
          <div className="flex justify-between items-center px-5 py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#d03b3b]/10 rounded-full flex items-center justify-center mr-3">
                <Palette className="w-4 h-4 text-[#d03b3b]" />
              </div>
              <span className="text-[#5c3a21]">深色模式</span>
            </div>
            <div 
              className={`w-10 h-5 rounded-full transition-colors duration-300 ${
                darkMode ? 'bg-[#d03b3b]' : 'bg-[#e5e5e5]'
              } flex items-center px-0.5`}
              onClick={toggleDarkMode}
            >
              <div 
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  darkMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* 退出登录 */}
      <motion.button 
        onClick={logout}
        className="w-full py-3 bg-white text-[#d03b3b] font-medium rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-[#fffaf0] transition-colors"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center">
          <LogOut className="w-4 h-4 mr-2" />
          <span>退出登录</span>
        </div>
      </motion.button>
    </div>
  );
}