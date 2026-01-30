import { useNavigate } from 'react-router-dom';

interface ProfileCardProps {
  icon?: string;
  title: string;
  description: string;
  showArrow: boolean;
  id?: string;
}

export default function ProfileCard({ 
  icon, 
  title, 
  description, 
  showArrow,
  id = ''
}: ProfileCardProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (!showArrow) return;
    
    // 根据标题导航到不同页面
    switch (title) {
      case '我的订单':
        navigate('/profile/orders');
        break;
      case '我的收藏':
        navigate('/profile/collections');
        break;
      case '我的课程':
        navigate('/profile/courses');
        break;
      case '收货地址':
        navigate('/profile/address');
        break;
      case '客服中心':
        navigate('/profile/customer-service');
        break;
      case '设置':
        navigate('/profile/settings');
        break;
      default:
        navigate('/profile');
    }
  };
  
  return (
    <div 
      className={`card bg-[#fffaf0] rounded-[8px] overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.05)] flex items-center p-3 ${showArrow ? 'cursor-pointer hover:bg-[#f0e6d9] transition-colors duration-300' : ''}`}
      onClick={showArrow ? handleClick : undefined}
    >
      <div className="card-content flex-1">
        <div className="card-title font-bold text-[#5c3a21] text-base flex items-center">
          {icon && <i className={`fas fa-${icon} mr-2 text-[#d03b3b]`}></i>}
          {title}
        </div>
        <div className="card-desc text-sm text-[#8c7355]">{description}</div>
      </div>
      {showArrow && <i className="fas fa-chevron-right text-[#8c7355] text-xs"></i>}
    </div>
  );
}