import Header from '../components/Header';
import Section from '../components/Section';
import Category from '../components/Category';
import Product from '../components/Product';

// 分类数据
const categories = [
  { id: 1, icon: 'tshirt', label: '饰品' },
  { id: 2, icon: 'gift', label: '礼盒' },
  { id: 3, icon: 'tools', label: '材料' },
  { id: 4, icon: 'book', label: '教程' }
];

// 绒花精品数据
const featuredProducts = [
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
  },
  {
    id: 5,
    title: "绒花材料包（初级）",
    price: "¥88",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=beginner%20velvet%20flower%20making%20kit%20traditional%20craft%20supplies&sign=1e88b8dafbc1ff9bcf10ca4993d57365"
  },
  {
    id: 6,
    title: "绒花制作工具套装",
    price: "¥156",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=velvet%20flower%20making%20tools%20set%20traditional%20craft%20equipment&sign=c1155be762e9edeb3fd900bb952e7abe"
  },
  {
    id: 7,
    title: "如意祥云绒花挂饰",
    price: "¥138",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=chinese%20cloud%20pattern%20velvet%20flower%20hanging%20decor&sign=421e35d27fde081302bc47df74f1f52e"
  },
  {
    id: 8,
    title: "绒花艺术画《春满园》",
    price: "¥498",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=velvet%20flower%20art%20painting%20spring%20garden%20traditional%20chinese%20art&sign=3125e04f29a04c4f69905c345976ae00"
  }
];

// 热卖商品数据
const hotProducts = [
  {
    id: 1,
    title: "绒花入门体验套装",
    price: "¥128",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=beginner%20velvet%20flower%20experience%20kit%20complete%20set&sign=52da90233d4cab310f1e9956ce1dd297"
  },
  {
    id: 2,
    title: "古典绒花耳饰",
    price: "¥168",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=classical%20velvet%20flower%20earrings%20traditional%20chinese%20style&sign=ac680bf0d0bf7a1527cb6e908ee67765"
  }
];

export default function Shop() {
  return (
    <div className="container max-w-[800px] mx-auto px-4">
      <Header title="非遗绒花 - 商城" />
      
       {/* 分类导航 */}
      <div className="categories grid grid-cols-4 gap-2 my-4">
        {categories.map(category => (
          <Category 
            key={category.id}
            type="shop"
            icon={category.icon}
            label={category.label}
          />
        ))}
      </div>
      
      <Section title="绒花精品" moreLink="/products">
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
          {featuredProducts.map(product => (
            <Product 
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </Section>
      
      <Section title="热卖商品">
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
          {hotProducts.map(product => (
            <Product 
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}