// src/utils/detect-os.js
document.addEventListener('DOMContentLoaded', () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isWindows7 = /windows nt 6.1/.test(userAgent);
  if (isWindows7) {
    document.documentElement.classList.add('is-windows-7');
  }
});