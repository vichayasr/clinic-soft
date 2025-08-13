(function() {
  var btn = document.getElementById('big-rack-rail-toggle');
  var container = document.getElementById('col-width-container');
  var label = btn ? btn.querySelector('.mode-label') : null;
  if (btn && container && label) {
    btn.addEventListener('click', function () {
      var toRail = !container.classList.contains('rail');
      container.classList.toggle('rail', toRail);
      container.classList.toggle('rack', !toRail);
      btn.setAttribute('aria-pressed', String(toRail));
      label.textContent = toRail ? 'Rail' : 'Rack';
    });
  }
})();


