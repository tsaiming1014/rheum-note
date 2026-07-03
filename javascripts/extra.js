// 進站密碼遮罩（僅擋搜尋引擎與路人，非真正安全機制）
(function () {
  var UNLOCK_KEY = 'rheumnote_unlocked';
  var PASSWORD_HASH = '56bf367dcedd6a56f5e1a16f879f80b7fa3fc6c1ce1f58807040e23f59fad06e';

  function sha256Hex(text) {
    var enc = new TextEncoder().encode(text);
    return crypto.subtle.digest('SHA-256', enc).then(function (buf) {
      return Array.from(new Uint8Array(buf))
        .map(function (b) { return b.toString(16).padStart(2, '0'); })
        .join('');
    });
  }

  function isUnlocked() {
    return localStorage.getItem(UNLOCK_KEY) === '1';
  }

  function showGate() {
    document.documentElement.classList.add('site-locked');

    var overlay = document.createElement('div');
    overlay.id = 'site-gate';
    overlay.innerHTML =
      '<div class="site-gate-box">' +
      '<p>請輸入密碼以檢視筆記</p>' +
      '<input type="password" id="site-gate-input" autocomplete="off" />' +
      '<button id="site-gate-submit" type="button">確認</button>' +
      '<p id="site-gate-error" class="site-gate-error"></p>' +
      '</div>';
    document.body.appendChild(overlay);

    var input = document.getElementById('site-gate-input');
    var errorEl = document.getElementById('site-gate-error');

    function attempt() {
      sha256Hex(input.value).then(function (hash) {
        if (hash === PASSWORD_HASH) {
          localStorage.setItem(UNLOCK_KEY, '1');
          document.documentElement.classList.remove('site-locked');
          overlay.remove();
        } else {
          errorEl.textContent = '密碼錯誤';
        }
      });
    }

    document.getElementById('site-gate-submit').addEventListener('click', attempt);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') attempt();
    });
    input.focus();
  }

  if (!isUnlocked()) {
    showGate();
  }
})();

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
