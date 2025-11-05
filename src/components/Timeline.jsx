import React from 'react';

function Timeline() {
  const timelineEvents = [
    {
      date: '2024年1月1日',
      title: '活动启动',
      description: '征文活动正式开始，开放投稿通道',
      icon: 'fas fa-rocket',
      status: 'completed'
    },
    {
      date: '2024年1月15日',
      title: '宣传推广',
      description: '全平台宣传推广，邀请技术大咖参与',
      icon: 'fas fa-bullhorn',
      status: 'current'
    },
    {
      date: '2024年1月31日',
      title: '投稿截止',
      description: '所有参赛作品提交截止，开始评审工作',
      icon: 'fas fa-flag-checkered',
      status: 'upcoming'
    },
    {
      date: '2024年2月15日',
      title: '评审阶段',
      description: '专家评审团进行作品评选和打分',
      icon: 'fas fa-search',
      status: 'upcoming'
    },
    {
      date: '2024年2月28日',
      title: '结果公布',
      description: '公布获奖名单，举办颁奖典礼',
      icon: 'fas fa-trophy',
      status: 'upcoming'
    }
  ];

  return (
    <section id="时间安排" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            活动时间安排
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            清晰的时间节点，让你不错过任何重要环节
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
        
        {/* 倒计时 */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <i className="fas fa-hourglass-half mr-2"></i>
              距离投稿截止还有
            </h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { value: '15', label: '天' },
                { value: '08', label: '时' },
                { value: '32', label: '分' },
                { value: '45', label: '秒' }
              ].map((time, index) => (
                <div key={index} className="bg-white bg-opacity-20 rounded-xl p-4">
                  <div className="text-3xl font-bold">{time.value}</div>
                  <div className="text-sm opacity-80">{time.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
