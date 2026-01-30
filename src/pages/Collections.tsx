import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { Heart, BookOpen, ShoppingBag, X, Star } from 'lucide-react';
import { toast } from 'sonner';

// 收藏类型
type CollectionType = 'all' | 'news' | 'courses' | 'products';

// 收藏项目类型
interface CollectionItem {
  id: string;
  type: 'news' | 'course' | 'product';
  title: string;
  image: string;
  price?: string;
  date?: string;
  rating?: number;
  students?: number;
}

export default function Collections() {
  const [activeTab, setActiveTab] = useState<CollectionType>('all');
  const [items, setItems] = useState<CollectionItem[]>([
    {
      id: '1',
      type: 'news',
      title: '绒花技艺入选国家级非物质文化遗产',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=traditional%20Chinese%20velvet%20flower%20craft%20intangible%20cultural%20heritage&sign=034ffd6a1585018837da076f9fb536c5',
      date: '2023-10-15'
    },
    {
      id: '2',
      type: 'news',
      title: '南京绒花展览盛大开幕',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Nanjing%20velvet%20flower%20exhibition%20traditional%20Chinese%20art&sign=7ab3daeb5cbb7bc9d2293c9de8454271',
      date: '2023-10-08'
    },
    {
      id: '3',
      type: 'course',
      title: '高级绒花工艺课程',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=advanced%20velvet%20flower%20craft%20course%20intricate%20design&sign=8cf6610ed640ffab9431c649e8d92d36',
      price: '¥399',
      rating: 4.8,
      students: 1245
    },
    {
      id: '4',
      type: 'course',
      title: '绒花入门基础课',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=basic%20velvet%20flower%20making%20course%20traditional%20craft&sign=e09e4caad582a1c48935d4e38b4e3b8d',
      price: '¥199',
      rating: 4.7,
      students: 2356
    },
    {
      id: '5',
      type: 'product',
      title: '凤凰于飞绒花发簪',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=phoenix%20velvet%20flower%20hairpin%20traditional%20chinese%20hair%20ornament&sign=a8a85ec6a38133b24e3deec1d68b5661',
      price: '¥268'
    },
    {
      id: '6',
      type: 'product',
      title: '牡丹花开绒花胸针',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=peony%20flower%20velvet%20brooch%20traditional%20chinese%20accessory&sign=18db242f2aae3d742816986081deb8f2',
      price: '¥198'
    }
  ]);
  
  // 根据当前选中的标签过滤收藏项目
  const filteredItems = activeTab === 'all' 
    ? items 
    : items.filter(item => item.type === activeTab);
  
  // 移除收藏
  const removeFromCollection = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    toast('已取消收藏');
  };
  
  // 跳转到详情页
  const goToDetail = (item: CollectionItem) => {
    switch (item.type) {
      case 'news':
        window.location.href = `/news/detail/${item.id}`;
        break;
      case 'course':
        window.location.href = `/courses/detail/${item.id}`;
        break;
      case 'product':
        window.location.href = `/shop/product/${item.id}`;
        break;
      default:
        break;
    }
  };

  return (
    <div className="container max-w-[800px] mx-auto px-4 pb-20">
      <Header title="非遗绒花 - 我的收藏" />
      
      {/* 收藏类型标签 */}
      <div className="flex border-b border-[#f0e6d9] mb-5 overflow-x-auto scrollbar-hide">
        {[
          { key: 'all', label: '全部收藏' },
          { key: 'news', label: '资讯' },
          { key: 'courses', label: '课程' },
          { key: 'products', label: '商品' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as CollectionType)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.key 
                ? 'text-[#d03b3b] border-b-2 border-[#d03b3b]' 
                : 'text-[#8c7355] hover:text-[#d03b3b]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* 收藏列表 */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredItems.map(item => (
            <motion.div 
              key={item.id}
              className="bg-white rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* 收藏类型标签 */}
              <div className="absolute top-3 left-3 z-10 bg-white/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
                {item.type === 'news' && '资讯'}
                {item.type === 'course' && '课程'}
                {item.type === 'product' && '商品'}
              </div>
              
              {/* 移除收藏按钮 */}
              <button 
                onClick={() => removeFromCollection(item.id)}
                className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-[#8c7355] hover:text-[#d03b3b] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              
              {/* 收藏项目内容 */}
              <div 
                className="w-full h-36 bg-gray-100 overflow-hidden cursor-pointer"
                onClick={() => goToDetail(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div 
                className="p-3 cursor-pointer"
                onClick={() => goToDetail(item)}
              >
                <h4 className="font-medium text-[#5c3a21] text-sm line-clamp-2 mb-2">{item.title}</h4>
                
                <div className="flex justify-between items-center">
                  {/* 价格或日期 */}
                  <span className={
                    item.price ? 'text-[#d03b3b] font-bold text-sm' : 'text-xs text-[#8c7355]'
                  }>
                    {item.price || item.date}
                  </span>
                  
                  {/* 评分或收藏图标 */}
                  {item.type === 'course' ? (
                    <div className="flex items-center text-xs text-[#8c7355]">
                      <Star className="w-3.5 h-3.5 text-yellow-500 mr-1" />
                      <span>{item.rating}</span>
                    </div>
                  ) : (
                    <Heart className="w-4 h-4 text-[#d03b3b]" />
                  )}
                </div>
                
                {/* 学习人数（仅课程） */}
                {item.type === 'course' && (
                  <div className="text-xs text-[#8c7355] mt-1">
                    {item.students}人学习
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <div className="w-24 h-24 mb-4 text-[#d03b3b]/30">
            <Heart className="w-full h-full" />
          </div>
          <p className="text-[#8c7355] mb-4">暂无收藏内容</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-5 py-2 bg-[#d03b3b] text-white rounded-full hover:bg-[#a52a2a] transition-colors"
          >
            去浏览
          </button>
        </div>
      )}
    </div>
  );
}