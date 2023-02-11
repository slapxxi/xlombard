import { useEffect, useState } from 'react';

export function useMounted(): boolean {
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
