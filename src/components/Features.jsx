import React from 'react';

function Features() {
  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: '边缘安全防护',
      description: '分享ESA在DDoS防护、Web应用防火墙、Bot管理等安全防护方面的实践经验',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'fas fa-rocket',
      title: '性能加速优化',
      description: '探讨CDN加速、智能路由、缓存策略等性能优化技术的应用与实践',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'fas fa-globe',
      title: '全球网络覆盖',
      description: '分享全球边缘节点部署、跨地域访问优化等网络架构设计经验',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'fas fa-chart-line',
      title: '监控与分析',
      description: '讨论实时监控、数据分析、性能诊断等运维管理最佳实践',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'fas fa-cogs',
      title: '技术架构设计',
      description: '分享ESA技术架构、微服务设计、容器化部署等技术方案',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'fas fa-lightbulb',
      title: '创新应用场景',
      description: '探索ESA在新兴场景下的创新应用，如IoT、边缘计算等领域',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="活动介绍" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            征文主题方向
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们欢迎围绕边缘安全加速(ESA)技术的各个方面进行深入分享，
            包括但不限于以下主题方向
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
              特别鼓励原创性内容
            </h3>
            <p className="text-blue-700 text-lg">
              我们特别欢迎基于真实项目经验的技术分享、问题解决方案、
              性能优化案例以及创新应用实践等原创性内容
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
