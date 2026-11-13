(function () {
  var root = document.documentElement;

  // 모바일 메뉴 / mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // 다크모드 토글 / theme toggle
  var tbtn = document.querySelector('.theme-toggle');
  if (tbtn) {
    tbtn.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') === 'dark' ||
        (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = dark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // 이메일 스팸 방지: data 속성으로 조합 / assemble e-mail at runtime
  document.querySelectorAll('[data-email-user]').forEach(function (a) {
    var addr = a.dataset.emailUser + '@' + a.dataset.emailDomain;
    a.href = 'mailto:' + addr;
    if (a.hasAttribute('data-email-show')) a.textContent = addr;
  });
})();
