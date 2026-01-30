import Header from '../components/Header';
import QuickNav from '../components/QuickNav';
import Slider from '../components/Slider';
import Section from '../components/Section';
import Tag from '../components/Tag';
import Card from '../components/Card';

// 热门标签数据
const tags = [
  "#绒花历史",
  "#制作工艺",
  "#非遗传承人",
  "#绒花展览",
  "#DIY教程",
  "#材料选购"
];

// 热门资讯数据
const newsItems = [
  {
    id: 1,
    title: "绒花技艺入选国家级非物质文化遗产",
    desc: "绒花制作技艺正式被列入第五批国家级非物质文化遗产代表性项目名录",
    date: "2023-10-15",
    views: "1256",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=traditional%20Chinese%20velvet%20flower%20craft%20intangible%20cultural%20heritage&sign=034ffd6a1585018837da076f9fb536c5"
  },
  {
    id: 2,
    title: "南京绒花展览盛大开幕",
    desc: "\"绒耀金陵\"南京绒花艺术展在博物馆开展，展出百余件精美绒花作品",
    date: "2023-10-08",
    views: "987",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Nanjing%20velvet%20flower%20exhibition%20traditional%20Chinese%20art&sign=7ab3daeb5cbb7bc9d2293c9de8454271"
  }
];

// 绒花旅游数据
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
  }
];

// 绒花课程数据
const courseItems = [
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
  }
];

export default function Home() {
  return (
    <div className="container max-w-[800px] mx-auto px-4">
      <Header title="非遗绒花文化传承" />
      
      <QuickNav />
      
      <Slider />
      
      <Section title="热门标签">
        <div className="tags flex flex-wrap gap-3 my-4">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </Section>
      
       <Section title="热门资讯" moreLink="/news">
        <div className="card-list grid grid-cols-1 md:grid-cols-2 gap-4">
          {newsItems.map(item => (
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
      
      <Section title="绒花文化旅游" moreLink="/travel">
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
      
      <Section title="绒花制作课程" moreLink="/courses">
        <div className="card-list grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseItems.map(item => (
            <Card 
              key={item.id}
              type="course"
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.desc}
              footerLeft={item.duration}
              footerRight={item.price}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}