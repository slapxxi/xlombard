import '@emotion/react';
import { Theme as DefaultTheme } from './lib/types';

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}

declare module 'bcrypt' {
  export function compare(data: string, encrypted: string): Promise<boolean>;
  export function hash(data: string, saltRounds: number): Promise<string>;
}

declare module 'react-spring' {
  export const animated: any;
}

declare module '@react-spring/web' {
  export const animated: any;
}

declare global {
  var mongo: any;
}
