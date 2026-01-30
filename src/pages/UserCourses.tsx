import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { BookOpen, Play, Calendar, Clock, Users, CheckCircle, ChevronRight } from 'lucide-react';

// 课程状态类型
type CourseStatus = 'all' | 'learning' | 'completed' | 'expired';

// 课程数据类型
interface Course {
  id: string;
  title: string;
  image: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  duration: string;
  instructor: string;
  status: 'learning' | 'completed' | 'expired';
  statusText: string;
  statusColor: string;
}

export default function UserCourses() {
  const [activeTab, setActiveTab] = useState<CourseStatus>('all');
  
  // 模拟课程数据
  const courses: Course[] = [
    {
      id: '1',
      title: '高级绒花工艺课程',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=advanced%20velvet%20flower%20craft%20course%20intricate%20design&sign=8cf6610ed640ffab9431c649e8d92d36',
      progress: 60,
      totalLessons: 12,
      completedLessons: 7,
      duration: '共12课时',
      instructor: '李明娟（省级非遗传承人）',
      status: 'learning',
      statusText: '学习中',
      statusColor: 'text-blue-500'
    },
    {
      id: '2',
      title: '绒花入门基础课',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=basic%20velvet%20flower%20making%20course%20traditional%20craft&sign=e09e4caad582a1c48935d4e38b4e3b8d',
      progress: 100,
      totalLessons: 8,
      completedLessons: 8,
      duration: '共8课时',
      instructor: '赵树宪（国家级非遗传承人）',
      status: 'completed',
      statusText: '已完成',
      statusColor: 'text-green-500'
    },
    {
      id: '3',
      title: '绒花配色与设计专题课',
      image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=velvet%20flower%20design%20and%20color%20matching%20course&sign=9865bc291aed7f5e0ab0681b7a3747d3',
      progress: 20,
      totalLessons: 6,
      completedLessons: 1,
      duration: '共6课时',
      instructor: '王师傅（市级非遗传承人）',
      status: 'learning',
      statusText: '学习中',
      statusColor: 'text-blue-500'
    }
  ];
  
  // 根据当前选中的标签过滤课程
  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.status === activeTab);
  
  // 继续学习
  const continueLearning = (courseId: string) => {
    window.location.href = `/courses/detail/${courseId}?action=continue`;
  };
  
  // 查看详情
  const viewCourse = (courseId: string) => {
    window.location.href = `/courses/detail/${courseId}`;
  };

  return (
    <div className="container max-w-[800px] mx-auto px-4 pb-20">
      <Header title="非遗绒花 - 我的课程" />
      
      {/* 课程状态标签 */}
      <div className="flex border-b border-[#f0e6d9] mb-5 overflow-x-auto scrollbar-hide">
        {[
          { key: 'all', label: '全部' },
          { key: 'learning', label: '学习中' },
          { key: 'completed', label: '已完成' },
          { key: 'expired', label: '已过期' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as CourseStatus)}
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
      
      {/* 课程列表 */}
      {filteredCourses.length > 0 ? (
        <div className="space-y-5">
          {filteredCourses.map(course => (
            <motion.div 
              key={course.id}
              className="bg-white rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* 课程内容 */}
              <div className="flex p-4">
                <div className="w-28 h-28 bg-gray-100 rounded-[6px] overflow-hidden mr-4 flex-shrink-0">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-[#5c3a21] line-clamp-2">{course.title}</h4>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        course.status === 'completed' ? 'bg-green-100 text-green-500' : 
                        course.status === 'learning' ? 'bg-blue-100 text-blue-500' : 
                        'bg-gray-100 text-gray-500'
                      }`}>
                        {course.statusText}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-[#8c7355] mb-2">
                      <BookOpen className="w-3.5 h-3.5 mr-1" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs text-[#8c7355]">
                      <div className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        <span>{course.completedLessons}/{course.totalLessons} 课时</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 进度条 */}
                  <div className="mt-2">
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-[#5c3a21]">学习进度</span>
                      <span className="text-[#d03b3b] font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full" 
                        style={{ 
                          width: `${course.progress}%`,
                          backgroundColor: course.status === 'completed' ? '#4ade80' : '#3b82f6'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 课程操作 */}
              <div className="flex justify-end gap-3 px-4 py-3 border-t border-[#f0e6d9]">
                {course.status === 'learning' ? (
                  <button 
                    onClick={() => continueLearning(course.id)}
                    className="px-4 py-1.5 text-sm bg-[#d03b3b] text-white rounded-full hover:bg-[#a52a2a] transition-colors"
                  >
                    继续学习
                  </button>
                ) : (
                  <button 
                    onClick={() => viewCourse(course.id)}
                    className="px-4 py-1.5 text-sm border border-[#8c7355] text-[#8c7355] rounded-full hover:bg-[#8c7355]/5 transition-colors"
                  >
                    查看课程
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <div className="w-24 h-24 mb-4 text-[#d03b3b]/30">
            <BookOpen className="w-full h-full" />
          </div>
          <p className="text-[#8c7355] mb-4">暂无相关课程</p>
          <button 
            onClick={() => window.location.href = '/courses'}
            className="px-5 py-2 bg-[#d03b3b] text-white rounded-full hover:bg-[#a52a2a] transition-colors"
          >
            去选课
          </button>
        </div>
      )}
    </div>
  );
}