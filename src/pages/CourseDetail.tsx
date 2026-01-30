import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { Play, Calendar, Clock, Users, Star, BookOpen, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

export default function CourseDetail() {
  const { id } = useParams();
  
  // 这里可以根据id从API获取实际数据，这里使用模拟数据
  const courseDetail = {
    id: id,
    title: "高级绒花工艺课程",
    price: "¥399",
    originalPrice: "¥499",
    discount: "8折",
    students: 1245,
    rating: 4.8,
    duration: "共12课时",
    level: "高级",
    instructor: "李明娟（省级非遗传承人）",
    description: "本课程适合有一定基础的绒花爱好者，深入学习复杂绒花制作技艺。课程内容包括高级绒花配色技巧、立体造型设计、特殊材料运用等，让您能够制作出精美的绒花艺术品。",
    objectives: [
      "掌握高级绒花配色和设计技巧",
      "学习复杂绒花立体造型方法",
      "了解特殊材料在绒花制作中的应用",
      "能够独立完成高难度绒花作品",
      "提升绒花作品的艺术表现力"
    ],
    syllabus: [
      { 
        lesson: "第1课", 
        title: "高级配色技巧与设计", 
        duration: "60分钟",
        content: "学习专业色彩搭配原理，掌握绒花色彩设计的高级技巧。"
      },
      { 
        lesson: "第2课", 
        title: "立体造型基础", 
        duration: "60分钟",
        content: "了解绒花立体结构设计，学习基础立体造型方法。"
      },
      { 
        lesson: "第3课", 
        title: "复杂花卉制作（上）", 
        duration: "75分钟",
        content: "深入学习牡丹、玫瑰等复杂花卉的绒花制作工艺。"
      },
      { 
        lesson: "第4课", 
        title: "复杂花卉制作（下）", 
        duration: "75分钟",
        content: "继续学习复杂花卉的细节处理和整体造型。"
      },
      { 
        lesson: "第5课", 
        title: "动物造型绒花", 
        duration: "90分钟",
        content: "学习龙、凤等动物造型绒花的制作方法和技巧。"
      },
      { 
        lesson: "第6课", 
        title: "特殊材料应用", 
        duration: "60分钟",
        content: "了解和掌握金箔、丝线等特殊材料在绒花制作中的应用。"
      },
      { 
        lesson: "第7课", 
        title: "绒花与服饰搭配", 
        duration: "60分钟",
        content: "学习绒花与传统和现代服饰的搭配技巧。"
      },
      { 
        lesson: "第8课", 
        title: "绒花修复与保养", 
        duration: "45分钟",
        content: "了解绒花作品的修复方法和日常保养技巧。"
      },
      { 
        lesson: "第9课", 
        title: "创意绒花设计", 
        duration: "75分钟",
        content: "学习如何将传统绒花与现代设计元素相结合。"
      },
      { 
        lesson: "第10课", 
        title: "大型绒花作品创作", 
        duration: "90分钟",
        content: "学习大型绒花艺术品的设计和制作方法。"
      },
      { 
        lesson: "第11课", 
        title: "商业应用与包装", 
        duration: "60分钟",
        content: "了解绒花作品的商业应用和包装设计。"
      },
      { 
        lesson: "第12课", 
        title: "毕业作品点评与指导", 
        duration: "90分钟",
        content: "学员作品点评和个性化指导，提供改进建议。"
      }
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=advanced%20velvet%20flower%20craft%20course%20intricate%20design&sign=68e1185a45308e8822b465cbea0a8281",
    instructorImage: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=provincial%20intangible%20cultural%20heritage%20inheritor%20velvet%20flower%20artist&sign=3dfc0a932194fa89a8aaf701c2979271",
    requirements: "需要有基础绒花制作经验，建议先完成入门课程学习。"
  };
  
  // 添加到购物车
  const addToCart = () => {
    toast('已成功添加到购物车');
  };
  
  // 立即购买
  const buyNow = () => {
    // 跳转到订单确认页面，带上课程信息
    window.location.href = `/profile/orders?action=buyNow&itemId=${courseDetail.id}&itemType=course&price=${courseDetail.price}`;
  };

  return (
    <div className="container max-w-[800px] mx-auto px-4 pb-20">
      <Header title="非遗绒花 - 课程详情" />
      
      <motion.div 
        className="bg-white rounded-[12px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 课程封面图 */}
        <div className="relative mb-6">
          <div className="w-full h-64 bg-gray-100 rounded-[8px] overflow-hidden">
            <img 
              src={courseDetail.image} 
              alt={courseDetail.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* 播放按钮 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-[#d03b3b]/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#d03b3b] transition-colors">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
        </div>
        
        {/* 课程基本信息 */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-[#5c3a21] mb-2">{courseDetail.title}</h1>
          
          <div className="flex items-baseline mb-4">
            <span className="text-2xl font-bold text-[#d03b3b] mr-2">{courseDetail.price}</span>
            <span className="text-sm line-through text-[#8c7355] mr-2">{courseDetail.originalPrice}</span>
            <span className="text-xs bg-[#d03b3b]/10 text-[#d03b3b] px-2 py-0.5 rounded-full">{courseDetail.discount}</span>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#8c7355] mb-4">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{courseDetail.students}人学习</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-500" />
              <span>评分 {courseDetail.rating}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{courseDetail.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              <span>{courseDetail.level}课程</span>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-[#8c7355] mb-4">
            <span className="mr-2">讲师：</span>
            <span className="text-[#5c3a21]">{courseDetail.instructor}</span>
          </div>
        </div>
        
        {/* 课程简介 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">课程简介</h3>
          <p className="text-[#5c3a21] leading-relaxed">{courseDetail.description}</p>
        </div>
        
        {/* 课程目标 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">课程目标</h3>
          <ul className="space-y-2">
            {courseDetail.objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-5 h-5 rounded-full bg-[#d03b3b]/10 text-[#d03b3b] text-xs flex items-center justify-center mr-2 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-[#5c3a21]">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* 讲师介绍 */}
        <div className="mb-6 pt-6 border-t-[1px] border-[#f0e6d9]">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">讲师介绍</h3>
          <div className="flex items-start">
            <img 
              src={courseDetail.instructorImage} 
              alt={courseDetail.instructor} 
              className="w-20 h-20 object-cover rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold text-[#5c3a21]">{courseDetail.instructor}</h4>
              <p className="text-sm text-[#8c7355] mt-1">李明娟，扬州绒花技艺代表，省级非物质文化遗产传承人，从事绒花制作38年。她在传统工艺基础上不断创新，将现代设计元素融入绒花制作，作品多次在国际上获奖。</p>
              <button className="text-sm text-[#d03b3b] mt-2">查看详情 →</button>
            </div>
          </div>
        </div>
        
        {/* 课程大纲 */}
        <div className="mb-6 pt-6 border-t-[1px] border-[#f0e6d9]">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">课程大纲</h3>
          <div className="space-y-3">
            {courseDetail.syllabus.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-[#fffaf0] rounded-[8px] p-3 cursor-pointer hover:bg-[#f0e6d9] transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <span className="text-sm font-bold text-[#d03b3b] mr-2">{item.lesson}</span>
                    <span className="font-medium text-[#5c3a21]">{item.title}</span>
                  </div>
                  <span className="text-xs text-[#8c7355]">{item.duration}</span>
                </div>
                <p className="text-sm text-[#8c7355] pl-10">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* 学员要求 */}
        <div className="mb-6 pt-6 border-t-[1px] border-[#f0e6d9]">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">学员要求</h3>
          <p className="text-[#5c3a21]">{courseDetail.requirements}</p>
        </div>
        
         {/* 相关推荐 */}
         <div className="mt-8 pt-6 border-t-[1px] border-[#f0e6d9]">
           <h3 className="text-lg font-bold text-[#5c3a21] mb-4">相关课程</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <motion.div 
               className="bg-[#fffaf0] rounded-[8px] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
               whileHover={{ y: -5 }}
               onClick={() => window.location.href = "/courses/detail/1"}
             >
               <img 
                 src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=basic%20velvet%20flower%20making%20course%20traditional%20craft&sign=e09e4caad582a1c48935d4e38b4e3b8d" 
                 alt="相关课程" 
                 className="w-full h-32 object-cover"
               />
               <div className="p-2">
                 <h4 className="font-medium text-[#5c3a21] text-sm line-clamp-2">绒花入门基础课</h4>
                 <div className="flex items-center justify-between mt-1">
                   <p className="text-[#d03b3b] font-bold text-sm">¥199</p>
                   <span className="text-xs text-[#8c7355]">共8课时</span>
                 </div>
               </div>
             </motion.div>
             <motion.div 
               className="bg-[#fffaf0] rounded-[8px] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
               whileHover={{ y: -5 }}
               onClick={() => window.location.href = "/courses/detail/3"}
             >
               <img 
                 src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=velvet%20flower%20design%20and%20color%20matching%20course&sign=9865bc291aed7f5e0ab0681b7a3747d3" 
                 alt="相关课程" 
                 className="w-full h-32 object-cover"
               />
               <div className="p-2">
                 <h4 className="font-medium text-[#5c3a21] text-sm line-clamp-2">绒花配色与设计专题课</h4>
                 <div className="flex items-center justify-between mt-1">
                   <p className="text-[#d03b3b] font-bold text-sm">¥159</p>
                   <span className="text-xs text-[#8c7355]">共6课时</span>
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
            <Calendar className="w-6 h-6 mb-1" />
            <span className="text-xs">课程表</span>
          </button>
          <button className="flex flex-col items-center text-[#8c7355] hover:text-[#d03b3b] transition-colors">
            <Users className="w-6 h-6 mb-1" />
            <span className="text-xs">学员</span>
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