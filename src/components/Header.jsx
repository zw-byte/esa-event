import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-shield-alt text-white text-lg"></i>
            </div>
            <span className={`text-lg md:text-xl font-bold whitespace-nowrap ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              ESA征文活动
            </span>
          </div>
          
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 flex-1 justify-center">
            {['活动介绍', '奖项设置', '参与规则', '文章展示'].map((item) => (
              <a
                key={item}
                href={item === '文章展示' ? '#参与征文活动文章' : `#${item}`}
                className={`font-medium transition-colors duration-300 whitespace-nowrap ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* 移动端菜单按钮 */}
            <button className="lg:hidden p-2">
              <i className={`fas fa-bars text-xl ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}></i>
            </button>
            
            <a 
              href="https://help.aliyun.com/zh/edge-security-acceleration/esa/product-overview/how-to-get-esa-for-free?spm=5176.29099518.console-base_help.dexternal.52bc20670w9iXX#1846164d47wbq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-sm md:text-base px-4 md:px-6 py-2 md:py-3 flex-shrink-0"
            >
              <span className="hidden sm:inline">立即参与</span>
              <span className="sm:hidden">参与</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
