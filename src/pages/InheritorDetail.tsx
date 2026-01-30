import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, BookOpen, MessageSquare, Share2, Heart } from 'lucide-react';
import { toast } from 'sonner';

export default function InheritorDetail() {
  const { id } = useParams();
  
  // 这里可以根据id从API获取实际数据，这里使用模拟数据
  const inheritorDetail = {
    id: id,
    name: "赵树宪",
    title: "国家级非物质文化遗产传承人",
    location: "中国·南京",
    experience: "从艺52年",
    description: "赵树宪，南京绒花代表性传承人，国家级非物质文化遗产项目代表性传承人，从事绒花制作50余年，被誉为\"绒花泰斗\"。他全面掌握了绒花制作的各项技艺，从选材、染色到成型，每一道工序都精益求精。其作品既保留了传统工艺的精髓，又融入了现代设计元素，多次在国内外展览中获奖。",
    achievements: [
      "2006年 荣获\"江苏省工艺美术大师\"称号",
      "2010年 被认定为\"国家级非物质文化遗产项目代表性传承人\"",
      "2015年 作品《百福骈臻》在米兰世博会中国馆展出",
      "2018年 出版《南京绒花制作技艺》专著",
      "2020年 荣获\"中国工艺美术终身成就奖\""
    ],
    works: [
      {
        id: 1,
        title: "《百福骈臻》",
        year: "2015年",
        description: "这件作品以中国传统吉祥图案为灵感，采用精湛的绒花技艺制作了一百个形态各异的\"福\"字，寓意百福临门，吉祥如意。",
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=traditional%20Chinese%20velvet%20flower%20art%20hundred%20blessings%20pattern&sign=d1e0709150dd30fc43fc71ca9f875abf"
      },
      {
        id: 2,
        title: "《凤穿牡丹》",
        year: "2018年",
        description: "作品以凤凰和牡丹为主题，象征着富贵吉祥。凤凰采用立体编织工艺，牡丹花瓣层次分明，色彩鲜艳，展现了高超的绒花制作技艺。",
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=phoenix%20and%20peony%20velvet%20flower%20artwork%20traditional%20Chinese%20style&sign=386e7836eb7fe201ccba436dc91e13a8"
      },
      {
        id: 3,
        title: "《四季平安》",
        year: "2020年",
        description: "这件作品以春兰、夏荷、秋菊、冬梅四种花卉为题材，象征四季平安。作品色彩搭配和谐，造型优美，体现了传统工艺与现代审美的完美结合。",
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=four%20seasons%20flowers%20velvet%20flower%20art%20traditional%20Chinese%20craft&sign=77e8f26cc5aedca0783122eb88587b1f"
      }
    ],
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=national%20intangible%20cultural%20heritage%20inheritor%20velvet%20flower%20craftsman&sign=98a9a3a2d51bfdc9e3e5c6eb8ebf92aa",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=elderly%20craftsman%20making%20velvet%20flower%20traditional%20art&sign=502f8af6e5f8fe78037fb90ba23ac345",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=master%20teaching%20apprentice%20velvet%20flower%20craft&sign=525d08cd2acb5ab167168915907dcc60"
    ],
    courses: [
      {
        id: 1,
        title: "南京绒花传统技艺研修班",
        price: "¥1280",
        students: 356,
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Nanjing%20velvet%20flower%20traditional%20craft%20workshop&sign=61040640a76955ea562e3fef217584ab"
      },
      {
        id: 2,
        title: "绒花艺术创作高级班",
        price: "¥1980",
        students: 215,
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=advanced%20velvet%20flower%20art%20creation%20class&sign=6936914a2f59c5ba7febb06154144421"
      }
    ]
  };
  
  // 收藏传承人
  const addToCollection = () => {
    toast('已成功收藏传承人');
  };

  return (
    <div className="container max-w-[800px] mx-auto px-4 pb-20">
      <Header title="非遗绒花 - 传承人详情" />
      
      <motion.div 
        className="bg-white rounded-[12px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 传承人照片 */}
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="w-40 h-40 bg-gray-100 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6">
            <img 
              src={inheritorDetail.images[0]} 
              alt={inheritorDetail.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-[#5c3a21] mb-1">{inheritorDetail.name}</h1>
            <p className="text-[#d03b3b] font-medium mb-3">{inheritorDetail.title}</p><div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-[#8c7355]">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{inheritorDetail.experience}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{inheritorDetail.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 传承人简介 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">传承人简介</h3>
          <p className="text-[#5c3a21] leading-relaxed">{inheritorDetail.description}</p>
        </div>
        
        {/* 个人成就 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">个人成就</h3>
          <ul className="space-y-3">
            {inheritorDetail.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <Award className="w-5 h-5 text-[#d03b3b] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-[#5c3a21]">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* 代表作品 */}
        <div className="mb-6 pt-6 border-t-[1px] border-[#f0e6d9]">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">代表作品</h3>
          <div className="space-y-6">
            {inheritorDetail.works.map((work, index) => (
              <motion.div 
                key={index}
                className="bg-[#fffaf0] rounded-[8px] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full md:w-1/3 h-40 md:h-auto object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-[#5c3a21]">{work.title}</h4>
                      <span className="text-sm text-[#8c7355]">{work.year}</span>
                    </div>
                    <p className="text-[#5c3a21] text-sm">{work.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* 教学课程 */}
        <div className="mb-6 pt-6 border-t-[1px] border-[#f0e6d9]">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-3">教学课程</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inheritorDetail.courses.map((course, index) => (
              <div 
                key={index}
                className="bg-[#fffaf0] rounded-[8px] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              >
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-32 object-cover"
                />
                <div className="p-2">
                  <h4 className="font-medium text-[#5c3a21] text-sm line-clamp-2">{course.title}</h4>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-[#d03b3b] font-bold text-sm">{course.price}</p>
                    <span className="text-xs text-[#8c7355]">{course.students}人学习</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 相关传承人 */}
        <div className="mt-8 pt-6 border-t-[1px] border-[#f0e6d9]">
          <h3 className="text-lg font-bold text-[#5c3a21] mb-4">相关传承人</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center p-3 bg-[#fffaf0] rounded-[8px] cursor-pointer hover:bg-[#f0e6d9] transition-colors">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=provincial%20intangible%20cultural%20heritage%20inheritor%20velvet%20flower%20artist&sign=3dfc0a932194fa89a8aaf701c2979271" 
                alt="李明娟" 
                className="w-16 h-16 object-cover rounded-full mr-3"
              />
              <div>
                <h4 className="font-bold text-[#5c3a21]">李明娟</h4>
                <p className="text-xs text-[#8c7355] mt-0.5">省级非遗传承人 · 扬州绒花</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-[#fffaf0] rounded-[8px] cursor-pointer hover:bg-[#f0e6d9] transition-colors">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=velvet%20flower%20craftsman%20traditional%20artisan%20Chinese%20elderly&sign=70f43fd183e5220b09533842fadbe952" 
                alt="王师傅" 
                className="w-16 h-16 object-cover rounded-full mr-3"
              />
              <div>
                <h4 className="font-bold text-[#5c3a21]">王师傅</h4>
                <p className="text-xs text-[#8c7355] mt-0.5">市级非遗传承人 · 苏州绒花</p>
              </div>
            </div>
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
          <button className="flex flex-col items-center text-[#8c7355] hover:text-[#d03b3b] transition-colors">
            <MessageSquare className="w-6 h-6 mb-1" />
            <span className="text-xs">留言</span>
          </button>
        </div>
        
        <button 
          onClick={() => window.location.href = '/courses'}
          className="px-6 py-2.5 bg-[#d03b3b] text-white rounded-full font-medium hover:bg-[#a52a2a] transition-colors"
        >
          查看课程
        </button>
      </motion.div>
    </div>
  );
}