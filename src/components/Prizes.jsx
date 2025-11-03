import React from 'react';

function Prizes() {
  const prizes = [
    {
      rank: '基础版代金券',
      count: '所有参与者',
      prize: '1个月基础版等值',
      bonus: '可抵扣超量流量费用',
      icon: 'fas fa-ticket-alt',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      borderColor: 'border-blue-300'
    },
    {
      rank: '高级版代金券',
      count: '高阅读量内容',
      prize: '1个月高级版等值',
      bonus: '更多功能权限体验',
      icon: 'fas fa-crown',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-300'
    },
    {
      rank: '多次参与',
      count: '不限次数',
      prize: '每周结算发放',
      bonus: '发布越多，机会越多',
      icon: 'fas fa-sync-alt',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      borderColor: 'border-green-300'
    },
    {
      rank: '零门槛参与',
      count: '所有开发者',
      prize: '简单2步操作',
      bonus: '接入门槛低，适配性强',
      icon: 'fas fa-users',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-violet-50',
      borderColor: 'border-purple-300'
    }
  ];

  return (
    <section id="奖项设置" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            体验ESA，分享你的推荐理由
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            无论是出海业务、跨地域访问优化，还是安全防护需求，分享你的ESA使用体验
            <br />
            <span className="text-blue-600 font-semibold">让更多开发者了解边缘计算的价值</span>
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
                
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  {prize.prize}
                </div>
                
                <div className="text-sm text-gray-600 leading-relaxed">
                  {prize.bonus}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 参与优势 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <i className="fas fa-lightbulb text-yellow-500 mr-3"></i>
              推荐ESA的理由
            </h3>
            <p className="text-gray-600">分享你的真实体验，帮助更多开发者做出明智选择</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shipping-fast text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">出海加速</h4>
              <p className="text-gray-600 text-sm">跨境业务访问优化，解决海外用户访问慢的问题</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">安全防护</h4>
              <p className="text-gray-600 text-sm">DDoS、WAF一体化防护，比单独购买更经济</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">性能提升</h4>
              <p className="text-gray-600 text-sm">智能缓存和路由，显著提升网站响应速度</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cogs text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">易于集成</h4>
              <p className="text-gray-600 text-sm">简单DNS配置，无需复杂的代码改动</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
