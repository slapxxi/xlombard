import { RefObject, useEffect, useState } from 'react';

type Config = { freezeOnceVisible?: boolean } & IntersectionObserverInit;

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  config: Config = {},
): IntersectionObserverEntry | undefined {
  let { rootMargin, threshold = 0, root = null, freezeOnceVisible = false } = config;
  let [entry, setEntry] = useState<IntersectionObserverEntry>();
  let frozen = entry?.isIntersecting && freezeOnceVisible;
  let updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    let node = elementRef?.current;
    let hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    let observerParams = { threshold, root, rootMargin };
    let observer = new IntersectionObserver(updateEntry, observerParams);
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef?.current, JSON.stringify(threshold), root, rootMargin, frozen]);

  return entry;
}
