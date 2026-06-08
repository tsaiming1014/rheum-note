// 將目錄標題改為繁體中文
document.addEventListener('DOMContentLoaded', function () {
  function fixTocTitle() {
    document.querySelectorAll('.md-nav__title').forEach(function (el) {
      if (el.textContent.trim() === '目录') {
        el.textContent = '目錄';
      }
    });
  }
  fixTocTitle();
  new MutationObserver(fixTocTitle).observe(document.body, { childList: true, subtree: true });
});
