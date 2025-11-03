import React from 'react';

function Timeline() {
  const timelineEvents = [
    {
      date: '2024年7月',
      title: '活动启动',
      description: 'ESA轻量创作活动正式开始，面向所有开发者开放',
      icon: 'fas fa-rocket',
      status: 'completed'
    },
    {
      date: '持续进行',
      title: '发布推荐',
      description: '在任一社交平台发布推荐ESA的内容，配ESA元素图片',
      icon: 'fas fa-edit',
      status: 'current'
    },
    {
      date: '每周结算',
      title: '提交领取',
      description: '前往官方页面提交参与信息，领取基础版代金券',
      icon: 'fas fa-gift',
      status: 'current'
    },
    {
      date: '高阅读量',
      title: '额外奖励',
      description: '优质内容有机会获得高级版代金券，发布越多机会越多',
      icon: 'fas fa-crown',
      status: 'current'
    },
    {
      date: '长期有效',
      title: '持续参与',
      description: '活动长期进行，支持多次参与，每次都有机会获得奖励',
      icon: 'fas fa-sync-alt',
      status: 'current'
    }
  ];

  return (
    <section id="时间安排" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            活动持续进行中
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            自7月启动至今持续进行，每周结算发放，随时参与随时领取
          </p>
        </div>
        
        <div className="relative">
          {/* 时间线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`bg-gray-800 rounded-2xl p-6 card-hover ${
                    event.status === 'current' ? 'ring-2 ring-blue-500' : ''
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        event.status === 'completed' ? 'bg-green-500' :
                        event.status === 'current' ? 'bg-blue-500' : 'bg-gray-600'
                      }`}>
                        <i className={`${event.icon} text-white`}></i>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{event.date}</div>
                        <h3 className="text-xl font-bold">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-300">{event.description}</p>
                    {event.status === 'current' && (
                      <div className="mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500 text-white">
                          <i className="fas fa-clock mr-1"></i>
                          进行中
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* 中心节点 */}
                <div className="relative z-10">
                  <div className={`w-6 h-6 rounded-full border-4 border-gray-900 ${
                    event.status === 'completed' ? 'bg-green-500' :
                    event.status === 'current' ? 'bg-blue-500 animate-pulse' : 'bg-gray-600'
                  }`}></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 参与提醒 */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <i className="fas fa-bullhorn mr-2"></i>
              现在就开始参与
            </h3>
            <p className="text-lg mb-6 opacity-90">
              活动持续进行中，无截止时间限制。每周结算发放，越早参与越多收获！
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <i className="fas fa-clock text-2xl mb-2"></i>
                <div className="font-bold">随时参与</div>
                <div className="text-sm opacity-80">无时间限制</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <i className="fas fa-sync-alt text-2xl mb-2"></i>
                <div className="font-bold">多次参与</div>
                <div className="text-sm opacity-80">每周结算</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <i className="fas fa-trophy text-2xl mb-2"></i>
                <div className="font-bold">即时奖励</div>
                <div className="text-sm opacity-80">快速到账</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
