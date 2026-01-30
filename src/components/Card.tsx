import { useNavigate } from 'react-router-dom';

interface CardProps {
  image: string;
  title: string;
  description: string;
  footerLeft: React.ReactNode;
  footerRight: React.ReactNode;
  onClick?: () => void;
  type?: 'news' | 'travel' | 'course' | 'inheritor';
  id?: string | number;
}

export default function Card({ 
  image, 
  title, 
  description, 
  footerLeft, 
  footerRight,
  onClick,
  type = 'news',
  id = '1'
}: CardProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // 根据类型跳转到不同的详情页
      switch (type) {
        case 'news':
          navigate(`/news/detail/${id}`);
          break;
        case 'travel':
          navigate(`/travel/detail/${id}`);
          break;
        case 'course':
          navigate(`/courses/detail/${id}`);
          break;
        case 'inheritor':
          navigate(`/inheritor/detail/${id}`);
          break;
        default:
          navigate(`/news/detail/${id}`);
      }
    }
  };
  
  return (
    <div 
      className="card bg-[#fffaf0] rounded-[8px] overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer" 
      onClick={handleClick}
    >
      <div 
        className="card-img h-36 bg-cover bg-center transition-transform duration-500 hover:scale-105" 
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="card-content p-3">
        <div className="card-title font-bold mb-2 text-[#5c3a21] text-base line-clamp-2">{title}</div>
        <div className="card-desc text-sm text-[#8c7355] mb-2 line-clamp-2">{description}</div>
        <div className="card-footer flex justify-between text-xs text-[#a52a2a]">
          <span>{footerLeft}</span>
          <span>{footerRight}</span>
        </div>
      </div>
    </div>
  );
}