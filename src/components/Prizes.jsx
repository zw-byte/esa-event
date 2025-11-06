import React from 'react';

function Prizes() {
  const prizes = [
    {
      rank: '流量包代金券',
      count: '参与有奖',
      prize: '50GB ESA基础版加量包',
      bonus: '只要发布便可得，多劳多得',
      icon: 'fas fa-ticket-alt',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      borderColor: 'border-blue-300'
    },
    {
      rank: '流量包代金券',
      count: '阅读量≥500',
      prize: '500GB ESA基础版加量包',
      bonus: '精美实物礼品',
      icon: 'fas fa-ticket-alt',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      borderColor: 'border-green-300'
    },
            {
              rank: '先锋成员+代金券',
              count: '阅读量≥1000',
              prize: '1TB ESA基础版加量包+定制礼品',
              bonus: '成为ESA先锋成员',
              icon: 'fas fa-star',
              color: 'from-purple-400 to-purple-600',
              bgColor: 'bg-gradient-to-br from-purple-50 to-violet-50',
              borderColor: 'border-purple-300'
            },
    {
      rank: '官方转载+代金券',
      count: '阅读量≥10000',
      prize: '10TB ESA基础版加量包+署名转载',
      bonus: '官方账号署名转发',
      icon: 'fas fa-crown',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-300'
    }
  ];

  return (
    <section id="奖项设置" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ESA 征文奖励机制
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            用数据说话，优质内容获得丰厚奖励。每位作者可投稿多篇，多劳多得
            <br />
            <span className="text-blue-600 font-semibold">成为ESA先锋成员，享受官方特权</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`${prize.bgColor} rounded-3xl p-8 border-2 ${prize.borderColor} card-hover relative overflow-hidden`}
            >
              {/* 背景装饰 */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
              
              <div className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${prize.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <i className={`${prize.icon} text-white text-3xl`}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {prize.rank}
                </h3>
                
                <div className="text-lg text-gray-600 mb-4">
                  {prize.count}
                </div>
                
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {prize.rank === '先锋成员+代金券' ? (
                    <>
                      <div>1TB ESA基础版加量包</div>
                      {prize.rank === '先锋成员+代金券' && (
                        <div className="text-xs text-gray-500 mb-2">
                          （有效期：1年）
                        </div>
                      )}
                      <div>定制礼品</div>
                    </>
                  ) : prize.rank === '官方转载+代金券' ? (
                    <>
                      <div>10TB ESA基础版加量包</div>
                      <div className="text-xs text-gray-500 mb-2">
                        （有效期：1年）
                      </div>
                      <div>署名转载</div>
                    </>
                  ) : (
                    <>
                      {prize.prize}
                      {prize.rank === '流量包代金券' && (
                        <div className="text-xs text-gray-500 mt-1">
                          （有效期：1年）
                        </div>
                      )}
                    </>
                  )}
                </div>
                
                <div className="text-sm text-gray-600 leading-relaxed">
                  {prize.bonus}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* ESA先锋成员特权 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <i className="fas fa-crown text-yellow-500 mr-3"></i>
              ESA 先锋成员特权
            </h3>
            <p className="text-gray-600">优质内容作者将成为ESA先锋成员，享受官方特权</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-id-card text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">官方展示</h4>
              <p className="text-gray-600 text-sm">
                官方文档页展示姓名/ID
                <br />
                获得官方认可
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-flask text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">内测优先</h4>
              <p className="text-gray-600 text-sm">
                优先参与新功能内测
                <br />
                第一时间体验新特性
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-share-alt text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">署名转载</h4>
              <p className="text-gray-600 text-sm">
                内容被官方账号署名转发
                <br />
                扩大影响力
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">更多特权</h4>
              <p className="text-gray-600 text-sm">持续享受更多专属特权和优先服务</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
