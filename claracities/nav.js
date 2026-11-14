// claracities/nav.js
document.addEventListener("DOMContentLoaded", function() {
  const navHTML = `
    <div class="topnav">
      <a href="../index.html">返回驿站</a>
      <a href="ookawa.html">大川</a>
      <a href="changtan.html">长滩</a>
      <a href="cido.html">西多</a>
    </div>
  `;

  const placeholder = document.getElementById("subnav-placeholder");
  if (placeholder) {
    placeholder.outerHTML = navHTML;

    // 自动高亮当前页面的逻辑
    const currentPath = window.location.pathname;
    // 找到导航里所有 a 标签
    const navLinks = document.querySelectorAll(".topnav a");
    
    navLinks.forEach(link => {
      // 如果当前 URL 包含了这个链接的 href，就给它加上 active 类
      if (currentPath.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  }
});