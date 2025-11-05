const fs = require('fs');
const path = require('path');

// ESA Functions and Pages 部署脚本
class ESADeployer {
  constructor() {
    this.projectName = 'esa-campaign-page';
    this.buildDir = 'dist';
  }

  // 检查构建文件
  checkBuildFiles() {
    console.log('🔍 检查构建文件...');
    
    if (!fs.existsSync(this.buildDir)) {
      console.error('❌ 构建目录不存在，请先运行 npm run build');
      process.exit(1);
    }

    const indexPath = path.join(this.buildDir, 'index.html');
    if (!fs.existsSync(indexPath)) {
      console.error('❌ index.html 文件不存在');
      process.exit(1);
    }

    console.log('✅ 构建文件检查通过');
  }

  // 生成部署清单
  generateManifest() {
    console.log('📝 生成部署清单...');
    
    const manifest = {
      name: this.projectName,
      version: '1.0.0',
      type: 'static',
      framework: 'react',
      buildCommand: 'npm run build',
      outputDirectory: this.buildDir,
      routes: [
        {
          src: '/(.*)',
          dest: '/index.html'
        }
      ],
      env: {
        NODE_ENV: 'production'
      }
    };

    fs.writeFileSync(
      path.join(this.buildDir, 'manifest.json'),
      JSON.stringify(manifest, null, 2)
    );

    console.log('✅ 部署清单生成完成');
  }

  // 优化静态资源
  optimizeAssets() {
    console.log('⚡ 优化静态资源...');
    
    // 添加缓存头配置
    const htaccess = `
# ESA Functions and Pages 缓存配置
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# 启用 Gzip 压缩
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# 安全头配置
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;

    fs.writeFileSync(path.join(this.buildDir, '.htaccess'), htaccess);
    console.log('✅ 静态资源优化完成');
  }

  // 执行部署
  async deploy() {
    console.log('🚀 开始部署到 ESA Functions and Pages...');
    
    try {
      this.checkBuildFiles();
      this.generateManifest();
      this.optimizeAssets();
      
      console.log('\n📋 部署信息:');
      console.log(`   项目名称: ${this.projectName}`);
      console.log(`   构建目录: ${this.buildDir}`);
      console.log(`   框架类型: React SPA`);
      console.log(`   路由模式: Hash Router`);
      
      console.log('\n🎯 ESA 部署步骤:');
      console.log('1. 登录阿里云控制台');
      console.log('2. 进入 ESA Functions and Pages 服务');
      console.log('3. 创建新项目或选择现有项目');
      console.log('4. 上传 dist 目录中的所有文件');
      console.log('5. 配置自定义域名（可选）');
      console.log('6. 启用 CDN 加速和安全防护');
      
      console.log('\n✅ 部署准备完成！');
      console.log('📁 请将 dist 目录上传到 ESA Functions and Pages');
      
    } catch (error) {
      console.error('❌ 部署失败:', error.message);
      process.exit(1);
    }
  }
}

// 执行部署
const deployer = new ESADeployer();
deployer.deploy();
