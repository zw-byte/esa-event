import React from 'react';

function Prizes() {
  const prizes = [
    {
      rank: '一等奖',
      count: '1名',
      prize: '现金奖励 ¥20,000',
      bonus: '+ ESA高级认证证书 + 技术大会演讲机会',
      icon: 'fas fa-crown',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-300'
    },
    {
      rank: '二等奖',
      count: '3名',
      prize: '现金奖励 ¥10,000',
      bonus: '+ ESA专业认证证书 + 技术交流机会',
      icon: 'fas fa-medal',
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gradient-to-br from-gray-50 to-slate-50',
      borderColor: 'border-gray-300'
    },
    {
      rank: '三等奖',
      count: '5名',
      prize: '现金奖励 ¥5,000',
      bonus: '+ ESA基础认证证书 + 技术资料包',
      icon: 'fas fa-award',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      borderColor: 'border-orange-300'
    },
    {
      rank: '优秀奖',
      count: '10名',
      prize: '现金奖励 ¥2,000',
      bonus: '+ 精美纪念品 + 技术社区VIP',
      icon: 'fas fa-star',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      borderColor: 'border-blue-300'
    }
  ];

  return (
    <section id="奖项设置" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            丰厚奖项等你来拿
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            总奖金池超过50万元，多重奖励机制，让每一份优质内容都能得到应有的回报
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
        
        {/* 特别奖励 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <i className="fas fa-gift text-purple-600 mr-3"></i>
              特别奖励
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">最佳人气奖</h4>
              <p className="text-gray-600">获得最多点赞和评论的文章，额外奖励 ¥5,000</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">最佳创新奖</h4>
              <p className="text-gray-600">最具创新性和前瞻性的技术方案，额外奖励 ¥5,000</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-code text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">最佳实践奖</h4>
              <p className="text-gray-600">最具实用价值的实践案例分享，额外奖励 ¥5,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
