module.exports = {
  // ESA Functions and Pages 配置
  name: 'esa-campaign-page',
  
  // 构建配置
  build: {
    command: 'npm run build',
    outputDirectory: 'dist',
    environment: {
      NODE_VERSION: '18'
    }
  },
  
  // 路由配置
  routes: [
    {
      src: '/(.*)',
      dest: '/index.html'
    }
  ],
  
  // 静态资源配置
  headers: [
    {
      source: '/static/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    },
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ]
    }
  ],
  
  // 重定向配置
  redirects: [
    {
      source: '/home',
      destination: '/',
      permanent: true
    }
  ]
};
