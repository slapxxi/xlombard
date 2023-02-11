import useMediaQuery from '@mui/material/useMediaQuery';

export default useMediaQuery;

// export function useMediaQuery(query: string): boolean {
//   const [matches, setMatches] = useState<boolean>(getMatches(query));
//   // hack to avoid SSR mismatch
//   const mounted = useMounted();

//   function handleChange() {
//     setMatches(getMatches(query));
//   }

//   useEffect(() => {
//     const matchMedia = window.matchMedia(query);
//     handleChange();

//     if (matchMedia.addListener) {
//       matchMedia.addListener(handleChange);
//     } else {
//       matchMedia.addEventListener('change', handleChange);
//     }

//     return () => {
//       if (matchMedia.removeListener) {
//         matchMedia.removeListener(handleChange);
//       } else {
//         matchMedia.removeEventListener('change', handleChange);
//       }
//     };
//   }, [query]);

//   // hack to avoid SSR mismatch
//   return mounted && matches;
// }

// function getMatches(query: string): boolean {
//   if (typeof window !== 'undefined') {
//     return window.matchMedia(query).matches;
//   }
//   return false;
// }
