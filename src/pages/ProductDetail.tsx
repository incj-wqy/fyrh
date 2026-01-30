import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 这里可以根据id从API获取实际数据，这里使用模拟数据
  const productDetail = {
    id: id,
    title: "凤凰于飞绒花发簪",
    price: "¥268",
    originalPrice: "¥328",
    discount: "8.2折",
    sales: 1256,
    rating: 4.9,
    description: "凤凰于飞绒花发簪采用传统绒花制作技艺，选用优质蚕丝和铜线，纯手工精心制作而成。凤凰造型栩栩如生，寓意吉祥如意，是传统工艺与现代审美的完美结合。",
    features: [
      "传统手工制作",
      "优质蚕丝材料",
      "精美凤凰造型",
      "可调节发簪长度",
      "送礼佳品"
    ],
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=phoenix%20velvet%20flower%20hairpin%20traditional%20chinese%20hair%20ornament&sign=a8a85ec6a38133b24e3deec1d68b5661",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=phoenix%20velvet%20flower%20hairpin%20closeup%20details&sign=39349bad8e7853772f219ef6056dfade",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=phoenix%20velvet%20flower%20hairpin%20wearing%20effect&sign=86ba3f2be8a024763f8da2ccb7a9b8f8",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=phoenix%20velvet%20flower%20hairpin%20gift%20packaging&sign=b9fcfc9ce4a64384d49004f0d96dbeff"
    ],
    specifications: {
      "材质": "优质蚕丝、铜线、合金",
      "尺寸": "长约18cm，宽约8cm",
      "重量": "约25g",
      "包装": "精美礼盒包装",
      "产地": "中国南京"
    },
    craftsman: "赵树宪（国家级非物质文化遗产传承人）"
  };
  
  // 切换到上一张图片
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productDetail.images.length - 1 : prev - 1
    );
  };
  
  // 切换到下一张图片
  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === productDetail.images.length - 1 ? 0 : prev + 1
    );
  };
  
  // 添加到购物车
  const addToCart = () => {
    toast('已成功添加到购物车');
  };
  
  // 立即购买
  const buyNow = () => {
    // 跳转到订单确认页面，带上商品信息
    window.location.href = `/profile/orders?action=buyNow&itemId=${productDetail.id}&itemType=product&price=${productDetail.price}`;
  };

  return (
    <div className="container max-w-[800px] mx-auto px-4 pb-20">
      <Header title="非遗绒花 - 商品详情" />
      
      <motion.div 
        className="bg-white rounded-[12px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 商品图片轮播 */}
        <div className="relative mb-6">
          <div className="w-full h-80 bg-gray-100 rounded-[8px] overflow-hidden">
            <img 
              src={productDetail.images[currentImageIndex]} 
              alt={productDetail.title} 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* 轮播控制按钮 */}
          <button 
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-[#5c3a21]" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-[#5c3a21]" />
          </button>
          
          {/* 图片指示器 */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {productDetail.images.map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? 'bg-[#d03b3b]' : 'bg-white/60'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* 商品基本信息 */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-[#5c3a21] mb-2">{productDetail.title}</h1>
          
          <div className="flex items-baseline mb-4">
            <span className="text-2xl font-bold text-[#d03b3b] mr-2">{productDetail.price}</span>
            <span className="text-sm line-through text-[#8c7355] mr-2">{productDetail.originalPrice}</span>
            <span className="text-xs bg-[#d03b3b]/10 text-[#d03b3b] px-2 py-0.5 rounded-full">{productDetail.discount}</span>
          </div>
          
          <div className="flex items-center text-sm text-[#8c7355] mb-4">
            <span className="mr-4">销量 {productDetail.sales}</span>
            <span>评分 {productDetail.rating}</span>
          </div>
          
          <div className="flex items-center text-sm text-[#8c7355] mb-4">
            <span className="mr-2">工艺师：</span>
            <span className="text-[#5c3a21]">{productDetail.craftsman}</span>
          </div>
        </div>
        
        {/* 商品描述 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">商品描述</h3>
          <p className="text-[#5c3a21] leading-relaxed">{productDetail.description}</p>
        </div>
        
        {/* 商品特点 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">商品特点</h3>
          <div className="flex flex-wrap gap-2">
            {productDetail.features.map((feature, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 bg-[#f0e6d9] text-[#a52a2a] text-sm rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        {/* 规格参数 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">规格参数</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(productDetail.specifications).map(([key, value], index) => (
              <div key={index} className="flex">
                <span className="text-[#8c7355] w-16">{key}：</span>
                <span className="text-[#5c3a21]">{value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* 工艺师介绍 */}
        <div className="mt-8 pt-6 border-t-[1px] border-[#f0e6d9]">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">工艺师介绍</h3>
          <div className="flex items-start">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=national%20intangible%20cultural%20heritage%20inheritor%20velvet%20flower%20craftsman&sign=ab4fb0ec30ed8138ca9b7d491f772a9c" 
              alt={productDetail.craftsman} 
              className="w-20 h-20 object-cover rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold text-[#5c3a21]">{productDetail.craftsman}</h4>
              <p className="text-sm text-[#8c7355] mt-1">赵树宪，南京绒花代表性传承人，从事绒花制作50余年，被誉为"绒花泰斗"。其作品工艺精湛，曾多次在国内外展览中获奖。</p>
              <button className="text-sm text-[#d03b3b] mt-2">查看详情 →</button>
            </div>
          </div>
        </div>
        
         {/* 相关推荐 */}
         <div className="mt-8 pt-6 border-t-[1px] border-[#f0e6d9]">
           <h3 className="text-lg font-bold text-[#5c3a21] mb-4">相关推荐</h3>
           <div className="grid grid-cols-2 gap-4">
             <motion.div 
               className="bg-[#fffaf0] rounded-[8px] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
               whileHover={{ y: -5 }}
               onClick={() => window.location.href = "/shop/product/2"}
             >
               <img 
                 src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=peony%20flower%20velvet%20brooch%20traditional%20chinese%20accessory&sign=18db242f2aae3d742816986081deb8f2" 
                 alt="相关商品" 
                 className="w-full h-32 object-cover"
               />
               <div className="p-2">
                 <h4 className="font-medium text-[#5c3a21] text-sm line-clamp-2">牡丹花开绒花胸针</h4>
                 <p className="text-[#d03b3b] font-bold text-sm mt-1">¥198</p>
               </div>
             </motion.div>
             <motion.div 
               className="bg-[#fffaf0] rounded-[8px] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
               whileHover={{ y: -5 }}
               onClick={() => window.location.href = "/shop/product/4"}
             >
               <img 
                 src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=plum%20blossom%20velvet%20flower%20hairpin%20traditional%20chinese%20style&sign=55dcd21f7126981a955351fd63c76b74" 
                 alt="相关商品" 
                 className="w-full h-32 object-cover"
               />
               <div className="p-2">
                 <h4 className="font-medium text-[#5c3a21] text-sm line-clamp-2">梅花三弄绒花发钗</h4>
                 <p className="text-[#d03b3b] font-bold text-sm mt-1">¥228</p>
               </div>
             </motion.div>
           </div>
        </div>
      </motion.div>
      
      {/* 底部操作栏 */}
      <motion.div 
        className="fixed bottom-20 left-0 right-0 flex justify-between items-center bg-white py-3 px-6 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <div className="flex space-x-8">
          <button className="flex flex-col items-center text-[#8c7355] hover:text-[#d03b3b] transition-colors">
            <Heart className="w-6 h-6 mb-1" />
            <span className="text-xs">收藏</span>
          </button>
          <button className="flex flex-col items-center text-[#8c7355] hover:text-[#d03b3b] transition-colors">
            <Share2 className="w-6 h-6 mb-1" />
            <span className="text-xs">分享</span>
          </button>
        </div>
        
        <div className="flex space-x-3">
          <button 
            onClick={addToCart}
            className="px-6 py-2.5 bg-[#a52a2a] text-white rounded-full font-medium hover:bg-[#d03b3b] transition-colors"
          >
            加入购物车
          </button>
          <button 
            onClick={buyNow}
            className="px-6 py-2.5 bg-[#d03b3b] text-white rounded-full font-medium hover:bg-[#a52a2a] transition-colors"
          >
            立即购买
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// 移除重复的React导入和自定义useState函数，这些应该在组件顶部导入