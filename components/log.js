// components/logs.js

// ==========================================
// 日志数据区：新增日志时，直接复制 { ... } 修改即可
// ==========================================
const siteLogs = [
  {
    date: "2026-11-13",
    title: "观测前线：Minecraft 整合包发布",
    // 使用反引号 ` 包裹，可以直接换行。用 <p> 分段，<strong> 加粗，<span> 改色
    content: `
      <p>Makino's Minecraft Gamepack 整合包<strong>正式发布</strong>。</p>
      <p>包含了最新的优化模组与光影配置。这次更新解决了以往在低配电脑上频繁卡顿的问题。</p>
      <p>新增了 <span style="color: #CC0000; font-weight: bold;">15 个</span> 地形生成模组，让世界的探索更加丰富。</p>
      <p>如果想体验，请前往工具箱页面下载最新的整合包。</p>
      <p><em>如果在游玩过程中遇到任何 BUG，请及时在站点资讯留言反馈。祝各位旅途愉快！</em></p>
    `,
    link: "/Makino.18/toolbox.html",
    linkText: "前往工具箱"
  },
  {
    date: "2026-10-01",
    title: "站点资讯：野泽驿站全新改版",
    content: `
      <p>野泽驿站今日起更换了纯静态的页面托管服务，并重构了样式表。</p>
      <p>未来将在这里同步更新站点的<strong>功能变动与修复记录</strong>。</p>
      <p>本次重构删除了大量不必要的冗余代码，页面加载速度得到了显著提升。</p>
      <p>并且分离了导航栏与页脚，后续维护成本大幅降低。</p>
      <p>如果你发现页面排版有错乱，请尝试清除浏览器缓存后再刷新。</p>
    `,
    link: "/Makino.18/webnews.html",
    linkText: "查看详情"
  }
];

// ==========================================
// 核心渲染逻辑，不需要修改
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
  const logPageSelect = document.getElementById("dateSelect");
  const logDisplay = document.getElementById("logDisplay");
  
  if (logPageSelect && logDisplay) {
    renderLogPage(logPageSelect, logDisplay);
  }
});

function renderLogPage(selectEl, displayEl) {
  // 1. 生成日期下拉菜单
  siteLogs.forEach((log, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = log.date;
    selectEl.appendChild(option);
  });

  // 2. 渲染日志详情的函数
  function updateDisplay(index) {
    const log = siteLogs[index];
    
    let html = `
      <h2 class="log-content-title">${log.title}</h2>
      <div class="log-content-text">${log.content}</div>
    `;
    
    if (log.link) {
      html += `<div style="margin-top: 30px;">
                 <a href="${log.link}" class="button_margin" style="margin: 0; padding: 10px 20px; background:#FF9900; color:white; text-decoration:none; border-radius:5px; display:inline-block;">${log.linkText}</a>
               </div>`;
    }
    
    displayEl.innerHTML = html;
  }

  // 3. 监听下拉菜单切换
  selectEl.addEventListener("change", function(e) {
    updateDisplay(e.target.value);
  });

  // 4. 默认显示最新一条
  updateDisplay(0);
}