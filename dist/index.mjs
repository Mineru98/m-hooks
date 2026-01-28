// src/hooks/useRemoveUnicornWatermark.ts
import { useEffect } from "react";
function useRemoveUnicornWatermark() {
  useEffect(() => {
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
export {
  useRemoveUnicornWatermark
};
//# sourceMappingURL=index.mjs.map