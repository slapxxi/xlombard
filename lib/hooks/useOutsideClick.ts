import { RefObject, useCallback, useEffect } from 'react';

export default function useOutsideClick<T extends Element, E extends MouseEvent | TouchEvent>(
  ref: RefObject<T>,
  fn: (e: E) => void,
) {
  let handleClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as any)) {
        fn(e as E);
      }
    },
    [fn, ref],
  );
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchend', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchend', handleClick);
    };
  }, []);
}
