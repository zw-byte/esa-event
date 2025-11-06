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
                { icon: 'fas fa-brain', color: 'hover:text-blue-500', url: 'https://bailian.console.aliyun.com/?spm=5176.29597918.J_SEsSjsNv72yRuRFS2VknO.2.6b947b08LeiXzS&tab=mcp#/mcp-market/detail/aliyun-esa', title: '阿里云百炼' },
                { icon: 'fab fa-bilibili', color: 'hover:text-pink-400', url: 'https://space.bilibili.com/3632312197581781', title: 'B站' }
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
                </div>
              ))}
            </div>
          </div>
          
          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://help.aliyun.com/zh/edge-security-acceleration/esa/product-overview/what-is-esa?spm=5176.30371578.J_XmGx2FZCDAeIy2ZCWL7sW.32.e939154aTprw9p&scm=20140722.S_help@@%E6%96%87%E6%A1%A3@@2794340._.RL_esa-LOC_2024NSHelpLink-OR_ser-PAR1_213e052917623133331917157e44c6-V_4-P0_0-P1_0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  ESA介绍
                </a>
              </li>
            </ul>
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
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-gray-400 text-sm text-center">
              本站点由AI生成，并部署在 ESA 函数和 Pages
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
