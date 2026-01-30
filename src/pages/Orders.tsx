import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { ShoppingBag, Calendar, MapPin, Truck, CheckCircle, AlertCircle, MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';

// 订单状态类型
type OrderStatus = 'all' | 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';

// 订单数据类型
interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: OrderItem[];
  totalAmount: string;
  status: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
  statusText: string;
  statusColor: string;
  address?: string;
}

interface OrderItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

export default function Orders() {
  const [activeTab, setActiveTab] = useState<OrderStatus>('all');
  
  // 模拟订单数据
  const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      orderNumber: 'ORD-20231020-001',
      date: '2023-10-20',
      items: [
        {
          id: '1',
          name: '凤凰于飞绒花发簪',
          price: '¥268',
          quantity: 1,
          image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=phoenix%20velvet%20flower%20hairpin%20traditional%20chinese%20hair%20ornament&sign=a8a85ec6a38133b24e3deec1d68b5661'
        }
      ],
      totalAmount: '¥268',
      status: 'shipped',
      statusText: '已发货',
      statusColor: 'text-amber-500',
      address: '江苏省南京市秦淮区夫子庙街道'
    },
    {
      id: '2',
      orderNumber: 'ORD-20231015-002',
      date: '2023-10-15',
      items: [
        {
          id: '2',
          name: '高级绒花工艺课程',
          price: '¥399',
          quantity: 1,
          image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=advanced%20velvet%20flower%20craft%20course%20intricate%20design&sign=8cf6610ed640ffab9431c649e8d92d36'
        }
      ],
      totalAmount: '¥399',
      status: 'completed',
      statusText: '已完成',
      statusColor: 'text-green-500'
    },
    {
      id: '3',
      orderNumber: 'ORD-20231010-003',
      date: '2023-10-10',
      items: [
        {
          id: '3',
          name: '南京绒花制作体验一日游',
          price: '¥298',
          quantity: 2,
          image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=velvet%20flower%20workshop%20experience%20Nanjing%20traditional%20craft&sign=871e4144f9428e9d818d41cc7991a644'
        }
      ],
      totalAmount: '¥596',
      status: 'paid',
      statusText: '已支付',
      statusColor: 'text-blue-500'
    },
    {
      id: '4',
      orderNumber: 'ORD-20231005-004',
      date: '2023-10-05',
      items: [
        {
          id: '4',
          name: '牡丹花开绒花胸针',
          price: '¥198',
          quantity: 1,
          image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=peony%20flower%20velvet%20brooch%20traditional%20chinese%20accessory&sign=18db242f2aae3d742816986081deb8f2'
        }
      ],
      totalAmount: '¥198',
      status: 'cancelled',
      statusText: '已取消',
      statusColor: 'text-gray-500'
    }
  ]);
  
  // 根据当前选中的标签过滤订单
  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeTab);
  
   // 取消订单
   const cancelOrder = (orderId: string) => {
     // 实际项目中这里应该调用API取消订单
     setOrders(prevOrders => 
       prevOrders.map(order => 
         order.id === orderId ? { ...order, status: 'cancelled', statusText: '已取消', statusColor: 'text-gray-500' } : order
       )
     );
     toast('订单已取消');
   };
  
   // 查看物流
   const trackOrder = (orderId: string) => {
     // 实际项目中这里应该跳转到物流详情页
     toast('查看物流信息：您的订单已由顺丰快递揽收，运单号：SF1234567890');
   };
  
   // 确认收货
   const confirmOrder = (orderId: string) => {
     // 实际项目中这里应该调用API确认收货
     setOrders(prevOrders => 
       prevOrders.map(order => 
         order.id === orderId ? { ...order, status: 'completed', statusText: '已完成', statusColor: 'text-green-500' } : order
       )
     );
     toast('已确认收货，感谢您的购买！');
   };
  
   // 再次购买
   const buyAgain = (orderId: string) => {
     // 实际项目中这里应该将商品添加到购物车
     const order = orders.find(o => o.id === orderId);
     if (order) {
       toast(`已将${order.items[0].name}添加到购物车`);
     }
   };

  // 检查URL参数，处理从其他页面跳转过来的购买请求
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action');
    const itemId = urlParams.get('itemId');
    const itemType = urlParams.get('itemType');
    const price = urlParams.get('price');
    
    if (action === 'buyNow' && itemId && itemType && price) {
      // 实际项目中这里应该创建一个新订单并跳转到订单确认页
      toast(`已为您创建${itemType === 'product' ? '商品' : itemType === 'course' ? '课程' : '旅游'}订单，请在订单列表查看`);
    }
  }, []);

  return (
    <div className="container max-w-[800px] mx-auto px-4 pb-20">
      <Header title="非遗绒花 - 我的订单" />
      
      {/* 订单状态标签 */}
      <div className="flex border-b border-[#f0e6d9] mb-5 overflow-x-auto scrollbar-hide">
        {[
          { key: 'all', label: '全部' },
          { key: 'pending', label: '待付款' },
          { key: 'paid', label: '待发货' },
          { key: 'shipped', label: '待收货' },
          { key: 'completed', label: '已完成' },
          { key: 'cancelled', label: '已取消' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as OrderStatus)}
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
      
      {/* 订单列表 */}
      {filteredOrders.length > 0 ? (
        <div className="space-y-5">
          {filteredOrders.map(order => (
            <motion.div 
              key={order.id}
              className="bg-white rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* 订单头部 */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#f0e6d9]">
                <div className="flex items-center">
                  <ShoppingBag className="w-4 h-4 text-[#d03b3b] mr-2" />
                  <span className="text-sm text-[#5c3a21]">{order.orderNumber}</span>
                </div>
                <span className={`font-medium ${order.statusColor}`}>{order.statusText}</span>
              </div>
              
              {/* 订单商品 */}
              <div className="px-5 py-4">
                {order.items.map(item => (
                  <div key={item.id} className="flex py-2">
                    <div className="w-20 h-20 bg-gray-100 rounded-[6px] overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <h4 className="font-medium text-[#5c3a21] line-clamp-2">{item.name}</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-[#d03b3b] font-bold">{item.price}</span>
                        <span className="text-sm text-[#8c7355]">x{item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 订单信息 */}
              {order.address && (
                <div className="px-5 py-3 bg-[#f9f3ea] flex items-start">
                  <MapPin className="w-4 h-4 text-[#a52a2a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#5c3a21]">收货地址：{order.address}</span>
                </div>
              )}
              
              {/* 订单底部 */}
              <div className="flex justify-between items-center px-5 py-4 border-t border-[#f0e6d9]">
                <div className="text-sm text-[#8c7355] flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{order.date}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-[#8c7355] mr-2">实付：</span>
                  <span className="text-lg font-bold text-[#d03b3b]">{order.totalAmount}</span>
                </div>
              </div>
              
              {/* 订单操作 */}
              <div className="flex justify-end gap-3 px-5 py-4 border-t border-[#f0e6d9]">
                {order.status === 'pending' && (
                  <>
                    <button 
                      onClick={() => cancelOrder(order.id)}
                      className="px-3 py-1.5 text-sm border border-[#8c7355] text-[#8c7355] rounded-full hover:bg-[#8c7355]/5 transition-colors"
                    >
                      取消订单
                    </button>
                    <button className="px-3 py-1.5 text-sm bg-[#d03b3b] text-white rounded-full hover:bg-[#a52a2a] transition-colors">
                      立即付款
                    </button>
                  </>
                )}
                
                {order.status === 'shipped' && (
                  <>
                    <button 
                      onClick={() => trackOrder(order.id)}
                      className="px-3 py-1.5 text-sm border border-[#8c7355] text-[#8c7355] rounded-full hover:bg-[#8c7355]/5 transition-colors"
                    >
                      查看物流
                    </button>
                    <button 
                      onClick={() => confirmOrder(order.id)}
                      className="px-3 py-1.5 text-sm bg-[#d03b3b] text-white rounded-full hover:bg-[#a52a2a] transition-colors"
                    >
                      确认收货
                    </button>
                  </>
                )}
                
                {order.status === 'completed' && (
                  <>
                    <button className="px-3 py-1.5 text-sm border border-[#8c7355] text-[#8c7355] rounded-full hover:bg-[#8c7355]/5 transition-colors">
                      评价
                    </button>
                    <button 
                      onClick={() => buyAgain(order.id)}
                      className="px-3 py-1.5 text-sm bg-[#d03b3b] text-white rounded-full hover:bg-[#a52a2a] transition-colors"
                    >
                      再次购买
                    </button>
                  </>
                )}
                
                {(order.status === 'paid' || order.status === 'cancelled') && (
                  <button className="px-3 py-1.5 text-sm border border-[#8c7355] text-[#8c7355] rounded-full hover:bg-[#8c7355]/5 transition-colors">
                    查看详情
                  </button>
                )}
                
                <button className="text-[#8c7355]">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <div className="w-24 h-24 mb-4 text-[#d03b3b]/30">
            <ShoppingBag className="w-full h-full" />
          </div>
          <p className="text-[#8c7355] mb-4">暂无相关订单</p>
          <button 
            onClick={() => window.location.href = '/shop'}
            className="px-5 py-2 bg-[#d03b3b] text-white rounded-full hover:bg-[#a52a2a] transition-colors"
          >
            去逛逛
          </button>
        </div>
      )}
    </div>
  );
}