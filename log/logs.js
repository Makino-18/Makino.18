// components/logs.js
document.addEventListener("DOMContentLoaded", function() {
  const categorySelect = document.getElementById("categorySelect") || document.getElementById("yearSelect");
  const tagSelect = document.getElementById("tagSelect") || document.getElementById("dateSelect");
  const displayEl = document.getElementById("logDisplay");
  
  const logs = window.siteLogs;

  if (!categorySelect || !tagSelect || !displayEl) {
    console.error("找不到下拉框或展示区域，请检查 HTML。");
    return;
  }
  if (!logs || logs.length === 0) {
    console.error("日志数据加载失败，或者数据为空！");
    return;
  }
  
  // ===== 新增：平滑滚动到顶部的函数 =====
  const scrollToAnchor = () => {
    const anchor = document.getElementById("filterAnchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  // ====================================

  const allCategories = [...new Set(logs.map(log => log.category))];

  allCategories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });

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

  const updateTagOptions = (selectedCategory) => {
    tagSelect.innerHTML = "";
    const filteredLogs = logs.filter(log => log.category === selectedCategory);
    
    filteredLogs.forEach(log => {
      const option = document.createElement("option");
      option.value = logs.indexOf(log); 
      option.textContent = log.tag;
      tagSelect.appendChild(option);
    });

    if (filteredLogs.length > 0) {
      updateDisplay(filteredLogs[0]);
    }
  };

  // === 修改：监听事件时触发滚动 ===
  categorySelect.addEventListener("change", function(e) {
    updateTagOptions(e.target.value);
    scrollToAnchor(); // 切换分区后滚动
  });

  tagSelect.addEventListener("change", function(e) {
    const logIndex = e.target.value;
    const log = logs[logIndex];
    if (log) {
      updateDisplay(log);
      scrollToAnchor(); // 切换条目后滚动
    }
  });

  // 初始化
  if (allCategories.length > 0) {
    updateTagOptions(allCategories[0]);
  }
});