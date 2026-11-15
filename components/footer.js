// components/footer.js
document.addEventListener("DOMContentLoaded", function() {
  // 自动获取当前年份
  const currentYear = new Date().getFullYear();

  const footerHTML = `
    <div class="footer">
      <p class="footer-site-name">野泽驿站(主站)</p>
      <p class="footer-links">
        <a href="/Makino.18/claracities/ookawa.html">刻洛里拉地理志</a> | 
        <a href="/Makino.18/mbc.html">ChuanzeSocialNetwork</a> | 
        <a href="/Makino.18/toolbox.html">十八工具箱</a>
      </p>
      <p class="footer-copyright">© ${currentYear} 野泽驿站 · 保留所有权利</p>
    </div>
  `;
  
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = footerHTML;
  }
});