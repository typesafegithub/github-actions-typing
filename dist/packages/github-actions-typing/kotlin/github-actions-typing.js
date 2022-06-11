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
  function main() {
    println('Hello from Node!');
  }
  _.main = main;
  main();
  Kotlin.defineModule('github-actions-typing', _);
  return _;
}));

//# sourceMappingURL=github-actions-typing.js.map
