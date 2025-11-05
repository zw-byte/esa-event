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
            立即参与ESA征文
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            分享你的ESA使用体验，与主流边缘加速产品对比，用数据说话获得丰厚奖励
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* 投稿指南 */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <i className="fas fa-lightbulb text-yellow-500 mr-3"></i>
                征文内容建议
              </h3>
            
              <div className="space-y-4">
              {[
                'ESA与业界主流边缘加速产品性能对比测试数据',
                '详细的使用教程和最佳实践分享',
                '技术开发实践和场景应用案例',
                '真实的使用体验和心得总结',
                '长文图文、短视频、实验报告均可',
                '中英文皆可，字数不少于800字（阿里云社区）'
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
                <i className="fas fa-trophy mr-3"></i>
                奖励提醒
              </h3>
              <p className="mb-6">
                活动长期有效，每月评选，可累积。优质内容获得丰厚奖励。
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-medal mr-3"></i>
                  <span className="text-sm">基础奖励：每位作者发布即可得 50GB ESA基础版加量包</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-share-alt mr-3"></i>
                  <span className="text-sm">分享活动海报到社交平台也可获得基础版</span>
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
