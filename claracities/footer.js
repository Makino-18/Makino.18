// claracities/footer.js
document.addEventListener("DOMContentLoaded", function() {
  const footerHTML = `
    <div class="sub-footer">
      <div class="footer-content">
        <p>刻洛里拉地理志 · 野泽驿站</p>
        <p class="footer-links">
          <a href="../index.html">野泽驿站(主站)</a> | 
          <a href="../webnews.html">ChuanzeSocialNetwork · 野泽驿站</a> | 
          <a href="../mbc.html">日牧电台</a>
        </p>
        <p class="footer-copyright">2026 野泽驿站 · 保留所有权利</p>
      </div>
    </div>
  `;

  // 找到页面里的占位符并替换
  const placeholder = document.getElementById("subfooter-placeholder");
  if (placeholder) {
    placeholder.outerHTML = footerHTML;
  }
});