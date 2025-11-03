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
            立即参与活动
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            准备好体验阿里云ESA了吗？按照要求发布推荐内容，即可领取代金券
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 投稿表单 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              <i className="fas fa-pen-fancy text-blue-600 mr-3"></i>
              快速参与
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
                  推荐标题 *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="请输入推荐ESA的标题"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  发布平台 *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">请选择发布平台</option>
                  <option value="weibo">微博</option>
                  <option value="wechat">微信朋友圈</option>
                  <option value="zhihu">知乎</option>
                  <option value="csdn">CSDN</option>
                  <option value="juejin">掘金</option>
                  <option value="v2ex">V2EX</option>
                  <option value="other">其他平台</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  推荐内容 *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="请简要描述您的推荐内容，包括为什么推荐ESA、使用场景等"
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                提交参与
              </button>
            </form>
          </div>
          
          {/* 投稿指南 */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              <i className="fas fa-lightbulb text-yellow-500 mr-3"></i>
              推荐内容建议
            </h3>
            
            <div className="space-y-4">
              {[
                '分享你的ESA使用场景（出海、加速、安全等）',
                '对比其他解决方案的优势体验',
                '包含1张ESA相关图片（控制台/测试结果等）',
                '推荐内容需附上官方领取链接',
                '可以是技术分析、性能测试或使用心得',
                '高质量内容有机会获得高级版代金券'
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
                <i className="fas fa-link mr-3"></i>
                重要链接
              </h3>
              <p className="mb-6">
                参与活动必备链接，请务必在推荐内容中包含官方领取链接，
                并前往活动页面提交参与信息。
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-gift mr-3"></i>
                  <span className="text-sm">领取链接：http://s.tb.cn/e6.0Fu67m</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-file-alt mr-3"></i>
                  <span className="text-sm">活动详情：https://help.aliyun.com/document_detail/2936616.html</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-calendar mr-3"></i>
                  <span className="text-sm">活动时间：持续进行中，每周结算</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-users mr-3"></i>
                  <span className="text-sm">适合：运维、前端、全栈开发者参与</span>
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
