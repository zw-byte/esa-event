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
            轻松参与，即刻领券
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            零门槛体验阿里云ESA，简单2步即可领取代金券，高阅读量内容还有机会获得更多福利
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
              <i className="fas fa-gift text-purple-600 mr-3"></i>
              参与优势
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">活动持续进行</h4>
              <p className="text-gray-600">自7月启动至今持续进行，随时参与随时领取</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">接入门槛低</h4>
              <p className="text-gray-600">简单配置即可体验全球加速与安全防护能力</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">全球覆盖</h4>
              <p className="text-gray-600">3200+全球边缘节点，覆盖主要国家和地区</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
