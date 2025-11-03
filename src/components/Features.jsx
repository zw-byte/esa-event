import React from 'react';

function Features() {
  const features = [
    {
      icon: 'fas fa-route',
      title: '智能路由',
      description: '全球智能路由优化，自动选择最佳访问路径，降低延迟提升用户体验',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'fas fa-database',
      title: '内容缓存',
      description: '边缘缓存分发，静态和动态内容智能缓存，大幅提升访问速度',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'WAF防护',
      description: 'Web应用防火墙，实时防护SQL注入、XSS攻击等各类Web安全威胁',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'fas fa-shield-virus',
      title: 'DDoS防护',
      description: '分布式拒绝服务攻击防护，多层防护机制确保业务稳定运行',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'fas fa-user-shield',
      title: '访问控制',
      description: '精细化访问控制策略，支持地理位置、IP白名单等多维度访问管理',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'fas fa-chart-line',
      title: '全链路可观测',
      description: '实时监控分析，提供详细的性能指标和安全报告，助力业务优化',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="活动介绍" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            为什么选择阿里云ESA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            全球分布式边缘网络平台，聚焦解决跨地域访问高延迟、攻击频发与中心化计算性能瓶颈
            <br />
            <span className="text-blue-600 font-semibold">接入门槛低，适配网站与API的跨地域优化</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              <i className="fas fa-rocket text-blue-600 mr-2"></i>
              ESA vs 传统解决方案
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <i className="fas fa-tachometer-alt text-green-500 text-2xl mb-3"></i>
                <h4 className="font-bold text-gray-900 mb-2">性能优势</h4>
                <p className="text-gray-600 text-sm">智能路由算法，比传统CDN更快的全球访问速度</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <i className="fas fa-cogs text-blue-500 text-2xl mb-3"></i>
                <h4 className="font-bold text-gray-900 mb-2">一体化能力</h4>
                <p className="text-gray-600 text-sm">加速+安全+计算三合一，无需多厂商集成</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <i className="fas fa-dollar-sign text-purple-500 text-2xl mb-3"></i>
                <h4 className="font-bold text-gray-900 mb-2">成本优化</h4>
                <p className="text-gray-600 text-sm">统一平台管理，降低运维成本和技术复杂度</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
