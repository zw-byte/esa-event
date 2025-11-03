import React from 'react';

function Timeline() {
  const timelineEvents = [
    {
      date: '征文期',
      title: '长期有效',
      description: 'ESA横向测评征文活动长期有效，随时可以参与投稿',
      icon: 'fas fa-infinity',
      status: 'current'
    },
    {
      date: '投稿发布',
      title: '两种方式',
      description: '任意平台投稿或阿里云社区投稿，需标注参与活动',
      icon: 'fas fa-edit',
      status: 'current'
    },
    {
      date: '评审期',
      title: '每月评选',
      description: '每月进行评选，可累积，根据阅读量和质量评定奖励',
      icon: 'fas fa-search',
      status: 'current'
    },
    {
      date: '公布发放',
      title: '7个工作日',
      description: '提交作品后7个工作日内公布结果并发放奖励',
      icon: 'fas fa-gift',
      status: 'current'
    },
    {
      date: '分享有礼',
      title: '额外奖励',
      description: '分享活动海报到社交平台，保留1周即可获得基础版',
      icon: 'fas fa-share-alt',
      status: 'current'
    }
  ];

  return (
    <section id="时间安排" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ESA横向测评时间安排
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            活动长期有效，每月评选可累积，提交作品后7个工作日内发放奖励
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
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <i className="fas fa-bullhorn mr-2"></i>
              ESA立志做到国际一线水准
            </h3>
            <p className="text-lg mb-6 opacity-90">
              批评是礼物，建议是养分。欢迎拍砖，我们把每条建设性反馈都当作迭代燃料
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <i className="fas fa-globe text-2xl mb-2"></i>
                <div className="font-bold">全球级能力</div>
                <div className="text-sm opacity-80">本土落地</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <i className="fas fa-balance-scale text-2xl mb-2"></i>
                <div className="font-bold">国际对标</div>
                <div className="text-sm opacity-80">同等水准</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <i className="fas fa-users text-2xl mb-2"></i>
                <div className="font-bold">服务开发者</div>
                <div className="text-sm opacity-80">本土生态</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <i className="fas fa-rocket text-2xl mb-2"></i>
                <div className="font-bold">持续迭代</div>
                <div className="text-sm opacity-80">用户反馈</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
