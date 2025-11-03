import React from 'react';

function Rules() {
  const rules = [
    {
      icon: 'fas fa-globe',
      title: '方式一：任意平台投稿',
      content: '在任一公开平台发布文章，需显著标注参与本活动并附上官网活动文档链接'
    },
    {
      icon: 'fas fa-cloud',
      title: '方式二：阿里云社区',
      content: '在阿里云社区PC端发布不少于800字文章，标题前加上「ESA横向测评」'
    },
    {
      icon: 'fas fa-book',
      title: 'ESA使用教程',
      content: 'ESA产品相关的使用教程，从入门到进阶的完整实践指南'
    },
    {
      icon: 'fas fa-code',
      title: '技术开发实践',
      content: '基于ESA产品的技术开发实践、场景应用，分享真实项目经验'
    },
    {
      icon: 'fas fa-heart',
      title: '使用体验心得',
      content: 'ESA产品使用的体验与心得，对比其他解决方案的优劣分析'
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Cloudflare对比',
      content: '与Cloudflare等竞品的全维度对比测试，用数据说话'
    }
  ];

  return (
    <section id="参与规则" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            投稿与发布规则
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            两种投稿方式任选其一，长文图文、短视频、实验报告，中英文皆可
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
        
        {/* 投稿平台示例 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            推荐发布平台
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: '个人博客', icon: 'fas fa-blog' },
              { name: '微信公众号', icon: 'fab fa-weixin' },
              { name: 'V2EX', icon: 'fas fa-comments' },
              { name: 'CSDN', icon: 'fas fa-code' },
              { name: '掘金', icon: 'fas fa-gem' },
              { name: '知乎专栏', icon: 'fas fa-question-circle' },
              { name: 'B站专栏', icon: 'fab fa-bilibili' },
              { name: 'GitHub', icon: 'fab fa-github' },
              { name: 'SegmentFault', icon: 'fas fa-terminal' },
              { name: 'YouTube', icon: 'fab fa-youtube' },
              { name: 'Facebook', icon: 'fab fa-facebook' },
              { name: '开源中国', icon: 'fas fa-open-source' }
            ].map((platform, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-4 shadow-sm">
                <i className={`${platform.icon} text-2xl text-blue-600 mb-2`}></i>
                <div className="text-sm font-medium text-gray-700">{platform.name}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              <i className="fas fa-info-circle text-blue-500 mr-2"></i>
              文章正文需显著标注参与本活动，并附上官网活动文档链接
            </p>
            <div className="bg-white rounded-xl p-4 inline-block">
              <code className="text-sm text-gray-800">
                本文参与"ESA 横向测评征文活动"，活动详情见：[活动链接]
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rules;
