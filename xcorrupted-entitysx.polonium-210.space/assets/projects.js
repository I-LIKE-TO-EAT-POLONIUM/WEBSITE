// projects.js - shared script for every project page on
// xcorrupted-entitysx.polonium-210.space. Pair it with /assets/projects.css.
// Safe on pages without collapsible sections or flags (it simply does nothing).

function toggleFlag(id, src) {
  var img = document.getElementById(id);
  if (!img.src) { img.src = src; }
  img.style.display = (img.style.display === 'block') ? 'none' : 'block';
}
// "View Flag" links (were inline onclick attributes)
document.addEventListener('click', function (e) {
  var f = e.target.closest('.flag-link[data-img]');
  if (f) toggleFlag(f.getAttribute('data-img'), f.getAttribute('data-src'));
});
// Open every collapsed <details> ancestor of an in-page link target, then let the browser scroll to it
function openTo(el) {
  while (el) { if (el.tagName === 'DETAILS') el.open = true; el = el.parentElement; }
}
document.addEventListener('click', function (e) {
  var a = e.target.closest('a[href^="#"]');
  if (!a) return;
  var t = document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));
  if (t) openTo(t);
});
function handleHash() {
  if (location.hash.length > 1) {
    var t = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (t) { openTo(t); t.scrollIntoView(); }
  }
}
window.addEventListener('hashchange', handleHash);
window.addEventListener('DOMContentLoaded', handleHash);
