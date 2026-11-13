// components/logs.js

const siteLogs = [
  {
    category: "2026年", 
    tag: "0621",
    title: "观测前线：Minecraft 整合包发布",
    content: `
            <h3 class="h3_margin">新增内容</h3>
            <p class="p_margin">
                ·新增了【日牧电台】板块<br/>
                ·新增了【站点资讯】板块<br/>
                ·新增了【十八工具箱】板块<br/>
                ·新增了【邦邦实验室】板块<br/>
                ·为全页面新增了【导航栏】
            </p>
            <h3 class="h3_margin">修改内容</h3>
            <p class="p_margin">
                ·对【首页】进行了修改<br/>
                ·对【导航栏】内容进行了更新
            </p>
            <h3 class="h3_margin">移除内容</h3>
            <p class="p_margin">
                ·移除了【首页】的部分内容<br/>
                ·移除了【跳转测试】页面<br/>
                ·移除了【导航测试】页面
            </p>
    `,
    link: "/Makino.18/toolbox.html",
    linkText: "前往工具箱"
  },
  {
    category: "2026年",
    tag: "10月1日",
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
  },
  {
    category: "2025年",
    tag: "12月25日",
    title: "节日特辑：冬日星愿",
    content: `
      <p>野泽驿站祝各位旅客圣诞快乐！</p>
      <p>今晚的日牧电台将播放特别节目，欢迎收听。</p>
    `,
    link: "/Makino.18/MBC.html",
    linkText: "打开电台"
  }
];

// ==========================================
// 核心渲染逻辑
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
  const categorySelect = document.getElementById("categorySelect");
  const tagSelect = document.getElementById("tagSelect");
  const displayEl = document.getElementById("logDisplay");
  
  if (categorySelect && tagSelect && displayEl) {
    
    // 1. 提取所有不同的 category（利用 Set 去重）
    const allCategories = [...new Set(siteLogs.map(log => log.category))];

    // 初始化第一个下拉菜单
    allCategories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });

    // 2. 渲染具体日志内容的函数
    const updateDisplay = (log) => {
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
    };

    // 3. 根据选中的 category，更新第二个下拉菜单
    const updateTagOptions = (selectedCategory) => {
      // 清空当前的 tag 选项
      tagSelect.innerHTML = "";
      
      // 过滤出当前 category 下的所有日志
      const filteredLogs = siteLogs.filter(log => log.category === selectedCategory);
      
      // 填充新的 tag 选项
      filteredLogs.forEach(log => {
        const option = document.createElement("option");
        // 用唯一索引作为 value，防止同一天有两篇日志导致冲突
        option.value = siteLogs.indexOf(log); 
        option.textContent = log.tag;
        tagSelect.appendChild(option);
      });

      // 默认展示该分类下的第一条日志
      if (filteredLogs.length > 0) {
        updateDisplay(filteredLogs[0]);
      }
    };

    // 4. 监听第一个下拉框变化
    categorySelect.addEventListener("change", function(e) {
      updateTagOptions(e.target.value);
    });

    // 5. 监听第二个下拉框变化
    tagSelect.addEventListener("change", function(e) {
      const logIndex = e.target.value;
      const log = siteLogs[logIndex];
      if (log) {
        updateDisplay(log);
      }
    });

    // 6. 页面初始化：触发一次 category 选择
    if (allCategories.length > 0) {
      updateTagOptions(allCategories[0]);
    }
  }
});