import Header from '../components/Header';
import Section from '../components/Section';
import Category from '../components/Category';
import Card from '../components/Card';

// 分类数据
const categories = [
  { id: 1, icon: 'fire', label: '热门' },
  { id: 2, icon: 'newspaper', label: '新闻' },
  { id: 3, icon: 'user-tie', label: '传承人' },
  { id: 4, icon: 'video', label: '视频' }
];

// 最新动态数据
const latestNews = [
  {
    id: 1,
    title: "绒花技艺国际交流展在巴黎举行",
    desc: "中国非遗绒花技艺亮相巴黎文化艺术中心，受到国际关注",
    date: "2023-10-20",
    views: "892",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=international%20velvet%20flower%20exhibition%20Paris%20cultural%20exchange&sign=3a4176363357c9f6467564680d2c2660"
  },
  {
    id: 2,
    title: "绒花制作大师访谈录出版",
    desc: "《指尖上的非遗：绒花大师访谈录》正式出版，记录十位传承人的故事",
    date: "2023-10-12",
    views: "1245",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=velvet%20flower%20master%20interview%20book%20traditional%20craftsman&sign=88c134eb76d3ef56df530f4e0c73cce1"
  },
  {
    id: 3,
    title: "传统绒花技艺与现代设计的融合",
    desc: "年轻设计师将绒花元素融入现代服饰，打造国潮新风尚",
    date: "2023-10-05",
    views: "1567",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=modern%20fashion%20with%20traditional%20velvet%20flower%20elements%20chinese%20style&sign=3ca3c0e1dedf5c2433e666ad24f4f025"
  },
  {
    id: 4,
    title: "绒花技艺进入校园课堂",
    desc: "多所中小学开设绒花手工课，让孩子们体验传统工艺之美",
    date: "2023-09-28",
    views: "1034",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=velvet%20flower%20class%20in%20school%20children%20learning%20traditional%20craft&sign=47fe4481324c87bc83bc2f60c187d00d"
  }
];

// 非遗传承人数据
const inheritors = [
  {
    id: 1,
    name: "赵树宪 - 国家级传承人",
    desc: "南京绒花代表性传承人，从事绒花制作50余年，被誉为\"绒花泰斗\"",
    experience: "从艺52年",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=national%20intangible%20cultural%20heritage%20inheritor%20velvet%20flower%20craftsman&sign=ab4fb0ec30ed8138ca9b7d491f772a9c"
  },
  {
    id: 2,
    name: "李明娟 - 省级传承人",
    desc: "扬州绒花技艺代表，创新绒花设计与应用，多次在国际上获奖",
    experience: "从艺38年",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=provincial%20intangible%20cultural%20heritage%20inheritor%20velvet%20flower%20artist&sign=3dfc0a932194fa89a8aaf701c2979271"
  }
];

export default function News() {
  return (
    <div className="container max-w-[800px] mx-auto px-4">
      <Header title="非遗绒花 - 资讯" />
      
       {/* 分类导航 */}
      <div className="categories grid grid-cols-4 gap-2 my-4">
        {categories.map(category => (
          <Category 
            key={category.id}
            type="news"
            icon={category.icon}
            label={category.label}
          />
        ))}
      </div>
      
      <Section title="最新动态">
        <div className="card-list grid grid-cols-1 md:grid-cols-2 gap-4">
          {latestNews.map(item => (
            <Card 
              key={item.id}
              type="news"
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.desc}
              footerLeft={item.date}
              footerRight={<><i className="far fa-eye"></i> {item.views}</>}
            />
          ))}
        </div>
      </Section>
      
      <Section title="非遗传承人">
        <div className="card-list grid grid-cols-1 md:grid-cols-2 gap-4">
          {inheritors.map(item => (
            <Card 
              key={item.id}
              type="inheritor"
              id={item.id}
              image={item.image}
              title={item.name}
              description={item.desc}
              footerLeft={item.experience}
              footerRight="查看更多"
            />
          ))}
        </div>
      </Section>
    </div>
  );
}