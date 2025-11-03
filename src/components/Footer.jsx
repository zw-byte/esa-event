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
              <span className="text-2xl font-bold">ESA征文活动</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              阿里云ESA边缘安全加速平台，依托3200+全球边缘节点，
              为各行业提供网络加速、安全防护与边缘计算的一体化能力。
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'fab fa-weixin', color: 'hover:text-green-400' },
                { icon: 'fab fa-weibo', color: 'hover:text-red-400' },
                { icon: 'fab fa-github', color: 'hover:text-gray-400' },
                { icon: 'fab fa-twitter', color: 'hover:text-blue-400' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300 ${social.color}`}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
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
                    href={`#${link}`}
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
        
        {/* 分割线 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 阿里云ESA活动. 保留所有权利.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
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
