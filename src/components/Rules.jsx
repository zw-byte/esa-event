import React from 'react';

function Rules() {
  const rules = [
    {
      icon: 'fas fa-globe',
      title: '方式一：任意平台投稿',
      content: '在任一公开平台发布文章，需显著标注参与本活动并附上官方活动链接'
    },
    {
      icon: 'fas fa-cloud',
      title: '方式二：阿里云社区',
      content: '在阿里云社区PC端发布不少于800字文章，标题前加上「玩透ESA」'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
              
              {/* 参考标注 */}
              {index === 0 && (
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                  ● 参考标注：本文参与"ESA 征文活动"，活动详情见：<a href="https://esa-website.40154c26.er.aliyun-esa.net/?spm=5176.29099518.0.0.25a12067rM25wn" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">https://esa-website.40154c26.er.aliyun-esa.net/?spm=5176.29099518.0.0.25a12067rM25wn</a>
                </p>
              )}
            </div>
          ))}
        </div>
        
        {/* 版权说明 */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-12 border border-blue-200">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-info-circle text-white text-lg"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">版权说明</h3>
              <p className="text-blue-800 leading-relaxed">
                作者可以分享文章链接至各平台，获得更多曝光。作品版权归作者所有，阿里云 ESA 拥有非商业性展示权。
              </p>
            </div>
          </div>
        </div>
        
        {/* 投稿平台示例 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            推荐发布平台
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: '个人博客', icon: 'fas fa-blog', url: '#' },
              { name: '微信公众号', icon: 'fab fa-weixin', url: 'https://mp.weixin.qq.com' },
              { name: 'V2EX', icon: 'fas fa-comments', url: 'https://www.v2ex.com' },
              { name: 'CSDN', icon: 'fas fa-code', url: 'https://blog.csdn.net' },
              { name: '掘金', icon: 'fas fa-gem', url: 'https://juejin.cn' },
              { name: '知乎专栏', icon: 'fas fa-question-circle', url: 'https://zhuanlan.zhihu.com' },
              { name: 'B站专栏', icon: 'fab fa-bilibili', url: 'https://www.bilibili.com/read/home' },
              { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com' },
              { name: 'SegmentFault', icon: 'fas fa-terminal', url: 'https://segmentfault.com' },
              { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com' },
              { name: 'Twitter/X', icon: 'fab fa-twitter', url: 'https://twitter.com' },
              { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://www.facebook.com' },
              { name: '开源中国', icon: 'fas fa-open-source', url: 'https://www.oschina.net' }
            ].map((platform, index) => (
              <a 
                key={index} 
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <i className={`${platform.icon} text-2xl text-blue-600 mb-2 group-hover:text-blue-700 transition-colors`}></i>
                <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{platform.name}</div>
              </a>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              <i className="fas fa-info-circle text-blue-500 mr-2"></i>
              文章正文需显著标注参与本活动，并附上官网活动文档链接
            </p>
            <div className="bg-white rounded-xl p-4 inline-block">
              <code className="text-sm text-gray-800">
                本文参与"ESA征文活动"，活动详情见：[活动链接]
              </code>
            </div>
          </div>
        </div>
        
        {/* 推特发文示例 */}
        <div className="mt-8 bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            <i className="fab fa-twitter text-blue-400 mr-3"></i>
            推特发文示例
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 英文示例 */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-globe mr-2 text-blue-500"></i>
                English Example
              </h4>
              <div className="bg-white rounded-xl p-4 border-l-4 border-blue-500">
                <p className="text-gray-800 mb-3">
                  🚀 Just published my comprehensive comparison: "ESA vs Leading Edge Platforms - Performance Benchmark Report"
                </p>
                <p className="text-gray-800 mb-3">
                  📊 Real data shows ESA's competitive advantages:
                  • Global latency optimization
                  • Integrated security features
                  • Cost-effective solutions
                </p>
                <p className="text-gray-800 mb-3">
                  Participating in #ESABenchmark contest for ESA Premium + Pioneer Member status!
                </p>
                <p className="text-blue-600 font-medium">
                  Details: [活动链接] #EdgeComputing #CDN #WebPerformance
                </p>
              </div>
            </div>
            
            {/* 中文示例 */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-flag mr-2 text-red-500"></i>
                中文示例
              </h4>
              <div className="bg-white rounded-xl p-4 border-l-4 border-red-500">
                <p className="text-gray-800 mb-3">
                  🔥 刚发布了ESA与主流边缘加速产品的全维度对比测试报告！
                </p>
                <p className="text-gray-800 mb-3">
                  📈 实测数据证明ESA在以下方面表现优异：
                  • 全球延迟优化 
                  • 安全防护集成
                  • 成本效益比
                </p>
                <p className="text-gray-800 mb-3">
                  参与 #ESA征文 活动，优质内容可获ESA高级版+先锋成员！
                </p>
                <p className="text-blue-600 font-medium">
                  活动详情：[活动链接] #边缘计算 #CDN #性能优化
                </p>
              </div>
            </div>
          </div>
          
          {/* 发文技巧 */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
              推特发文技巧
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-hashtag text-white"></i>
                </div>
                <h5 className="font-bold text-gray-900 mb-2">使用标签</h5>
                <p className="text-gray-600 text-sm">#ESA征文 #EdgeComputing #CDN #WebPerformance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-chart-bar text-white"></i>
                </div>
                <h5 className="font-bold text-gray-900 mb-2">突出数据</h5>
                <p className="text-gray-600 text-sm">分享具体的性能测试数据和对比结果</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-link text-white"></i>
                </div>
                <h5 className="font-bold text-gray-900 mb-2">附上链接</h5>
                <p className="text-gray-600 text-sm">包含活动链接和你的详细文章链接</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rules;
