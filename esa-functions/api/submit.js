// ESA Functions API - 征文提交处理
export default async function handler(request, response) {
  // 设置 CORS 头
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 处理 OPTIONS 预检请求
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // 只允许 POST 请求
  if (request.method !== 'POST') {
    return response.status(405).json({ 
      error: 'Method not allowed',
      message: '只支持 POST 请求' 
    });
  }

  try {
    const { name, email, title, category, description } = request.body;

    // 数据验证
    if (!name || !email || !title || !category || !description) {
      return response.status(400).json({
        error: 'Missing required fields',
        message: '请填写所有必填字段'
      });
    }

    // 邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return response.status(400).json({
        error: 'Invalid email format',
        message: '邮箱格式不正确'
      });
    }

    // 模拟保存到数据库（实际项目中连接真实数据库）
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      title,
      category,
      description,
      status: 'pending',
      createdAt: new Date().toISOString(),
      ip: request.headers['x-forwarded-for'] || request.connection.remoteAddress
    };

    // 这里可以集成阿里云的数据库服务
    // 例如：RDS、MongoDB、TableStore 等
    console.log('新征文提交:', submission);

    // 发送确认邮件（可选）
    // await sendConfirmationEmail(email, name, title);

    return response.status(200).json({
      success: true,
      message: '提交成功！我们会尽快与您联系。',
      submissionId: submission.id
    });

  } catch (error) {
    console.error('征文提交处理错误:', error);
    
    return response.status(500).json({
      error: 'Internal server error',
      message: '服务器内部错误，请稍后重试'
    });
  }
}

// 邮件发送函数（示例）
async function sendConfirmationEmail(email, name, title) {
  // 这里可以集成阿里云邮件推送服务
  // 或者其他邮件服务提供商
  console.log(`发送确认邮件到 ${email}:`);
  console.log(`收件人: ${name}`);
  console.log(`征文标题: ${title}`);
}
