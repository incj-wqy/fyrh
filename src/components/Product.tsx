import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductProps {
  image: string;
  title: string;
  price: string;
  id?: string | number;
}

export default function Product({ image, title, price, id = '1' }: ProductProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/shop/product/${id}`);
  };
  
  return (
    <motion.div 
      className="product bg-white rounded-[8px] overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
      onClick={handleClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="product-img h-36 bg-cover bg-center transition-transform duration-500 hover:scale-105" 
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="product-content p-2.5">
        <div className="product-title font-bold mb-1.5 text-[#5c3a21] text-sm line-clamp-2">{title}</div>
        <div className="product-price text-[#d03b3b] font-bold text-base">{price}</div>
      </div>
    </motion.div>
  );
}