import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 品牌信息 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold">ESA有奖征文活动</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              阿里云ESA边缘安全加速平台，依托3200+全球边缘节点，
              为各行业提供网络加速、安全防护与边缘计算的一体化能力。
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'fab fa-weixin', color: 'hover:text-green-400', hasQR: true },
                { icon: 'fas fa-brain', color: 'hover:text-blue-500', url: 'https://bailian.console.aliyun.com/?spm=5176.29597918.J_SEsSjsNv72yRuRFS2VknO.2.6b947b08LeiXzS&tab=mcp#/mcp-market/detail/aliyun-esa', title: '阿里云百炼' },
                { icon: 'fab fa-bilibili', color: 'hover:text-pink-400', url: 'https://space.bilibili.com/3632312197581781', title: 'B站' },
                { icon: 'fab fa-twitter', color: 'hover:text-blue-400' }
              ].map((social, index) => (
                <div key={index} className="relative group">
                  <a
                    href={social.url || '#'}
                    target={social.url ? '_blank' : undefined}
                    rel={social.url ? 'noopener noreferrer' : undefined}
                    title={social.title || ''}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300 ${social.color}`}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                  {social.hasQR && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-white p-3 rounded-lg shadow-xl border">
                        <div className="w-32 h-32 bg-gray-100 rounded flex items-center justify-center mb-2">
                          <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://mp.weixin.qq.com/s/ESA-campaign-wechat" 
                            alt="微信二维码" 
                            className="w-full h-full rounded"
                          />
                        </div>
                        <p className="text-xs text-gray-600 text-center">扫码关注微信</p>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {['ESA介绍', '参与方式', '奖励机制', '活动规则', '快速参与'].map((link) => (
                <li key={link}>
                  <a
                    href={link === 'ESA介绍' ? 'https://help.aliyun.com/zh/edge-security-acceleration/esa/product-overview/what-is-esa?spm=5176.30371578.J_XmGx2FZCDAeIy2ZCWL7sW.32.e939154aTprw9p&scm=20140722.S_help@@%E6%96%87%E6%A1%A3@@2794340._.RL_esa-LOC_2024NSHelpLink-OR_ser-PAR1_213e052917623133331917157e44c6-V_4-P0_0-P1_0' : `#${link}`}
                    target={link === 'ESA介绍' ? '_blank' : undefined}
                    rel={link === 'ESA介绍' ? 'noopener noreferrer' : undefined}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-bold mb-4">联系我们</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <i className="fas fa-envelope mr-3 text-blue-400"></i>
                <span>support@esa-contest.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="fas fa-phone mr-3 text-green-400"></i>
                <span>400-123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="fas fa-map-marker-alt mr-3 text-red-400"></i>
                <span>北京市朝阳区科技园</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 微信二维码区域 */}
        <div id="esa-contact" className="border-t border-gray-800 pt-8 pb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              <i className="fab fa-weixin text-green-400 mr-3"></i>
              ESA 交流群 & 小助手
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
              {/* ESA交流群 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <img 
                    src="https://1d-static.alibaba-inc.com/oneday/source/beae36ac-2b41-4b80-b466-99af91277597.png" 
                    alt="ESA交流群二维码" 
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">ESA 交流群</h4>
                <p className="text-sm text-gray-600">扫码加入技术交流群</p>
              </div>
              
              {/* ESA小助手 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <img 
                    src="https://1d-static.alibaba-inc.com/oneday/source/af6c2e1d-0ebb-405a-a897-829da954bb7b.png" 
                    alt="ESA小助手二维码" 
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">ESA小助手</h4>
                <p className="text-sm text-gray-600">扫码添加专属小助手</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              加入ESA社区，获取最新资讯和技术支持
            </p>
          </div>
        </div>
        
        {/* 分割线 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              本站点由AI生成，并部署在 ESA 函数和 Pages
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors duration-300">
                隐私政策
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                服务条款
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookie政策
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
