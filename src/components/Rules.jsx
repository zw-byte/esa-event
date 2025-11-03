import React from 'react';

function Rules() {
  const rules = [
    {
      icon: 'fas fa-edit',
      title: '第一步：发布推荐',
      content: '在任一社交平台发布推荐ESA的帖子，配1张包含ESA元素的图片'
    },
    {
      icon: 'fas fa-paper-plane',
      title: '第二步：提交领取',
      content: '前往官方活动文档页面按要求提交，即可领取当周福利'
    },
    {
      icon: 'fas fa-users',
      title: '参与资格',
      content: '面向所有开发者，不限年龄、工作经验和技术背景'
    },
    {
      icon: 'fas fa-sync-alt',
      title: '参与次数',
      content: '任务不限次数，每周结算发放，发布越多机会越多'
    },
    {
      icon: 'fas fa-chart-line',
      title: '奖励机制',
      content: '基础版代金券人人可得，高阅读量内容有机会获得高级版'
    },
    {
      icon: 'fas fa-link',
      title: '必要链接',
      content: '推荐内容需附上官方领取链接：http://s.tb.cn/e6.0Fu67m'
    }
  ];

  return (
    <section id="参与规则" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            参与方式
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            简单2步即可参与，零门槛体验阿里云ESA边缘加速与安全防护能力
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-200"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <i className={`${rule.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {rule.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {rule.content}
              </p>
            </div>
          ))}
        </div>
        
        {/* 参与流程 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            参与流程
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '发布推荐', desc: '在常用平台发布推荐ESA的内容' },
              { step: '02', title: '配图要求', desc: '包含1张ESA元素图片（截图/测试图等）' },
              { step: '03', title: '附上链接', desc: '添加官方领取链接到推荐内容中' },
              { step: '04', title: '提交领取', desc: '前往官方页面提交并领取代金券' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rules;
