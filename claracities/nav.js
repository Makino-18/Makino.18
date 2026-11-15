// claracities/nav.js
document.addEventListener("DOMContentLoaded", function() {
  const navHTML = `
    <div class="topnav">
      <a href="ookawa.html">大川</a>
      <a href="changtan.html">长滩</a>
      <a href="cido.html">西多</a>
    </div>
  `;

  const placeholder = document.getElementById("subnav-placeholder");
  if (placeholder) {
    placeholder.outerHTML = navHTML;

    // 自动高亮当前页面
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".topnav a");
    
    navLinks.forEach(link => {
      // 获取文件名，例如 ookawa.html
      const linkHref = link.getAttribute("href");
      if (linkHref && currentPath.includes(linkHref)) {
        link.classList.add("active");
      }
    });
  }
});