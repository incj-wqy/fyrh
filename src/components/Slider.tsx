import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides = [
    {
      id: 1,
      title: "绒花制作技艺",
      subtitle: "千年传承的指尖艺术",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=traditional%20Chinese%20velvet%20flower%20craftsmanship%20intangible%20cultural%20heritage&sign=a9305e9f4434ef75549a05e47df4a200",
      route: "/courses"
    },
    {
      id: 2,
      title: "南京绒花艺术",
      subtitle: "传承百年的宫廷工艺",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Nanjing%20velvet%20flower%20art%20traditional%20Chinese%20craft&sign=706cfcac10e3ed71dfc0e1809a33d86a",
      route: "/news?tag=nanjing"
    },
    {
      id: 3,
      title: "绒花文化节",
      subtitle: "体验非遗文化魅力",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=velvet%20flower%20cultural%20festival%20traditional%20Chinese%20art&sign=3e719164af11a6dd13ecd88ce239c74b",
      route: "/news?tag=festival"
    }
  ];
  
  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const handleSlideClick = () => {
    const currentSlideData = slides[currentSlide];
    if (currentSlideData.route) {
      navigate(currentSlideData.route);
    }
  };
  
  return (
    <div className="slider relative h-[200px] rounded-[12px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.1)] my-4 cursor-pointer">
      <div className="slider-content flex h-full transition-transform duration-500">
        {slides.map((slide, index) => (
          <motion.div 
            key={slide.id}
            className={`slide min-w-full h-full bg-cover bg-center flex items-end p-4 text-white ${currentSlide === index ? 'block' : 'hidden'}`}
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${slide.image}')` 
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleSlideClick}
          >
            <div className="slide-content">
              <h3 className="text-xl font-bold">{slide.title}</h3>
              <p className="text-white text-shadow-[1px_1px_3px_rgba(0,0,0,0.7)]">{slide.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="slider-nav absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <motion.div 
            key={index}
            className={`slider-dot w-2.5 h-2.5 rounded-full cursor-pointer ${currentSlide === index ? 'bg-[#ffd700]' : 'bg-white/50'}`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}