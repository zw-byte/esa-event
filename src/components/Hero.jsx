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
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight relative tracking-wider">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent animate-pulse">
              「玩透ESA」
            </span>
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-80"></span>
          </span>
          <br />
          <span className="relative inline-block mt-4">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
              有奖征文活动
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 rounded-full opacity-60 animate-pulse"></div>
          </span>
          
          {/* 装饰性元素 */}
          <div className="absolute -top-8 -left-8 w-16 h-16 border-4 border-yellow-300 rounded-full opacity-30 animate-spin"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 -left-12 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
          <div className="absolute top-1/4 -right-8 w-3 h-3 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </h1>
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-300 mb-4 leading-relaxed">
            实战征文重磅来袭！
          </h2>
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-300 mb-4 leading-relaxed">
            用数据说话，优质稿获10TB ESA 基础版流量包！
          </h2>
          <p className="text-sm md:text-base text-blue-200 mb-10 leading-relaxed font-bold tracking-wider">
            参与即有奖，ESA基础版流量包、定制礼品、成为"ESA先锋成员"、官方署名转载...超多福利，等你来拿
          </p>
          
          <div className="space-y-4 max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium">
              阿里云ESA边缘安全加速
            </p>
            <p className="text-lg md:text-xl text-blue-200 leading-snug">
              集成CDN加速、DDoS防护、WAF安全防护于一体
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
            { icon: 'fas fa-trophy', number: '超大加量包', label: '奖励丰厚' },
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
