import React from 'react';

function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <i className="fas fa-fire text-orange-400 mr-2"></i>
            <span className="text-white font-medium">热门活动进行中</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          ESA横向测评征文活动
          <br />
          <span className="gradient-text bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            用数据说话，优质稿获ESA高级版
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          ESA vs 主流边缘加速产品全维度实测对比，别吵了，上数据！
          <br />
          优质内容入选"ESA先锋成员"+官方署名转载
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="btn-primary text-lg px-10 py-4">
            <i className="fas fa-pen-fancy mr-2"></i>
            立即投稿
          </button>
          <button className="btn-secondary text-lg px-10 py-4">
            <i className="fas fa-info-circle mr-2"></i>
            了解详情
          </button>
        </div>
        
        {/* 统计数据 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: 'fas fa-chart-line', number: '实测对比', label: '数据说话' },
            { icon: 'fas fa-crown', number: '先锋成员', label: '优质内容' },
            { icon: 'fas fa-trophy', number: '高级版', label: '1个月奖励' },
            { icon: 'fas fa-fire', number: '长期有效', label: '多劳多得' }
          ].map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
              <i className={`${stat.icon} text-3xl text-yellow-400 mb-3`}></i>
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 滚动提示 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
}

export default Hero;
