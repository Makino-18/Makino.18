document.addEventListener("DOMContentLoaded", function() {
  // 获取页面主标题
  const mainTitleElement = document.querySelector('.header h1');
  const pageTitle = mainTitleElement ? mainTitleElement.textContent : "回到顶部";

  // 创建大纲结构
  const outlineHTML = `
    <div class="outline-box" id="outlineBox">
      <button id="backToTopBtn" class="outline-top-btn">${pageTitle}</button>
      <ul id="outlineLinks"></ul>
    </div>
  `;
  
  document.body.insertAdjacentHTML("beforeend", outlineHTML);

  // 回到顶部
  document.getElementById("backToTopBtn").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // 生成大纲链接
  const linksContainer = document.getElementById("outlineLinks");
  const headings = document.querySelectorAll('.textl h3, .textr h3');
  
  headings.forEach((heading, index) => {
    const headingId = `heading-${index}`;
    heading.id = headingId;

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${headingId}`;
    a.textContent = heading.textContent;
    
    // 点击跳转
    a.addEventListener("click", function(e) {
      e.preventDefault();
      heading.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    li.appendChild(a);
    linksContainer.appendChild(li);
  });
});