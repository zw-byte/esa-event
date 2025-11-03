import React from 'react';

function Features() {
  const features = [
    {
      icon: 'fas fa-book',
      title: 'ESA使用教程',
      description: 'ESA产品相关的使用教程，从入门到进阶的完整实践指南',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'fas fa-code',
      title: '技术开发实践',
      description: '基于ESA产品的技术开发实践、场景应用，分享真实项目经验',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'fas fa-heart',
      title: '使用体验心得',
      description: 'ESA产品使用的体验与心得，对比其他解决方案的优劣分析',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'fas fa-balance-scale',
      title: '横轴对比',
      description: '与业界主流边缘加速解决方案的全维度对比测试，用数据说话',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'fas fa-flask',
      title: '性能测试报告',
      description: '详细的性能测试数据，包括延迟、吞吐量、稳定性等指标对比',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'fas fa-globe-asia',
      title: '出海场景应用',
      description: '跨境业务场景下的ESA应用实践，解决海外访问优化问题',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="活动介绍" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ESA征文主题
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            面向所有开发者、IT从业人员、高校学生，分享你的ESA使用体验与评测
            <br />
            <span className="text-blue-600 font-semibold">长文图文、短视频、实验报告，中英文皆可</span>
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
              <i className="fas fa-users text-blue-600 mr-2"></i>
              适合参与的开发者
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <i className="fas fa-server text-green-500 text-2xl mb-3"></i>
                <h4 className="font-bold text-gray-900 mb-2">后端/运维</h4>
                <p className="text-gray-600 text-sm">DevOps、架构师</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <i className="fas fa-laptop-code text-blue-500 text-2xl mb-3"></i>
                <h4 className="font-bold text-gray-900 mb-2">全栈开发</h4>
                <p className="text-gray-600 text-sm">前端性能优化工程师</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <i className="fas fa-graduation-cap text-purple-500 text-2xl mb-3"></i>
                <h4 className="font-bold text-gray-900 mb-2">高校学生</h4>
                <p className="text-gray-600 text-sm">IT从业人员</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <i className="fas fa-heart text-red-500 text-2xl mb-3"></i>
                <h4 className="font-bold text-gray-900 mb-2">科技爱好者</h4>
                <p className="text-gray-600 text-sm">喜欢尝新的开发者</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
