import { useEffect } from 'react';

/**
 * Unicorn Studio 워터마크를 자동으로 제거하는 훅
 * MutationObserver를 사용하여 동적으로 추가되는 워터마크도 감지합니다.
 */
export function useRemoveUnicornWatermark(): void {
  useEffect(() => {
    const removeWatermark = (): void => {
      const watermarkLinks = document.querySelectorAll<HTMLAnchorElement>(
        'a[href*="unicorn.studio?utm_source"]'
      );
      watermarkLinks.forEach((link) => {
        link.remove();
      });
    };

    removeWatermark();

    const observer = new MutationObserver((mutations: MutationRecord[]) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          removeWatermark();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);
}

export default useRemoveUnicornWatermark;
