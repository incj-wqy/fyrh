import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    // 从标签文本中提取标签名（去掉#符号）
    const tagName = text.replace('#', '');
    // 跳转到带有标签参数的资讯页面
    navigate(`/news?tag=${encodeURIComponent(tagName)}`);
  };
  
  return (
    <motion.div 
      className="tag bg-[#f0e6d9] px-3 py-1.5 rounded-[20px] text-sm text-[#a52a2a] cursor-pointer"
      onClick={handleClick}
      whileHover={{ 
        backgroundColor: "#d03b3b", 
        color: "white",
        scale: 1.05
      }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.div>
  );
}