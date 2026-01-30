import { useNavigate } from 'react-router-dom';

interface CategoryProps {
  icon: string;
  label: string;
  type?: 'news' | 'shop';
  id?: string;
}

export default function Category({ icon, label, type = 'news', id = '' }: CategoryProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (type === 'news') {
      // 资讯分类
      switch (icon) {
        case 'fire':
          navigate('/news?category=hot');
          break;
        case 'newspaper':
          navigate('/news?category=news');
          break;
        case 'user-tie':
          navigate('/news?category=inheritor');
          break;
        case 'video':
          navigate('/news?category=video');
          break;
        default:
          navigate('/news');
      }
    } else if (type === 'shop') {
      // 商城分类
      switch (icon) {
        case 'tshirt':
          navigate('/shop?category=accessories');
          break;
        case 'gift':
          navigate('/shop?category=gift');
          break;
        case 'tools':
          navigate('/shop?category=materials');
          break;
        case 'book':
          navigate('/shop?category=tutorial');
          break;
        default:
          navigate('/shop');
      }
    }
  };
  
  return (
    <div 
      className="category text-center p-3 bg-[#fffaf0] rounded-[8px] transition-all duration-300 hover:bg-[#f0e6d9] cursor-pointer"
      onClick={handleClick}
    >
      <div className="category-icon text-[#d03b3b] text-xl mb-1">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div className="text-xs">{label}</div>
    </div>
  );
}