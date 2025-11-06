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
                  参考标注：本文参与"「 玩透 ESA 」有奖征文活动"，活动详情见：&lt;官方活动页面链接&gt;
                </p>
              )}
              
              {/* 阿里云社区链接 */}
              {index === 1 && (
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                  阿里云社区：
                  <a 
                    href="https://developer.aliyun.com/?spm=5176.28200048.nav-v2-dropdown-menu-3.d_main_3.6c0a1832UgpgFi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 underline ml-1"
                  >
                    https://developer.aliyun.com
                  </a>
                  <span className="ml-2">步骤：发布 — 写文章</span>
                </p>
              )}
            </div>
          ))}
        </div>
        
        {/* 稿件说明区块 */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 mb-8 border border-orange-200">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-exclamation-triangle text-white text-lg"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-orange-900 mb-2">稿件说明</h3>
              <p className="text-orange-800 leading-relaxed">
                同篇文章跨平台发布仅计数为1篇，按平台总数据参与评审，活动时间内发布的所有文章内容重复度需低于80%，否则不予累计数量。
              </p>
            </div>
          </div>
        </div>
        
        {/* 小贴士区块 */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-200">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-lightbulb text-white text-lg"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-900 mb-2">小贴士</h3>
              <div className="text-green-800 leading-relaxed">
                <p className="flex items-start mb-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  作者可以分享文章链接至各平台，获得更多曝光。
                </p>
                <p className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  每位作者可投稿多篇，按文章篇数获得参与奖励，多劳多得。
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 版权说明 */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-12 border border-blue-200">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-info-circle text-white text-lg"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">版权归属与授权</h3>
              <p className="text-blue-800 leading-relaxed">
                投稿作品的著作权归属于作者所有，阿里云 ESA 享有作品的使用权，有权将优秀作品收录至官网文档实践案例库、或发布于官方技术自媒体账号、活动页、官方博客站点等渠道进行宣传推广。投稿即视为同意主办⽅在合规范围内使⽤内容，不作商业转售。
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
              { name: 'CSDN', icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico', url: 'https://blog.csdn.net', isImage: true },
              { name: '掘金', icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg', url: 'https://juejin.cn', isImage: true },
              { name: '知乎专栏', icon: 'fab fa-zhihu', url: 'https://zhuanlan.zhihu.com' },
              { name: 'B站专栏', icon: 'fab fa-bilibili', url: 'https://www.bilibili.com/read/home' },
              { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com' },
              { name: 'SegmentFault', icon: 'fas fa-code', url: 'https://segmentfault.com' },
              { name: 'InfoQ', icon: 'fas fa-newspaper', url: 'https://www.infoq.cn' },
              { name: 'Linux', icon: 'fab fa-linux', url: 'https://linux.cn' },
              { name: 'Golang中文社区', icon: 'fas fa-code-branch', url: 'https://studygolang.com' },
              { name: '博客园', icon: 'fas fa-leaf', url: 'https://www.cnblogs.com' },
              { name: '51CTO', icon: 'fas fa-graduation-cap', url: 'https://blog.51cto.com' },
              { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com' },
              { name: 'Twitter/X', icon: 'fab fa-twitter', url: 'https://twitter.com' },
              { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://www.facebook.com' },
              { name: '开源中国', icon: 'https://static.oschina.net/new-osc/img/logo_new.svg', url: 'https://www.oschina.net', isImage: true }
            ].map((platform, index) => (
              <a 
                key={index} 
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                {platform.isImage ? (
                  <img src={platform.icon} alt={platform.name} className="w-8 h-8 mx-auto mb-2 object-contain" />
                ) : (
                  <i className={`${platform.icon} text-2xl text-blue-600 group-hover:text-blue-700 mb-2 transition-colors`}></i>
                )}
                <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{platform.name}</div>
              </a>
            ))}
          </div>
          
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                文章正文需显著标注参与本活动，并附上官网活动页面链接
              </p>
              <div className="bg-white rounded-xl p-4 inline-block">
                <code className="text-sm text-gray-800 whitespace-nowrap">
                  参考标注：本文参与"「 玩透 ESA 」有奖征文活动"，活动详情见：&lt;官方活动页面链接&gt;
                </code>
              </div>
            </div>
        </div>
        
        {/* 博客优质文章示例 */}
        <div className="mt-8 bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            <i className="fas fa-blog text-indigo-600 mr-3"></i>
            博客优质文章示例
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 性能对比类 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-chart-line mr-2 text-blue-600"></i>
                性能对比测试类
              </h4>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h5 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                ESA vs XX CDN 全维度性能对比测试报告
              </h5>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <span>通过真实数据对比ESA与XX CDN在全球节点延迟、安全防护、成本效益等方面的表现...</span>
                </p>
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>多维度性能指标对比（延迟、吞吐量、稳定性）</span>
                  </p>
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>真实数据图表展示（折线图、柱状图）</span>
                  </p>
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>客观分析优劣势，给出使用建议</span>
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">推荐指数 ⭐⭐⭐⭐⭐</span>
                  <span className="text-xs text-gray-500">阅读量易达标</span>
                </div>
              </div>
            </div>
            
            {/* 实战教程类 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-book-open mr-2 text-green-600"></i>
                实战教程类
              </h4>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h5 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  ESA vs XX CDN：全球CDN性能深度对比
                </h5>
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>完整的配置步骤（截图+代码）</span>
                  </p>
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>常见问题解决方案</span>
                  </p>
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>性能优化技巧分享</span>
                  </p>
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>实际效果对比（优化前后）</span>
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">推荐指数 ⭐⭐⭐⭐⭐</span>
                  <span className="text-xs text-gray-500">实用性强</span>
                </div>
              </div>
            </div>

            {/* 场景应用类 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-rocket mr-2 text-purple-600"></i>
                场景应用类
              </h4>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h5 className="text-lg font-bold text-gray-900 mb-3">
                  电商大促：ESA如何扛住流量洪峰
                </h5>
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>真实业务场景描述</span>
                  </p>
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>技术方案选型过程</span>
                  </p>
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>实施过程中的挑战与解决</span>
                  </p>
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>最终效果数据展示</span>
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full">推荐指数 ⭐⭐⭐⭐</span>
                  <span className="text-xs text-gray-500">案例价值高</span>
                </div>
              </div>
            </div>

            {/* 技术深度类 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-microscope mr-2 text-orange-600"></i>
                技术深度类
              </h4>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h5 className="text-lg font-bold text-gray-900 mb-3">
                  深入解析：ESA边缘计算架构设计
                </h5>
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>技术原理深度剖析</span>
                  </p>
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>架构设计思路分享</span>
                  </p>
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>与其他方案的技术对比</span>
                  </p>
                  <p className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span>未来发展趋势预测</span>
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full">推荐指数 ⭐⭐⭐⭐</span>
                  <span className="text-xs text-gray-500">专业度高</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 写作技巧 */}
          <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
              优质文章写作技巧
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-database text-white"></i>
                </div>
                <h5 className="font-bold text-gray-900 mb-2">数据说话</h5>
                <p className="text-gray-600 text-sm">用真实测试数据支撑观点，增加可信度</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-images text-white"></i>
                </div>
                <h5 className="font-bold text-gray-900 mb-2">图文并茂</h5>
                <p className="text-gray-600 text-sm">配合截图、图表，让内容更直观易懂</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-code text-white"></i>
                </div>
                <h5 className="font-bold text-gray-900 mb-2">代码示例</h5>
                <p className="text-gray-600 text-sm">提供完整可运行的代码，方便读者实践</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-bullseye text-white"></i>
                </div>
                <h5 className="font-bold text-gray-900 mb-2">结论明确</h5>
                <p className="text-gray-600 text-sm">给出清晰的使用建议和适用场景</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 征文示例 */}
        <div id="征文示例" className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            <i className="fas fa-newspaper text-indigo-600 mr-3"></i>
            征文示例
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 示例文章卡片 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-chart-line text-white text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">性能对比测试</h4>
                  <p className="text-sm text-gray-500">张**</p>
                </div>
              </div>
              <h5 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                ESA vs XX CDN 全维度性能对比测试报告
              </h5>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                通过真实数据对比ESA与XX CDN在全球节点延迟、安全防护、成本效益等方面的表现...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">CSDN</span>
                <span className="text-xs text-gray-500">阅读量: 1,250</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-book text-white text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">使用教程</h4>
                  <p className="text-sm text-gray-500">李**</p>
                </div>
              </div>
              <h5 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                ESA边缘安全加速从入门到实战
              </h5>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                详细介绍ESA的配置流程、最佳实践和常见问题解决方案，适合初学者快速上手...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">掘金</span>
                <span className="text-xs text-gray-500">阅读量: 890</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-heart text-white text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">使用体验</h4>
                  <p className="text-sm text-gray-500">王**</p>
                </div>
              </div>
              <h5 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                从零开始的ESA配置与优化心得
              </h5>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                分享在实际项目中使用ESA的配置经验和性能优化技巧，包含踩坑记录...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">知乎</span>
                <span className="text-xs text-gray-500">阅读量: 756</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rules;
