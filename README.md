# ESA征文活动页面

## 项目简介

这是一个基于React和Tailwind CSS构建的ESA（边缘安全加速）征文活动页面，展示活动详情、奖励机制和参与方式。

## 功能特性

- 🎯 **响应式设计** - 完美适配桌面端和移动端
- 🎨 **现代化UI** - 使用Tailwind CSS构建美观界面
- 📝 **征文投稿** - 完整的投稿表单和规则说明
- 🏆 **奖励展示** - 清晰的奖励机制和ESA先锋成员特权
- 🔗 **平台跳转** - 支持多平台发布链接
- ⚡ **性能优化** - Webpack构建优化

## 技术栈

- **前端框架**: React 18
- **样式框架**: Tailwind CSS
- **构建工具**: Webpack 5
- **路由**: React Router DOM (Hash模式)
- **图标**: Font Awesome
- **包管理**: npm/anpm

## 快速开始

### 安装依赖
```bash
anpm install
```

### 启动开发服务器
```bash
anpm run dev
```

### 构建生产版本
```bash
anpm run build
```

## 项目结构

```
├── src/
│   ├── components/          # React组件
│   │   ├── Header.jsx      # 页面头部
│   │   ├── Hero.jsx        # 英雄区域
│   │   ├── Features.jsx    # 征文主题
│   │   ├── Prizes.jsx      # 奖励机制
│   │   ├── Rules.jsx       # 参与规则
│   │   ├── Submission.jsx  # 投稿表单
│   │   └── Footer.jsx      # 页面底部
│   ├── styles/
│   │   └── index.css       # 全局样式
│   ├── App.jsx             # 主应用组件
│   └── index.jsx           # 应用入口
├── webpack.config.js       # Webpack配置
├── tailwind.config.js      # Tailwind配置
├── postcss.config.js       # PostCSS配置
└── package.json           # 项目配置
```

## 主要功能

### 1. 征文活动展示
- ESA产品介绍和技术特色
- 活动主题和参与方式说明
- 清晰的视觉层次和信息架构

### 2. 奖励机制
- 基础版代金券（每位作者）
- 阿里云周边礼品（阅读量≥500）
- ESA标准版+先锋成员（阅读量≥1000）
- ESA高级版+官方转载（阅读量≥10000）

### 3. ESA先锋成员特权
- 官方文档页展示
- 新功能内测优先权
- 内容署名转载
- 更多专属特权

### 4. 多平台支持
支持在以下平台发布征文：
- 个人博客
- 微信公众号
- V2EX、CSDN、掘金
- 知乎专栏、B站专栏
- GitHub、SegmentFault
- YouTube、Twitter/X等

## 开发说明

### 样式规范
- 使用Tailwind CSS进行样式开发
- 遵循响应式设计原则
- 统一的颜色主题和间距规范

### 组件规范
- 每个组件独立文件
- 使用函数式组件和Hooks
- 保持组件职责单一

### 构建配置
- Webpack 5 + Babel转译
- PostCSS + Tailwind CSS处理
- 开发服务器热更新支持

## 部署说明

项目支持多种部署方式：
- 静态文件部署（推荐）
- CDN部署
- 容器化部署

构建后的文件在 `dist/` 目录中，可直接部署到任何静态文件服务器。

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过以下方式联系：
- 邮箱: support@esa-contest.com
- 电话: 400-123-4567

---

**Powered by ESA Functions and Pages**
