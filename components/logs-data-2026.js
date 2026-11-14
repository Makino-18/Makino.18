// components/logs.js

const siteLogs = [
  {
    category: "[重要]发行说明", 
    tag: "v1",
    title: "发行说明 | v1 | 20260621",
    content: `
            <h3 class="h3_margin">板块</h3>
            <p class="p_margin">
                ·【日牧电台】板块<br/>
                ·【站点资讯】板块<br/>
                ·【十八工具箱】板块<br/>
                ·【邦邦实验室】板块<br/>
                ·全页面【导航栏】
            </p>
            <h3 class="h3_margin">修改与移除</h3>
            <p class="p_margin">
                ·对【首页】进行了修改<br/>
                ·对【导航栏】内容进行了更新
                ·移除了【首页】的部分内容<br/>
                ·移除了【跳转测试】页面<br/>
                ·移除了【导航测试】页面
            </p>
    `,
  },
  {
    category: "[2026]修缮日志", 
    tag: "0622",
    title: "修缮日志 | 0622",
    content: `
            <h3 class="h3_margin">新增内容</h3>
            <p class="p_margin">
                ·新增了两篇修缮日志<br/>
                ·新增了对应修缮日志的列表卡片<br/>
                ·新增了对应修缮日志的入口按钮<br/>
                ·新增了全新日志样式
            </p>
            <h3 class="h3_margin">修改内容</h3>
            <p class="p_margin">
                ·对【站点资讯】页面的排版进行了修改<br/>
                ·对【站点资讯】页面的内容进行了更新
            </p>
            <h3 class="h3_margin">移除内容</h3>
            <p class="p_margin">
                ·本次更新未移除任何内容
            </p>
    `,
  },
  {
    category: "[2026]修缮日志", 
    tag: "0707",
    title: "修缮日志 | 0707",
    content: `
            <h3 class="h3_margin">新增内容</h3>
            <p class="p_margin">
                ·新增了【刻洛里拉】导航<br/>
                ·新增了【大川】地理志页面<br/>
                ·新增了【长滩】地理志页面<br/>
                ·新增了【西多】地理志页面<br/>
                ·新增了全新刻洛里拉地理志样式
            </p>
            <h3 class="h3_margin">修改内容</h3>
            <p class="p_margin">
                ·修改了导航栏
            </p>
            <h3 class="h3_margin">移除内容</h3>
            <p class="p_margin">
                ·本次更新未移除任何内容
            </p>
    `,
  },
  {
    category: "[2026]修缮日志", 
    tag: "0718",
    title: "修缮日志 | 0718",
    content: `
            <h3 class="h3_margin">新增内容</h3>
            <p class="p_margin">
                ·新增了【大川】地理志页面的部分内容<br/>
                ·新增了【长滩】地理志页面的部分内容<br/>
                ·新增了【西多】地理志页面的部分内容<br/>
                ·新增了部分内容的样式
            </p>
            <h3 class="h3_margin">修改内容</h3>
            <p class="p_margin">
                ·修改了【首页】的部分内容
            </p>
            <h3 class="h3_margin">移除内容</h3>
            <p class="p_margin">
                ·本次更新未移除任何内容
            </p>
    `,
  },
  {
    category: "[2026]修缮日志", 
    tag: "0827",
    title: "修缮日志 | 0827",
    content: `
            <h3 class="h3_margin">新增内容</h3>
            <p class="p_margin">
                ·新增了【大川】地理志页面的部分内容<br/>
                ·新增了【十八工具箱】页面的部分内容<br/>
                ·新增了【Makino's Minecraft Gamepack】详情页面<br/>
                ·新增了Minecraft风格样式
            </p>
            <h3 class="h3_margin">修改内容</h3>
            <p class="p_margin">
                ·修改了【导航栏】的部分内容<br/>
                ·修改了【十八工具箱】页面的部分内容<br/>
                ·修改了【大川】地理志页面的部分内容
            </p>
            <h3 class="h3_margin">移除内容</h3>
            <p class="p_margin">
                ·移除了【大川】地理志页面的部分内容<br/>
                ·移除了【长滩】地理志页面的部分内容<br/>
                ·移除了【西多】地理志页面的部分内容
            </p>
    `,
  },
  {
    category: "[2026]修缮日志", 
    tag: "0919",
    title: "修缮日志 | 0919",
    content: `
            <h3 class="h3_margin">新增内容</h3>
            <p class="p_margin">
                ·新增了【首页】页面的部分内容<br/>
                ·推出了新版【日牧电台】页面
            </p>
            <h3 class="h3_margin">修改内容</h3>
            <p class="p_margin">
                ·修改了【导航栏】的部分内容<br/>
                ·重构了部分页面的逻辑
            </p>
            <h3 class="h3_margin">移除内容</h3>
            <p class="p_margin">
                本次更新并未移除内容
            </p>
    `,
  },
  {
    category: "[2026]修缮日志", 
    tag: "0922",
    title: "修缮日志 | 0922",
    content: `
            <h3 class="h3_margin">新增内容</h3>
            <p class="p_margin">
                ·新增了【站点资讯】页面的部分内容<br/>
                ·推出了【日志辑录】系统
            </p>
            <h3 class="h3_margin">修改内容</h3>
            <p class="p_margin">
                ·修改了部分【修缮日志】的整合方式<br/>
                ·重构了部分页面的逻辑
            </p>
            <h3 class="h3_margin">移除内容</h3>
            <p class="p_margin">
                本次更新并未移除内容
            </p>
    `,
  },
  {
    category: "[2026]修缮日志", 
    tag: "0923",
    title: "修缮日志 | 0923",
    content: `
            <h3 class="h3_margin">新增内容</h3>
            <p class="p_margin">
                ·开启了【页脚测试】页面<br/>
                ·在【实验室】页面中开启了【页脚测试】入口<br/>
                ·为【页脚测试】系统新增了一套全新样式<br/>
                ·为【日志辑录】系统新增了一套全新样式
            </p>
            <h3 class="h3_margin">修改内容</h3>
            <p class="p_margin">
                ·重构了部分页面的逻辑
            </p>
            <h3 class="h3_margin">移除内容</h3>
            <p class="p_margin">
                本次更新并未移除内容
            </p>
    `,
  },
  {
    category: "[2026]修缮日志", 
    tag: "1015",
    title: "修缮日志 | 1015",
    content: `
            <h3 class="h3_margin">新增内容</h3>
            <p class="p_margin">
                ·新增了【MakinosMinecraftGamepack】页面的部分内容<br/>
                ·新增了【MMGVersionList】页面<br/>
            </p>
            <h3 class="h3_margin">修改内容</h3>
            <p class="p_margin">
                ·修改了【MakinosMinecraftGamepack】页面的部分内容
            </p>
            <h3 class="h3_margin">移除内容</h3>
            <p class="p_margin">
                本次更新并未移除内容
            </p>
    `,
  },
  {
    category: "[重要]发行说明", 
    tag: "v2",
    title: "发行说明 | v2 | 20261113",
    content: `
            <h3 class="h3_margin">系统</h3>
            <p class="p_margin">
                ·本站现已正式搭载至【Github Page】<br/>
                ·【观测日志】专题页面及查阅系统已上线<br/>
                ·新增了全新页面构造系统<br/>
            </p>
            <h3 class="h3_margin">样式</h3>
            <p class="p_margin">
                ·新增了一套全新样式系统<br/>
                ·完全重构了页面逻辑，优化了所有页面的视觉表现<br/>
                ·新增了适配【Github Page】的页面显示逻辑<br/>
            </p>
            <h3 class="h3_margin">修改与移除</h3>
            <p class="p_margin">
                ·现有日志页面和临时日志查阅专题页将被迁移<br/>
                ·页脚测试已停止<br/>
                ·移除了【站点日志】页面，功能已被迁移至其他页面<br/>
            </p>
    `,
  },
  {
    category: "邮件",
    tag: "2026",
    title: "邮件系统测试其一",
    content: `
      <p>测试文本</p>
      <p>测试内容</p>
    `,
    link: "/Makino.18/MBC.html",
    linkText: "打开电台"
  }
];