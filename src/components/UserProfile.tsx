import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/profile/edit');
  };
  
  return (
    <div 
      className="user-profile flex items-center p-5 bg-gradient-to-r from-[#d03b3b] to-[#a52a2a] rounded-[12px] text-white mb-5 shadow-md transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
      onClick={handleClick}
    >
      <div className="user-avatar w-16 h-16 rounded-full bg-[#ffd700] flex items-center justify-center text-2xl border-2 border-white mr-3">
        <i className="fas fa-user"></i>
      </div>
      <div className="user-info flex-1">
        <div className="user-name text-lg font-bold mb-1">绒花爱好者</div>
        <div className="user-level text-sm opacity-90">VIP会员</div>
      </div>
      <i className="fas fa-chevron-right text-white"></i>
    </div>
  );
}