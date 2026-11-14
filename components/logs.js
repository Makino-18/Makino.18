// components/logs.js
document.addEventListener("DOMContentLoaded", function() {
  // 获取元素
  const categorySelect = document.getElementById("categorySelect") || document.getElementById("yearSelect");
  const tagSelect = document.getElementById("tagSelect") || document.getElementById("dateSelect");
  const displayEl = document.getElementById("logDisplay");
  
  // 获取合并后的数据
  const logs = window.siteLogs;

  // 检查元素和数据是否存在
  if (!categorySelect || !tagSelect || !displayEl) {
    console.error("找不到下拉框或展示区域，请检查 HTML。");
    return;
  }
  if (!logs || logs.length === 0) {
    console.error("日志数据加载失败，或者数据为空！请检查 data-2026.js 等文件。");
    return;
  }
  
  // 1. 提取所有的 category (分类)
  const allCategories = [...new Set(logs.map(log => log.category))];

  // 2. 初始化第一个下拉框
  allCategories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });

  // 3. 渲染正文内容的函数
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

  // 4. 根据分类更新第二个下拉框
  const updateTagOptions = (selectedCategory) => {
    tagSelect.innerHTML = "";
    
    // 过滤出当前选中的分类下的所有日志
    const filteredLogs = logs.filter(log => log.category === selectedCategory);
    
    filteredLogs.forEach(log => {
      const option = document.createElement("option");
      // 使用日志的原始索引作为 value，避免冲突
      option.value = logs.indexOf(log); 
      option.textContent = log.tag;
      tagSelect.appendChild(option);
    });

    // 默认展示该分类下的第一篇
    if (filteredLogs.length > 0) {
      updateDisplay(filteredLogs[0]);
    }
  };

  // 5. 绑定事件
  categorySelect.addEventListener("change", function(e) {
    updateTagOptions(e.target.value);
  });

  tagSelect.addEventListener("change", function(e) {
    const logIndex = e.target.value;
    const log = logs[logIndex];
    if (log) {
      updateDisplay(log);
    }
  });

  // 6. 初始化页面（默认选中第一个分类）
  if (allCategories.length > 0) {
    updateTagOptions(allCategories[0]);
  }
});