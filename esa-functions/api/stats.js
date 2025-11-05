// ESA Functions API - 活动统计数据
export default async function handler(request, response) {
  // 设置 CORS 头
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 处理 OPTIONS 预检请求
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // 只允许 GET 请求
  if (request.method !== 'GET') {
    return response.status(405).json({ 
      error: 'Method not allowed',
      message: '只支持 GET 请求' 
    });
  }

  try {
    // 模拟统计数据（实际项目中从数据库获取）
    const stats = {
      totalSubmissions: 156,
      totalParticipants: 142,
      totalViews: 8924,
      platformDistribution: {
        '个人博客': 45,
        'CSDN': 38,
        '掘金': 32,
        '知乎专栏': 28,
        '微信公众号': 25,
        'B站专栏': 18,
        'GitHub': 15,
        'V2EX': 12,
        '其他平台': 23
      },
      categoryDistribution: {
        '横向对比测试': 52,
        'ESA使用教程': 41,
        '技术开发实践': 35,
        '使用体验心得': 28
      },
      recentSubmissions: [
        {
          id: '1',
          title: 'ESA vs CloudFlare 全维度性能对比测试',
          author: '张**',
          platform: 'CSDN',
          views: 1250,
          createdAt: '2024-01-15T10:30:00Z'
        },
        {
          id: '2', 
          title: 'ESA边缘安全加速实战指南',
          author: '李**',
          platform: '掘金',
          views: 890,
          createdAt: '2024-01-14T16:45:00Z'
        },
        {
          id: '3',
          title: '从零开始的ESA配置与优化',
          author: '王**',
          platform: '知乎专栏',
          views: 756,
          createdAt: '2024-01-14T09:20:00Z'
        }
      ],
      topPerformers: [
        {
          author: '张**',
          totalViews: 3420,
          articlesCount: 3,
          avgViews: 1140
        },
        {
          author: '李**',
          totalViews: 2890,
          articlesCount: 2,
          avgViews: 1445
        },
        {
          author: '王**',
          totalViews: 2156,
          articlesCount: 2,
          avgViews: 1078
        }
      ],
      lastUpdated: new Date().toISOString()
    };

    return response.status(200).json({
      success: true,
      data: stats
    });

  } catch (error) {
    console.error('统计数据获取错误:', error);
    
    return response.status(500).json({
      error: 'Internal server error',
      message: '获取统计数据失败'
    });
  }
}
