import React from 'react';

function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight">
          「玩透ESA」有奖征文活动
        </h1>
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-300 mb-10 leading-relaxed">
            用数据说话，优质稿获ESA高级版！
          </h2>
          
          <div className="space-y-4 max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium">
              阿里云ESA边缘安全加速
            </p>
            <p className="text-lg md:text-xl text-blue-200 leading-snug">
              集成CDN加速、DDoS防护、WAF安全防护于一体
            </p>
            <p className="text-lg md:text-xl text-blue-200 leading-snug">
              与主流边缘加速产品实测对比，优质内容获ESA先锋成员+官方转载
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a 
            href="https://help.aliyun.com/zh/edge-security-acceleration/esa/product-overview/how-to-get-esa-for-free?spm=5176.29099518.console-base_help.dexternal.52bc20670w9iXX#1846164d47wbq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-4 inline-flex items-center"
          >
            <i className="fas fa-pen-fancy mr-2"></i>
            立即投稿
          </a>
        </div>
        
        {/* ESA技术标识 */}
        <div className="mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 backdrop-blur-sm">
            <i className="fas fa-bolt text-yellow-400 mr-3 text-xl"></i>
            <span className="text-white font-semibold text-lg">本站点由 AI 生成，部署在 ESA 函数和 Pages</span>
          </div>
        </div>
        
        {/* 统计数据 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: 'fas fa-chart-line', number: '横向评测', label: '数据说话' },
            { icon: 'fas fa-crown', number: '先锋成员', label: '优质内容' },
            { icon: 'fas fa-trophy', number: '高级版', label: '奖励丰厚' },
            { icon: 'fas fa-fire', number: '长期有效', label: '多劳多得' }
          ].map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm text-center">
              <i className={`${stat.icon} text-2xl text-yellow-400 mb-2`}></i>
              <div className="text-lg font-bold text-white mb-1">{stat.number}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
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
