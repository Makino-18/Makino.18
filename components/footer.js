document.addEventListener("DOMContentLoaded", function() {
  const footerHTML = `
    <div class="footer">
      <p class="p_margin">2026 野泽驿站 · 保留所有权利</p>
      <p class="p_margin" style="margin-top: 8px;">联系邮箱：muforsocial@gmail.com</p>
      <p class="p_margin" style="margin-top: 8px;">*测试中，非最终品质*</p>
    </div>
  `;
  
  // 找到页面里的 <div id="footer-placeholder"></div> 并替换
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = footerHTML;
  }
});