"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  useRemoveUnicornWatermark: () => useRemoveUnicornWatermark
});
module.exports = __toCommonJS(index_exports);

// src/hooks/useRemoveUnicornWatermark.ts
var import_react = require("react");
function useRemoveUnicornWatermark() {
  (0, import_react.useEffect)(() => {
    const removeWatermark = () => {
      const watermarkLinks = document.querySelectorAll(
        'a[href*="unicorn.studio?utm_source"]'
      );
      watermarkLinks.forEach((link) => {
        link.remove();
      });
    };
    removeWatermark();
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          removeWatermark();
        }
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => observer.disconnect();
  }, []);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useRemoveUnicornWatermark
});
//# sourceMappingURL=index.js.map