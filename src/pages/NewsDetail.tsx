import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { Heart, Share2, MessageSquare, BookOpen } from 'lucide-react';

export default function NewsDetail() {
  const { id } = useParams();
  
  // 这里可以根据id从API获取实际数据，这里使用模拟数据
  const newsDetail = {
    id: id,
    title: "绒花技艺国际交流展在巴黎举行",
    date: "2023-10-20",
    views: 892,
    author: "非遗文化传播中心",
    content: `
      <p>巴黎时间10月18日，"丝路花语·中国绒花艺术展"在巴黎中国文化中心盛大开幕。此次展览由中国非物质文化遗产保护中心和巴黎中国文化中心共同主办，展出了来自南京、扬州等地的60余件精美绒花作品，包括传统宫廷样式、现代创新设计等多种风格。</p>
      
      <p>开幕式上，巴黎中国文化中心主任致辞表示，绒花作为中国传统手工艺的瑰宝，不仅展现了中国匠人的精湛技艺，也承载着丰富的文化内涵。通过此次展览，希望法国民众能够近距离感受中国非遗文化的魅力。</p>
      
      <p>展览现场，国家级非遗传承人赵树宪先生现场展示了绒花制作技艺，吸引了众多观众驻足观看。赵先生表示："绒花制作需要耐心和细心，每一件作品都凝聚着匠人的心血。希望通过此次交流，让更多人了解和喜爱这一传统工艺。"</p>
      
      <p>据了解，此次展览将持续一个月，期间还将举办多场绒花制作体验工作坊和文化讲座，为法国民众提供近距离接触中国非遗文化的机会。</p>
    `,
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=international%20velvet%20flower%20exhibition%20Paris%20opening%20ceremony&sign=ab462ba96fbd1ac1276de8590b12e187",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=velvet%20flower%20master%20demonstrating%20craftsmanship%20to%20foreign%20audiences&sign=bae4c3c869e8a36c727ff2c11f313e21",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=intricate%20velvet%20flower%20artworks%20on%20display%20in%20exhibition&sign=5b997b6f4d53c6f5a69ec208c33ab7cc"
    ],
    tags: ["国际交流", "巴黎展览", "非遗传承"]
  };

  return (
    <div className="container max-w-[800px] mx-auto px-4 pb-20">
      <Header title="非遗绒花 - 资讯详情" />
      
      <motion.div 
        className="bg-white rounded-[12px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-xl font-bold text-[#5c3a21] mb-3">{newsDetail.title}</h1>
        
        <div className="flex items-center text-sm text-[#8c7355] mb-5">
          <span className="mr-4">{newsDetail.date}</span>
          <span className="mr-4"><i className="far fa-eye mr-1"></i> {newsDetail.views}</span>
          <span>{newsDetail.author}</span>
        </div>
        
        {/* 文章图片 */}
        <div className="mb-6">
          <img 
            src={newsDetail.images[0]} 
            alt={newsDetail.title} 
            className="w-full h-auto rounded-[8px] mb-3"
          />
          <img 
            src={newsDetail.images[1]} 
            alt={newsDetail.title} 
            className="w-full h-auto rounded-[8px] mb-3"
          />
          <img 
            src={newsDetail.images[2]} 
            alt={newsDetail.title} 
            className="w-full h-auto rounded-[8px]"
          />
        </div>
        
        {/* 文章内容 */}
        <div 
          className="text-[#5c3a21] leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: newsDetail.content }}
        ></div>
        
        {/* 文章标签 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {newsDetail.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-[#f0e6d9] text-[#a52a2a] text-sm rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        
         {/* 相关推荐 */}
         <div className="mt-8 pt-6 border-t-[1px] border-[#f0e6d9]">
           <h3 className="text-lg font-bold text-[#5c3a21] mb-4">相关推荐</h3>
           <div className="space-y-4">
             <motion.div 
               className="flex items-center p-3 bg-[#fffaf0] rounded-[8px] cursor-pointer hover:bg-[#f0e6d9] transition-colors"
               whileHover={{ x: 5 }}
               onClick={() => window.location.href = "/news/detail/2"}
             >
               <img 
                 src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Nanjing%20velvet%20flower%20exhibition%20traditional%20Chinese%20art&sign=7ab3daeb5cbb7bc9d2293c9de8454271" 
                 alt="相关资讯" 
                 className="w-20 h-20 object-cover rounded-[6px] mr-3"
               />
               <div className="flex-1">
                 <h4 className="font-medium text-[#5c3a21] line-clamp-2">南京绒花展览盛大开幕，展出百余件精美作品</h4>
                 <p className="text-xs text-[#8c7355] mt-1">2023-10-08</p>
               </div>
             </motion.div>
             <motion.div 
               className="flex items-center p-3 bg-[#fffaf0] rounded-[8px] cursor-pointer hover:bg-[#f0e6d9] transition-colors"
               whileHover={{ x: 5 }}
               onClick={() => window.location.href = "/news/detail/1"}
             >
               <img 
                 src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=traditional%20Chinese%20velvet%20flower%20craft%20intangible%20cultural%20heritage&sign=034ffd6a1585018837da076f9fb536c5" 
                 alt="相关资讯" 
                 className="w-20 h-20 object-cover rounded-[6px] mr-3"
               />
               <div className="flex-1">
                 <h4 className="font-medium text-[#5c3a21] line-clamp-2">绒花技艺入选国家级非物质文化遗产名录</h4>
                 <p className="text-xs text-[#8c7355] mt-1">2023-10-15</p>
               </div>
             </motion.div>
           </div>
        </div>
      </motion.div>
      
      {/* 底部操作栏 */}
      <motion.div 
        className="fixed bottom-20 left-0 right-0 flex justify-around items-center bg-white py-3 px-4 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <button className="flex flex-col items-center text-[#8c7355] hover:text-[#d03b3b] transition-colors">
          <Heart className="w-6 h-6 mb-1" />
          <span className="text-xs">收藏</span>
        </button>
        <button className="flex flex-col items-center text-[#8c7355] hover:text-[#d03b3b] transition-colors">
          <Share2 className="w-6 h-6 mb-1" />
          <span className="text-xs">分享</span>
        </button>
        <button className="flex flex-col items-center text-[#8c7355] hover:text-[#d03b3b] transition-colors">
          <MessageSquare className="w-6 h-6 mb-1" />
          <span className="text-xs">评论</span>
        </button>
        <button className="flex flex-col items-center text-[#8c7355] hover:text-[#d03b3b] transition-colors">
          <BookOpen className="w-6 h-6 mb-1" />
          <span className="text-xs">阅读</span>
        </button>
      </motion.div>
    </div>
  );
}