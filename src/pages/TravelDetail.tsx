import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Star, Clock, Camera, ShoppingBag, Calendar as CalendarIcon } from 'lucide-react';
import { toast } from 'sonner';

export default function TravelDetail() {
  const { id } = useParams();
  
  // 这里可以根据id从API获取实际数据，这里使用模拟数据
  const travelDetail = {
    id: id,
    title: "南京绒花制作体验一日游",
    price: "¥298/人",
    originalPrice: "¥368/人",
    discount: "8.1折",
    participants: 1253,
    rating: 4.9,
    duration: "约8小时",
    location: "中国·南京",
    description: "南京绒花制作体验一日游带您走进绒花的世界，亲身体验这项有着千年历史的非物质文化遗产。在专业老师的指导下，您将学习绒花的基本制作技艺，亲手制作属于自己的绒花作品。行程还包括参观绒花博物馆，了解绒花的历史文化背景。",
    highlights: [
      "参观南京绒花博物馆，了解绒花历史文化",
      "由国家级非遗传承人亲自指导制作绒花",
      "学习绒花的基本制作技艺，亲手完成作品",
      "品尝南京特色美食，感受地道南京文化",
      "全程专业讲解，深入了解非遗文化内涵"
    ],
    itinerary: [
      { 
        time: "09:00", 
        activity: "集合出发", 
        location: "南京市中心指定地点"
      },
      { 
        time: "09:30-11:00", 
        activity: "参观南京绒花博物馆", 
        location: "南京市秦淮区绒花巷"
      },
      { 
        time: "11:30-13:00", 
        activity: "午餐（南京特色美食）", 
        location: "老门东特色餐厅"
      },
      { 
        time: "13:30-16:30", 
        activity: "绒花制作体验课程", 
        location: "南京非遗工坊",
        description: "由国家级非遗传承人指导，学习绒花基本制作技艺，完成个人作品"
      },
      { 
        time: "16:30-17:00", 
        activity: "作品点评与合影", 
        location: "南京非遗工坊"
      },
      { 
        time: "17:00", 
        activity: "行程结束，返回市区", 
        location: "南京市中心"
      }
    ],
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=velvet%20flower%20workshop%20experience%20Nanjing%20traditional%20craft&sign=41bbfcf54064e60876fc9d9a8ca5e64d",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=velvet%20flower%20making%20class%20traditional%20workshop&sign=88e0165df053acca69362f80232e3c88",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Nanjing%20traditional%20velvet%20flower%20museum%20exhibition&sign=3c123f863280f4db7bff9cc65dff5941",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=traditional%20Chinese%20food%20Nanjing%20local%20cuisine&sign=c36a442faf35b54d1200b2c9e83e3291"
    ],
    includes: [
      "全程专业导游服务",
      "南京绒花博物馆门票",
      "绒花制作体验课程及材料",
      "午餐（南京特色美食）",
      "旅游意外险"
    ],
    excludes: [
      "往返集合地点的交通费用",
      "个人消费及其他未提及的费用",
      "因不可抗力因素产生的额外费用"
    ],
    notes: "请提前5-10分钟到达集合地点，建议穿着舒适的衣物和鞋子。制作过程中请听从老师指导，注意安全。"
  };
  
  // 立即预订
  const bookNow = () => {
    // 跳转到订单确认页面，带上旅游产品信息
    window.location.href = `/profile/orders?action=buyNow&itemId=${travelDetail.id}&itemType=travel&price=${travelDetail.price}`;
  };

  return (
    <div className="container max-w-[800px] mx-auto px-4 pb-20">
      <Header title="非遗绒花 - 旅游详情" />
      
      <motion.div 
        className="bg-white rounded-[12px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 旅游封面图 */}
        <div className="relative mb-6">
          <div className="w-full h-64 bg-gray-100 rounded-[8px] overflow-hidden">
            <img 
              src={travelDetail.images[0]} 
              alt={travelDetail.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* 旅游基本信息 */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-[#5c3a21] mb-2">{travelDetail.title}</h1>
          
          <div className="flex items-baseline mb-4">
            <span className="text-2xl font-bold text-[#d03b3b] mr-2">{travelDetail.price}</span>
            <span className="text-sm line-through text-[#8c7355] mr-2">{travelDetail.originalPrice}</span>
            <span className="text-xs bg-[#d03b3b]/10 text-[#d03b3b] px-2 py-0.5 rounded-full">{travelDetail.discount}</span>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#8c7355] mb-4">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{travelDetail.participants}人体验</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-500" />
              <span>评分 {travelDetail.rating}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{travelDetail.duration}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{travelDetail.location}</span>
            </div>
          </div>
        </div>
        
        {/* 行程亮点 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">行程亮点</h3>
          <ul className="space-y-2">
            {travelDetail.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-5 h-5 rounded-full bg-[#d03b3b]/10 text-[#d03b3b] text-xs flex items-center justify-center mr-2 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-[#5c3a21]">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* 行程安排 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">行程安排</h3>
          <div className="space-y-4">
            {travelDetail.itinerary.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-[#f0e6d9]">
                {/* 时间点标记 */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#d03b3b]"></div>
                
                {/* 行程内容 */}
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-[#5c3a21]">{item.time}</h4>
                    <span className="text-xs text-[#8c7355] flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {item.location}
                    </span>
                  </div>
                  <p className="font-medium text-[#5c3a21]">{item.activity}</p>
                  {item.description && (
                    <p className="text-sm text-[#8c7355] mt-1">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 费用包含 */}
        <div className="mb-6 pt-6 border-t-[1px] border-[#f0e6d9]">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">费用包含</h3>
          <ul className="space-y-2">
            {travelDetail.includes.map((include, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-5 h-5 rounded-full bg-[#d03b3b]/10 text-[#d03b3b] text-xs flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </span>
                <span className="text-[#5c3a21]">{include}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* 费用不包含 */}
        <div className="mb-6 pt-6 border-t-[1px] border-[#f0e6d9]">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">费用不包含</h3>
          <ul className="space-y-2">
            {travelDetail.excludes.map((exclude, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-5 h-5 rounded-full bg-[#8c7355]/10 text-[#8c7355] text-xs flex items-center justify-center mr-2 mt-0.5">
                  ✗
                </span>
                <span className="text-[#5c3a21]">{exclude}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* 注意事项 */}
        <div className="mb-6 pt-6 border-t-[1px] border-[#f0e6d9]">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">注意事项</h3>
          <p className="text-[#5c3a21]">{travelDetail.notes}</p>
        </div>
        
        {/* 行程图片 */}
        <div className="mb-6 pt-6 border-t-[1px] border-[#f0e6d9]">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">行程照片</h3>
          <div className="grid grid-cols-2 gap-2">
            {travelDetail.images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`行程照片 ${index + 1}`} 
                className="w-full h-32 object-cover rounded-[6px]"
              />
            ))}
          </div>
        </div>
        
         {/* 相关推荐 */}
         <div className="mt-8 pt-6 border-t-[1px] border-[#f0e6d9]">
           <h3 className="text-lg font-bold text-[#5c3a21] mb-4">相关旅游</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <motion.div 
               className="bg-[#fffaf0] rounded-[8px] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
               whileHover={{ y: -5 }}
               onClick={() => window.location.href = "/travel/detail/2"}
             >
               <img 
                 src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Yangzhou%20velvet%20flower%20cultural%20tour%20traditional%20craftsman&sign=1c38c14da01a0b2e19cf724c763d16c2" 
                 alt="相关旅游" 
                 className="w-full h-32 object-cover"
               />
               <div className="p-2">
                 <h4 className="font-medium text-[#5c3a21] text-sm line-clamp-2">扬州绒花文化深度之旅</h4>
                 <div className="flex items-center justify-between mt-1">
                   <p className="text-[#d03b3b] font-bold text-sm">¥598/人</p>
                   <span className="text-xs text-[#8c7355]">约2天</span>
                 </div>
               </div>
             </motion.div>
             <motion.div 
               className="bg-[#fffaf0] rounded-[8px] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
               whileHover={{ y: -5 }}
               onClick={() => window.location.href = "/travel/detail/3"}
             >
               <img 
                 src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=traditional%20Chinese%20folk%20art%20cultural%20tour%20Nanjing%20Yangzhou&sign=b268dd11d38dd65e2e773a0f9a5d04ac" 
                 alt="相关旅游" 
                 className="w-full h-32 object-cover"
               />
               <div className="p-2">
                 <h4 className="font-medium text-[#5c3a21] text-sm line-clamp-2">江南非遗文化七日游</h4>
                 <div className="flex items-center justify-between mt-1">
                   <p className="text-[#d03b3b] font-bold text-sm">¥2580/人</p>
                   <span className="text-xs text-[#8c7355]">约7天</span>
                 </div>
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
            <CalendarIcon className="w-6 h-6 mb-1" />
            <span className="text-xs">排期</span>
          </button>
          <button className="flex flex-col items-center text-[#8c7355] hover:text-[#d03b3b] transition-colors">
            <Camera className="w-6 h-6 mb-1" />
            <span className="text-xs">相册</span>
          </button>
        </div>
        
        <button 
          onClick={bookNow}
          className="px-8 py-2.5 bg-[#d03b3b] text-white rounded-full font-medium hover:bg-[#a52a2a] transition-colors"
        >
          立即预订
        </button>
      </motion.div>
    </div>
  );
}