# ESA Functions and Pages 部署指南

## 项目概述

本项目是一个基于React的ESA征文活动页面，已针对阿里云ESA Functions and Pages服务进行优化配置。

## 部署准备

### 1. 构建项目
```bash
npm run build
```

### 2. 运行部署脚本
```bash
npm run deploy
```

## ESA Functions and Pages 部署步骤

### 第一步：登录阿里云控制台
1. 访问 [阿里云控制台](https://ecs.console.aliyun.com)
2. 搜索并进入 "ESA Functions and Pages" 服务

### 第二步：创建项目
1. 点击 "创建项目"
2. 选择 "静态网站" 类型
3. 项目名称：`esa-campaign-page`
4. 选择合适的地域

### 第三步：配置项目
```json
{
  "name": "esa-campaign-page",
  "framework": "react",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "nodeVersion": "18"
}
```

### 第四步：上传文件
1. 将 `dist/` 目录中的所有文件上传
2. 确保包含以下关键文件：
   - `index.html`
   - `bundle.js`
   - `manifest.json`
   - `.htaccess`

### 第五步：配置路由
在ESA控制台配置SPA路由：
```json
{
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 第六步：配置域名（可选）
1. 添加自定义域名
2. 配置SSL证书
3. 启用CDN加速

## ESA Functions API 部署

### API 端点配置
项目包含以下API端点：

1. **征文提交API**
   - 路径：`/api/submit`
   - 方法：POST
   - 功能：处理征文投稿表单

2. **统计数据API**
   - 路径：`/api/stats`
   - 方法：GET
   - 功能：获取活动统计数据

### 部署API函数
1. 将 `esa-functions/` 目录上传到ESA Functions
2. 配置环境变量（如需要）
3. 设置API路由映射

## 性能优化配置

### 1. 缓存策略
```
静态资源：1年缓存
HTML文件：不缓存
API响应：根据需要配置
```

### 2. 压缩配置
- 启用Gzip压缩
- 图片资源优化
- CSS/JS文件压缩

### 3. 安全配置
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

## 监控和日志

### 1. 访问日志
- 在ESA控制台查看访问统计
- 监控页面加载性能
- 分析用户行为数据

### 2. 错误监控
- 配置错误告警
- 监控API响应时间
- 跟踪用户反馈

## 环境变量配置

在ESA控制台配置以下环境变量：

```bash
NODE_ENV=production
API_BASE_URL=https://your-domain.com/api
CONTACT_EMAIL=support@esa-contest.com
```

## 域名和SSL

### 1. 自定义域名
```
主域名: esa-contest.com
CDN域名: cdn.esa-contest.com
API域名: api.esa-contest.com
```

### 2. SSL证书
- 使用阿里云SSL证书服务
- 配置HTTPS重定向
- 启用HSTS安全头

## 部署验证

部署完成后，验证以下功能：

- [ ] 页面正常加载
- [ ] 路由跳转正常
- [ ] 表单提交功能
- [ ] 响应式布局
- [ ] 性能指标达标
- [ ] SEO优化生效

## 故障排除

### 常见问题

1. **页面404错误**
   - 检查路由配置
   - 确认index.html存在

2. **API调用失败**
   - 检查CORS配置
   - 验证API端点路径

3. **静态资源加载失败**
   - 检查文件路径
   - 验证缓存配置

### 联系支持

如遇到部署问题，请联系：
- 邮箱：support@esa-contest.com
- 电话：400-123-4567

---

**Powered by ESA Functions and Pages**
