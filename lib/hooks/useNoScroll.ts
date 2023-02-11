import { useEffect } from 'react';

export function useNoScroll(flag: boolean) {
  useEffect(() => {
    if (flag) {
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    }
  }, [flag]);
}
