import React from 'react';

function Rules() {
  const rules = [
    {
      icon: 'fas fa-user-check',
      title: '参与资格',
      content: '面向所有技术从业者、学生、研究人员等，不限年龄和工作经验'
    },
    {
      icon: 'fas fa-file-alt',
      title: '文章要求',
      content: '原创技术文章，字数不少于2000字，需包含实际案例或代码示例'
    },
    {
      icon: 'fas fa-tags',
      title: '主题范围',
      content: '围绕ESA相关技术，包括安全防护、性能优化、架构设计等方向'
    },
    {
      icon: 'fas fa-upload',
      title: '提交方式',
      content: '通过官方平台提交，支持Markdown格式，需包含完整的技术方案'
    },
    {
      icon: 'fas fa-calendar-check',
      title: '截止时间',
      content: '活动截止日期前提交有效，逾期提交将不参与评选'
    },
    {
      icon: 'fas fa-gavel',
      title: '评选标准',
      content: '技术深度、创新性、实用性、文章质量等多维度综合评估'
    }
  ];

  return (
    <section id="参与规则" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            参与规则
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            简单明了的参与规则，让每个人都能轻松参与，公平公正的评选机制
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
        
        {/* 评选流程 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            评选流程
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '作品提交', desc: '参与者提交原创技术文章' },
              { step: '02', title: '初步筛选', desc: '技术团队进行初步审核' },
              { step: '03', title: '专家评审', desc: '行业专家进行专业评估' },
              { step: '04', title: '结果公布', desc: '公布获奖名单并颁发奖励' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rules;
