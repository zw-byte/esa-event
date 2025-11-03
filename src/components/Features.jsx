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
            阿里云ESA核心能力
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            聚焦解决全球访问高延迟、攻击频发与中心化架构性能瓶颈，
            适用于电商、内容社区、音视频、游戏、SaaS等多种业务场景
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
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              <i className="fas fa-star text-yellow-500 mr-2"></i>
              适用场景广泛
            </h3>
            <p className="text-blue-700 text-lg">
              适配网站与API的跨地域优化，帮助电商、内容社区、音视频、游戏、SaaS等业务
              在全球范围内降低时延、提升稳定性并抵御攻击
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
