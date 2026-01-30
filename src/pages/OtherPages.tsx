import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Award, MessageSquare, ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

// 课程列表页面
export const CourseList: React.FC = () => {
  const navigate = useNavigate();
  
  // 模拟课程数据
  const courses = [
    {
      id: 1,
      title: "绒花入门基础课",
      desc: "零基础学习绒花制作，从材料认识到基本技法",
      duration: "共8课时",
      price: "¥199",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=basic%20velvet%20flower%20making%20course%20traditional%20craft&sign=e09e4caad582a1c48935d4e38b4e3b8d"
    },
    {
      id: 2,
      title: "高级绒花工艺课程",
      desc: "深入学习复杂绒花制作技艺，制作精美艺术品",
      duration: "共12课时",
      price: "¥399",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=advanced%20velvet%20flower%20craft%20course%20intricate%20design&sign=8cf6610ed640ffab9431c649e8d92d36"
    },
    {
      id: 3,
      title: "绒花配色与设计专题课",
      desc: "学习专业色彩搭配原理，掌握绒花色彩设计的高级技巧",
      duration: "共6课时",
      price: "¥159",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=velvet%20flower%20design%20and%20color%20matching%20course&sign=9865bc291aed7f5e0ab0681b7a3747d3"
    },
    {
      id: 4,
      title: "南京绒花传统技艺研修班",
      desc: "由国家级非遗传承人亲自授课，深度体验传统工艺魅力",
      duration: "共16课时",
      price: "¥1280",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Nanjing%20velvet%20flower%20traditional%20craft%20workshop&sign=61040640a76955ea562e3fef217584ab"
    }
  ];
  
  return (
    <div className="container max-w-[800px] mx-auto px-4">
      <Header title="非遗绒花 - 课程列表" />
      
      {/* 课程分类 */}
      <motion.div 
        className="flex overflow-x-auto py-3 px-2 space-x-3 mb-5 no-scrollbar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {['全部课程', '入门基础', '进阶提高', '专题研修', '非遗传承'].map((category, index) => (
          <button 
            key={index}
            className={`px-4 py-1.5 bg-white rounded-full text-sm whitespace-nowrap shadow-sm ${
              index === 0 ? 'text-[#d03b3b] border-2 border-[#d03b3b]' : 'text-[#5c3a21] border border-[#f0e6d9]'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>
      
      <Section title="全部课程">
        <div className="card-list grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map(course => (
            <Card 
              key={course.id}
              type="course"
              id={course.id}
              image={course.image}
              title={course.title}
              description={course.desc}
              footerLeft={course.duration}
              footerRight={course.price}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

// 旅游列表页面
export const TravelList: React.FC = () => {
  const navigate = useNavigate();
  
  // 模拟旅游数据
  const travelItems = [
    {
      id: 1,
      title: "南京绒花制作体验一日游",
      desc: "亲身体验绒花制作，感受传统手工艺的魅力",
      price: "¥298/人",
      participants: "已有1253人体验",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=velvet%20flower%20workshop%20experience%20Nanjing%20traditional%20craft&sign=871e4144f9428e9d818d41cc7991a644"
    },
    {
      id: 2,
      title: "扬州绒花文化深度之旅",
      desc: "走进绒花的故乡，探访绒花非遗传承人",
      price: "¥598/人",
      participants: "已有658人体验",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Yangzhou%20velvet%20flower%20cultural%20tour%20traditional%20craftsman&sign=1c38c14da01a0b2e19cf724c763d16c2"
    },
    {
      id: 3,
      title: "江南非遗文化七日游",
      desc: "探访南京、苏州、杭州等地，体验多种非遗文化",
      price: "¥2580/人",
      participants: "已有327人体验",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=traditional%20Chinese%20folk%20art%20cultural%20tour%20Nanjing%20Yangzhou&sign=b268dd11d38dd65e2e773a0f9a5d04ac"
    }
  ];
  
  return (
    <div className="container max-w-[800px] mx-auto px-4">
      <Header title="非遗绒花 - 旅游体验" />
      
      {/* 旅游分类 */}
      <motion.div 
        className="flex overflow-x-auto py-3 px-2 space-x-3 mb-5 no-scrollbar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {['全部线路', '一日体验', '深度文化游', '亲子活动', '团建定制'].map((category, index) => (
          <button 
            key={index}
            className={`px-4 py-1.5 bg-white rounded-full text-sm whitespace-nowrap shadow-sm ${
              index === 0 ? 'text-[#d03b3b] border-2 border-[#d03b3b]' : 'text-[#5c3a21] border border-[#f0e6d9]'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>
      
      <Section title="热门旅游体验">
        <div className="card-list grid grid-cols-1 md:grid-cols-2 gap-4">
          {travelItems.map(item => (
            <Card 
              key={item.id}
              type="travel"
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.desc}
              footerLeft={item.price}
              footerRight={item.participants}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

// 商品列表页面
export const ProductsList: React.FC = () => {
  const navigate = useNavigate();
  
  // 模拟商品数据
  const products = [
    {
      id: 1,
      title: "凤凰于飞绒花发簪",
      price: "¥268",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=phoenix%20velvet%20flower%20hairpin%20traditional%20chinese%20hair%20ornament&sign=a8a85ec6a38133b24e3deec1d68b5661"
    },
    {
      id: 2,
      title: "牡丹花开绒花胸针",
      price: "¥198",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=peony%20flower%20velvet%20brooch%20traditional%20chinese%20accessory&sign=18db242f2aae3d742816986081deb8f2"
    },
    {
      id: 3,
      title: "传统婚庆绒花头饰",
      price: "¥358",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=traditional%20chinese%20wedding%20velvet%20flower%20headpiece&sign=c5b23bb53ac6276f3ddfd7fbe86b1e35"
    },
    {
      id: 4,
      title: "梅花三弄绒花发钗",
      price: "¥228",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=plum%20blossom%20velvet%20flower%20hairpin%20traditional%20chinese%20style&sign=55dcd21f7126981a955351fd63c76b74"
    }
  ];
  
  return (
    <div className="container max-w-[800px] mx-auto px-4">
      <Header title="非遗绒花 - 全部商品" />
      
      {/* 商品分类 */}
      <motion.div 
        className="flex overflow-x-auto py-3 px-2 space-x-3 mb-5 no-scrollbar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {['全部商品', '发饰', '胸针', '挂饰', '材料包', '工具套装'].map((category, index) => (
          <button 
            key={index}
            className={`px-4 py-1.5 bg-white rounded-full text-sm whitespace-nowrap shadow-sm ${
              index === 0 ? 'text-[#d03b3b] border-2 border-[#d03b3b]' : 'text-[#5c3a21] border border-[#f0e6d9]'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>
      
      <Section title="全部商品">
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
          {products.map(product => (
            <motion.div 
              key={product.id}
              className="bg-white rounded-[8px] overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(`/shop/product/${product.id}`)}
            >
              <div 
                className="h-36 bg-cover bg-center transition-transform duration-500 hover:scale-105" 
                style={{ backgroundImage: `url('${product.image}')` }}
              />
              <div className="p-2.5">
                <div className="font-bold mb-1.5 text-[#5c3a21] text-sm line-clamp-2">{product.title}</div>
                <div className="text-[#d03b3b] font-bold text-base">{product.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

// 客服中心页面
export const CustomerService: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container max-w-[800px] mx-auto px-4 pb-20">
      <Header title="非遗绒花 - 客服中心" />
      
      <div className="bg-white rounded-[12px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-5">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-[#f0e6d9] transition-colors mr-4"
          >
            <ChevronLeft className="w-5 h-5 text-[#5c3a21]" />
          </button>
          <h1 className="text-lg font-bold text-[#5c3a21]">联系客服</h1>
        </div>
        
        <div className="space-y-6">
          <motion.div 
            className="flex items-center justify-between p-4 bg-[#fffaf0] rounded-[8px] cursor-pointer"
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#d03b3b]/10 rounded-full flex items-center justify-center mr-3">
                <MessageSquare className="w-6 h-6 text-[#d03b3b]" />
              </div>
              <div>
                <h3 className="font-medium text-[#5c3a21]">在线客服</h3>
                <p className="text-xs text-[#8c7355] mt-1">工作日 9:00-18:00</p>
              </div>
            </div>
            <div className="w-8 h-8 bg-[#d03b3b] rounded-full flex items-center justify-center text-white">
              <i className="fas fa-comment"></i>
            </div>
          </motion.div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white border border-[#f0e6d9] rounded-[8px]">
              <div>
                <h3 className="font-medium text-[#5c3a21]">客服电话</h3>
                <p className="text-[#d03b3b] font-bold mt-1">400-123-4567</p>
              </div>
              <button className="px-4 py-1.5 bg-[#d03b3b] text-white rounded-full text-sm">
                立即拨打
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white border border-[#f0e6d9] rounded-[8px]">
              <div>
                <h3 className="font-medium text-[#5c3a21]">工作时间</h3>
                <p className="text-sm text-[#8c7355] mt-1">周一至周日 9:00-20:00</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-[#5c3a21] mb-3">常见问题</h3>
            <div className="space-y-3">
              {[
                '如何购买和支付商品？',
                '课程购买后有效期是多久？',
                '商品发货时间和配送方式？','如何申请退款？',
                '绒花作品如何保养？'
              ].map((question, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-between p-3 bg-white border border-[#f0e6d9] rounded-[8px] cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-[#5c3a21]">{question}</span>
                  <ChevronLeft className="w-5 h-5 text-[#8c7355] transform rotate-180" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 个人资料编辑页面
export const UserProfileEdit: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container max-w-[800px] mx-auto px-4 pb-20">
      <Header title="非遗绒花 - 编辑资料" />
      
      <div className="bg-white rounded-[12px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-5">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-[#f0e6d9] transition-colors mr-4"
          >
            <ChevronLeft className="w-5 h-5 text-[#5c3a21]" />
          </button>
          <h1 className="text-lg font-bold text-[#5c3a21]">编辑个人资料</h1>
        </div>
        
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-[#ffd700] rounded-full flex items-center justify-center text-3xl mb-3">
            <i className="fas fa-user"></i>
          </div>
          <button className="px-4 py-1.5 bg-[#d03b3b] text-white rounded-full text-sm">
            更换头像
          </button>
        </div>
        
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm text-[#8c7355]">用户名</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 bg-white border border-[#f0e6d9] rounded-[8px] focus:outline-none focus:border-[#d03b3b]"
              placeholder="请输入用户名"
              defaultValue="绒花爱好者"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-[#8c7355]">昵称</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 bg-white border border-[#f0e6d9] rounded-[8px] focus:outline-none focus:border-[#d03b3b]"
              placeholder="请输入昵称"
              defaultValue="花开富贵"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-[#8c7355]">简介</label>
            <textarea 
              className="w-full px-4 py-3 bg-white border border-[#f0e6d9] rounded-[8px] focus:outline-none focus:border-[#d03b3b]"
              placeholder="介绍一下自己吧"
              rows={4}
              defaultValue="热爱传统手工艺，特别是绒花制作，希望能通过这个平台认识更多志同道合的朋友。"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-[#8c7355]">联系方式</label>
            <input 
              type="tel" 
              className="w-full px-4 py-3 bg-white border border-[#f0e6d9] rounded-[8px] focus:outline-none focus:border-[#d03b3b]"
              placeholder="请输入手机号码"
              defaultValue="138****1234"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-[#8c7355]">收货地址</label>
            <div 
              className="flex items-center justify-between w-full px-4 py-3 bg-white border border-[#f0e6d9] rounded-[8px] cursor-pointer"
              onClick={() => navigate('/profile/address')}
            >
              <span className="text-[#5c3a21]">江苏省南京市秦淮区夫子庙街道</span>
              <ChevronLeft className="w-5 h-5 text-[#8c7355] transform rotate-180" />
            </div>
          </div>
        </div>
        
        <button 
          className="w-full mt-8 py-3 bg-[#d03b3b] text-white rounded-[8px] font-medium hover:bg-[#a52a2a] transition-colors"
        >
          保存修改
        </button>
      </div>
    </div>
  );
};