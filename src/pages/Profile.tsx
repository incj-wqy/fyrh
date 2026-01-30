import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import Section from '../components/Section';
import ProfileCard from '../components/ProfileCard';
import { motion } from 'framer-motion';

// 个人中心导航数据
const profileNavItems = [
  { id: 1, icon: 'shopping-bag', title: '我的订单', desc: '查看全部订单' },
  { id: 2, icon: 'heart', title: '我的收藏', desc: '商品、课程、文章收藏' },
  { id: 3, icon: 'video', title: '我的课程', desc: '已购买的学习课程' },
  { id: 4, icon: 'map-marker-alt', title: '收货地址', desc: '管理收货地址' }
];

// 服务项目数据
const serviceItems = [
  { id: 1, icon: 'question-circle', title: '客服中心', desc: '联系客服解决问题' },
  { id: 2, icon: 'cog', title: '设置', desc: '账号与隐私设置' }
];

// 个人成就数据
const achievementItems = [
  { id: 1, title: '已学习课程', desc: '3门课程' },
  { id: 2, title: '收藏文章', desc: '12篇文章' },
  { id: 3, title: '绒花制作时长', desc: '28小时' }
];

export default function Profile() {
  return (
    <div className="container max-w-[800px] mx-auto px-4">
      <Header title="非遗绒花 - 我的" />
      
      <UserProfile />
      
      <Section title="">
        <div className="card-list grid grid-cols-1 gap-3">
          {profileNavItems.map(item => (
            <ProfileCard 
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.desc}
              showArrow={true}
            />
          ))}
        </div>
      </Section>
      
      <Section title="我的服务">
        <div className="card-list grid grid-cols-1 gap-3">
          {serviceItems.map(item => (
            <ProfileCard 
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.desc}
              showArrow={true}
            />
          ))}
        </div>
      </Section>
      
      <Section title="我的成就">
        <div className="card-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {achievementItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <ProfileCard 
                id={item.id}
                title={item.title}
                description={item.desc}
                showArrow={false}
              />
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}