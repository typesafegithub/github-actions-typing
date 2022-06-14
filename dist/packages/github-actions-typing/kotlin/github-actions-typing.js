(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'github-actions-typing'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'github-actions-typing'.");
    }
    root['github-actions-typing'] = factory(typeof this['github-actions-typing'] === 'undefined' ? {} : this['github-actions-typing'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var throwCCE = Kotlin.throwCCE;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function main() {
    println("Action's manifest:");
    var manifest = readActionManifest();
    println(manifest);
  }
  var fs;
  function readActionManifest() {
    var tmp$;
    var $receiver = listOf(['yaml', 'yml']);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$('action.' + item);
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (fileExists(element)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$ = firstOrNull$result) != null ? readTextFileAsUtf8(tmp$) : null;
  }
  function fileExists(path) {
    var tmp$;
    return typeof (tmp$ = fs.existsSync(path)) === 'boolean' ? tmp$ : throwCCE();
  }
  function readTextFileAsUtf8(path) {
    var tmp$;
    return typeof (tmp$ = fs.readFileSync(path, 'utf8')) === 'string' ? tmp$ : throwCCE();
  }
  _.main = main;
  Object.defineProperty(_, 'fs', {
    get: function () {
      return fs;
    }
  });
  _.readActionManifest = readActionManifest;
  fs = require('fs');
  main();
  Kotlin.defineModule('github-actions-typing', _);
  return _;
}));

//# sourceMappingURL=github-actions-typing.js.map
