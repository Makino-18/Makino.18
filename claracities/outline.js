// claracities/outline.js
document.addEventListener("DOMContentLoaded", function() {
  // 1. 创建大纲的 HTML 结构
  const outlineHTML = `
    <div class="outline-box" id="outlineBox">
      <div class="outline-title">目录</div>
      <ul id="outlineLinks">
        <!-- 链接由 JS 自动生成 -->
      </ul>
    </div>
  `;
  
  // 把大纲塞进 body 里
  document.body.insertAdjacentHTML("beforeend", outlineHTML);

  const linksContainer = document.getElementById("outlineLinks");
  
  // 2. 自动抓取页面中所有需要生成大纲的标题（比如 h3）
  const headings = document.querySelectorAll('.textl h3, .textr h3');
  
  headings.forEach((heading, index) => {
    // 给每个标题加一个唯一的 ID，方便锚点跳转
    const headingId = `heading-${index}`;
    heading.id = headingId;

    // 创建对应的 <li> 和 <a>
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${headingId}`;
    a.textContent = heading.textContent;
    
    // 点击平滑滚动
    a.addEventListener("click", function(e) {
      e.preventDefault(); // 阻止默认的瞬间跳转
      heading.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    li.appendChild(a);
    linksContainer.appendChild(li);
  });
});