// components/logs.js

document.addEventListener("DOMContentLoaded", function() {
  const categorySelect = document.getElementById("categorySelect");
  const tagSelect = document.getElementById("tagSelect");
  const displayEl = document.getElementById("logDisplay");
  
  // 确保页面有元素，且数据文件已加载
  if (categorySelect && tagSelect && displayEl && typeof siteLogs !== 'undefined') {
    
    // 1. 提取去重后的 category
    const allCategories = [...new Set(siteLogs.map(log => log.category))];

    // 初始化第一个下拉菜单
    allCategories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });

    // 2. 渲染内容
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

    // 3. 更新第二个下拉菜单
    const updateTagOptions = (selectedCategory) => {
      tagSelect.innerHTML = "";
      const filteredLogs = siteLogs.filter(log => log.category === selectedCategory);
      
      filteredLogs.forEach(log => {
        const option = document.createElement("option");
        option.value = siteLogs.indexOf(log); 
        option.textContent = log.tag;
        tagSelect.appendChild(option);
      });

      if (filteredLogs.length > 0) {
        updateDisplay(filteredLogs[0]);
      }
    };

    // 4. 第一个下拉框变化
    categorySelect.addEventListener("change", function(e) {
      updateTagOptions(e.target.value);
      scrollToAnchor(); // 自动滚回顶部
    });

    // 5. 第二个下拉框变化
    tagSelect.addEventListener("change", function(e) {
      const logIndex = e.target.value;
      const log = siteLogs[logIndex];
      if (log) {
        updateDisplay(log);
        scrollToAnchor(); // 自动滚回顶部
      }
    });

    // 平滑滚动函数
    const scrollToAnchor = () => {
      const anchor = document.getElementById("filterAnchor");
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // 6. 页面初始化
    if (allCategories.length > 0) {
      updateTagOptions(allCategories[0]);
    }
  }
});