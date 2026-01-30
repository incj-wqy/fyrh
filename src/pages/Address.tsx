import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { MapPin, Edit, Trash2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

// 地址数据类型
interface Address {
  id: string;
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  address: string;
  isDefault: boolean;
}

export default function AddressPage() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      name: '张小花',
      phone: '138****1234',
      province: '江苏省',
      city: '南京市',
      district: '秦淮区',
      address: '夫子庙街道健康路123号',
      isDefault: true
    },
    {
      id: '2',
      name: '李小明',
      phone: '139****5678',
      province: '江苏省',
      city: '苏州市',
      district: '姑苏区',
      address: '平江路历史街区12号',
      isDefault: false
    }
  ]);
  
  // 设置默认地址
  const setDefaultAddress = (id: string) => {
    setAddresses(prevAddresses => 
      prevAddresses.map(address => ({
        ...address,
        isDefault: address.id === id
      }))
    );
    toast('已设置为默认地址');
  };
  
  // 删除地址
  const deleteAddress = (id: string) => {
    // 如果要删除的是默认地址，且还有其他地址，则将第一个地址设为默认
    const isDeletingDefault = addresses.find(a => a.id === id)?.isDefault;
    let newAddresses = addresses.filter(address => address.id !== id);
    
    if (isDeletingDefault && newAddresses.length > 0) {
      newAddresses[0] = { ...newAddresses[0], isDefault: true };
    }
    
    setAddresses(newAddresses);
    toast('地址已删除');
  };
  
  // 编辑地址
  const editAddress = (id: string) => {
    toast('编辑地址功能开发中');
    // 这里可以添加实际的编辑地址逻辑
  };
  
  // 添加新地址
  const addNewAddress = () => {
    toast('添加新地址功能开发中');
    // 这里可以添加实际的添加新地址逻辑
  };

  return (
    <div className="container max-w-[800px] mx-auto px-4 pb-20">
      <Header title="非遗绒花 - 收货地址" />
      
      {/* 地址列表 */}
      {addresses.length > 0 ? (
        <div className="space-y-4">
          {addresses.map(address => (
            <motion.div 
              key={address.id}
              className="bg-white rounded-[12px] p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)] relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* 默认地址标记 */}
              {address.isDefault && (
                <div className="absolute top-4 left-4 bg-[#d03b3b] text-white text-xs px-2 py-0.5 rounded-full z-10">
                  默认
                </div>
              )}
              
              {/* 地址信息 */}
              <div className="pt-2">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <h4 className="font-medium text-[#5c3a21]">{address.name}</h4>
                    <span className="text-sm text-[#8c7355] ml-4">{address.phone}</span>
                  </div>
                  
                  {/* 操作按钮 */}
                  <div className="flex items-center gap-3">
                    {!address.isDefault && (
                      <button 
                        onClick={() => setDefaultAddress(address.id)}
                        className="text-xs text-[#8c7355] hover:text-[#d03b3b] transition-colors"
                      >
                        设为默认
                      </button>
                    )}
                    <button 
                      onClick={() => editAddress(address.id)}
                      className="text-[#8c7355] hover:text-[#d03b3b] transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => deleteAddress(address.id)}
                      className="text-[#8c7355] hover:text-[#d03b3b] transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-[#a52a2a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#5c3a21]">
                    {address.province}{address.city}{address.district}{address.address}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <div className="w-24 h-24 mb-4 text-[#d03b3b]/30">
            <MapPin className="w-full h-full" />
          </div>
          <p className="text-[#8c7355] mb-4">暂无收货地址</p>
          <button 
            onClick={addNewAddress}
            className="px-5 py-2 bg-[#d03b3b] text-white rounded-full hover:bg-[#a52a2a] transition-colors"
          >
            添加收货地址
          </button>
        </div>
      )}
      
      {/* 添加新地址按钮 */}
      {addresses.length > 0 && (
        <motion.button 
          onClick={addNewAddress}
          className="w-full mt-6 py-3 bg-[#fffaf0] text-[#d03b3b] font-medium rounded-[12px] hover:bg-[#f0e6d9] transition-colors shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          + 添加新地址
        </motion.button>
      )}
    </div>
  );
}