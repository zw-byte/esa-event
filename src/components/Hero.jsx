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
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
              有奖征文活动
            </span>
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
            用数据说话，赢丰厚奖品！
          </h2>
          <p className="text-sm md:text-base text-blue-200 mb-10 leading-relaxed font-bold tracking-wider">
            参与即有奖,ESA基础版流量包、定制礼品、成为"ESA先锋成员"、官方署名转载...超多福利,等你来拿
          </p>
          
          <div className="space-y-4 max-w-5xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
            <h3 className="text-2xl md:text-3xl text-yellow-300 leading-relaxed font-bold tracking-wide">
              阿里云 ESA 边缘安全加速
            </h3>
            <p className="text-xl md:text-2xl text-blue-100 leading-snug font-semibold">
              一站式边缘安全 · 极速加速 · 全面防护
            </p>
            <p className="text-base md:text-lg text-blue-200 leading-relaxed">
              CDN加速 + DDoS防护 + WAF安全,三位一体守护您的业务
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a 
            href="#esa-contact"
            className="btn-primary text-lg px-10 py-4 inline-flex items-center"
          >
            <i className="fas fa-pen-fancy mr-2"></i>
            立即投稿
          </a>
        </div>
        
        {/* ESA技术标识 */}
        <div className="mb-12">
          <a 
            href="https://help.aliyun.com/zh/edge-security-acceleration/esa/user-guide/what-is-functions-and-pages/?spm=5176.29099518.console-base_help.dexternal.52bc2067xwzsF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300 cursor-pointer"
          >
            <i className="fas fa-bolt text-yellow-400 mr-3 text-xl"></i>
            <span className="text-white font-semibold text-lg">本站点由 AI 生成，部署在 ESA 函数和 Pages</span>
          </a>
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
