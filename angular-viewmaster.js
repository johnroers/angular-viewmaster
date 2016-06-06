var $ = (function() {
  var getView = function(t, a, c) {
    if (c instanceof Object && !(c instanceof Array)) { var s = c; c = a; a = s; }
    if (!c && (a instanceof Array || typeof(a) === 'string')) { c = a; a = null; }
    var i = t.indexOf(' ');
    var e = i === -1 ? t : t.substring(0, i);
    var n = i === -1 ? null : t.substring(i + 1);
    var h = '<' + e;
    if (n) { h += ' class="' + n + '"'; }
    if (typeof(a) === 'object') { for (var v in a) { h += ' ' + getAttr(v) + '="' + a[v] + '"'; } }
    h += '>';
    if (c instanceof Array) { c.forEach(function(v) { h += v; }); } else if (c) { h += c; }
    return h += '</' + e + '>';
  };
  var getAttr = function(a) {
    var p = '|' + a + '|';
    for (var v in mapAttr) { if (mapAttr[v].indexOf(p) !== -1) return v; }
    return a;
  };
  var mapAttr = {
    "ng-if": "|if|ngIf|",
    "ng-show": "|show|ngShow|",
    "ng-repeat": "|repeat|ngRepeat|",
    "ng-click": "|click|ngClick|",
    "ui-sref": "|sref|uiSref|"
  };
  return getView;
})();
