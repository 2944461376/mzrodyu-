/**
 * mzrodyu猫猫的小破烂 - 记忆管理扩展
 *
 * 功能包括：
 * - 自动总结：每隔N层自动总结聊天内容
 * - 手动总结：指定楼层范围进行总结
 * - 表格生成：AI自动填充表格或手动创建
 * - 去八股工具：清理角色卡/世界书的八股表述
 * - 角色卡生成：AI生成完整角色卡
 * - 楼层管理：隐藏/显示指定楼层
 */

(function () {
  'use strict';

  // 从 jsdelivr CDN 加载主要脚本（使用你的 GitHub 仓库）
  const scriptUrl = 'https://testingcf.jsdelivr.net/gh/2944461376/mzrodyu-@main/index.js';

  console.log('[记忆管理] 正在从 CDN 加载脚本...');

  // 创建 script 标签并加载
  const script = document.createElement('script');
  script.type = 'module';
  script.src = scriptUrl;

  script.onload = function () {
    console.log('[记忆管理] 脚本加载成功！');
    toastr.success('记忆管理扩展已加载', 'mzrodyu猫猫的小破烂');
  };

  script.onerror = function () {
    console.error('[记忆管理] 脚本加载失败！');
    toastr.error('记忆管理扩展加载失败，请检查网络连接', 'mzrodyu猫猫的小破烂');
  };

  document.head.appendChild(script);

  // 注册扩展
  jQuery(async () => {
    const extensionName = 'mzrodyu-memory-management';
    const extensionFolderPath = `scripts/extensions/third-party/${extensionName}`;

    // 添加扩展设置面板（如果需要的话可以在这里添加）
    console.log(`[记忆管理] 扩展已注册: ${extensionName}`);
  });
})();
