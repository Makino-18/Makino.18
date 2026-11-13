// components/logs.js

const siteLogs = [
  {
    category: "2026年", 
    tag: "0621",
    title: "修缮日志 | 0621",
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
  },
  {
    category: "2026年", 
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
    category: "2026年", 
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
    category: "2026年", 
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