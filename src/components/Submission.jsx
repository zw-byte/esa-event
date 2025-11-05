import React, { useState } from 'react';

function Submission() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    category: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里处理表单提交逻辑
    console.log('提交表单:', formData);
    alert('提交成功！我们会尽快与您联系。');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            立即参与投稿
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            准备好分享你的技术见解了吗？填写下方表单，开始你的征文之旅
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 投稿表单 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              <i className="fas fa-pen-fancy text-blue-600 mr-3"></i>
              投稿信息
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="请输入您的姓名"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱 *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="请输入您的邮箱地址"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  文章标题 *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="请输入文章标题"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  主题分类 *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">请选择主题分类</option>
                  <option value="security">边缘安全防护</option>
                  <option value="performance">性能加速优化</option>
                  <option value="architecture">技术架构设计</option>
                  <option value="monitoring">监控与分析</option>
                  <option value="innovation">创新应用场景</option>
                  <option value="network">全球网络覆盖</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  文章简介 *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="请简要描述您的文章内容和技术要点（200字以内）"
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                提交投稿
              </button>
            </form>
          </div>
          
          {/* 投稿指南 */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <i className="fas fa-lightbulb text-yellow-500 mr-3"></i>
                投稿指南
              </h3>
              
              <div className="space-y-4">
                {[
                  '文章需为原创内容，严禁抄袭和剽窃',
                  '字数要求不少于2000字，建议3000-5000字',
                  '需包含实际案例、代码示例或架构图',
                  '文章结构清晰，逻辑性强，易于理解',
                  '技术内容准确，具有实用价值',
                  '支持Markdown格式，图片需清晰可见'
                ].map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                <i className="fas fa-question-circle mr-3"></i>
                需要帮助？
              </h3>
              <p className="mb-6">
                如果您在投稿过程中遇到任何问题，或需要技术指导，
                欢迎联系我们的技术支持团队。
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-envelope mr-3"></i>
                  <span>support@esa-contest.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone mr-3"></i>
                  <span>400-123-4567</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-comments mr-3"></i>
                  <span>在线客服：工作日 9:00-18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Submission;
