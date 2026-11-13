document.addEventListener("DOMContentLoaded", function() {
  const navHTML = `
    <div class="topnav">
      <a href="/Makino.18/index.html" class="tna1">首页</a>
      <a href="/Makino.18/MBC.html">日牧电台</a>
      <a href="/Makino.18/webnews.html">站点资讯</a>
      <a href="/Makino.18/toolbox.html">工具箱</a>
      <a href="/Makino.18/Lib.html">实验室</a>
      <a href="/Makino.18/claracities/ookawa.html">刻洛里拉地理志</a>
    </div>
  `;
  
  // 找到页面里的 <div id="nav-placeholder"></div> 并替换
  const navPlaceholder = document.getElementById("nav-placeholder");
  if (navPlaceholder) {
    navPlaceholder.outerHTML = navHTML;
  }
});