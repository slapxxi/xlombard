import { SVGProps } from 'react';

export type LogoProps = {
  className?: string;
  variant?: 'mono' | 'normal';
} & SVGProps<SVGSVGElement>;

export let Logo = (props: LogoProps) => {
  let { className = '', variant = 'normal', ...rest } = props;
  return (
    <svg className={`${className} group`} viewBox="0 0 123 31" {...rest}>
      <path
        d="M0 28.44h121.16V27.3H0v1.14Z"
        className={`${variant === 'mono' ? 'fill-white' : 'fill-blue-base group-hover:fill-blue-dark'}`}
      />
      <path
        d="M0 28.44h28.44V0H0v28.44ZM22.13 19.66c.08.09.14.2.2.35a.9.9 0 0 1 .08.36v3.33h-3.85V21.8a.9.9 0 0 0-.08-.35.92.92 0 0 0-.17-.36l-3.66-4.15a.42.42 0 0 0-.3-.13c-.09 0-.17.04-.24.13l-3.66 4.15c-.07.1-.14.21-.2.36a.9.9 0 0 0-.07.35v1.89H6.35v-3.33c0-.11.02-.23.06-.36a.98.98 0 0 1 .22-.35l4.94-5.6c.16-.22.16-.43 0-.63l-4.94-5.6c-.1-.09-.17-.2-.22-.32a1.6 1.6 0 0 1-.06-.39V3.74h3.83v1.94c0 .1.02.23.08.38.05.13.12.24.19.33l3.66 4.15c.07.09.15.13.24.13.11 0 .21-.04.3-.13l3.66-4.15c.08-.1.13-.2.17-.33.05-.15.08-.27.08-.38V3.74h3.85v3.38c0 .11-.03.24-.08.39-.06.12-.12.23-.2.32l-4.94 5.6c-.16.2-.16.41 0 .63l4.94 5.6Z"
        className={`${variant === 'mono' ? 'fill-white' : 'fill-blue-base group-hover:fill-blue-dark'}`}
      />
      <path
        d="M36.69 21.41V11.17h-2.56v12.8h7.68v-2.56h-5.12ZM54.6 11.17H44.37v12.8H54.6v-12.8Zm-2.56 10.24h-5.12v-7.68h5.12v7.68Zm5.12-10.24v12.8h2.55V13.73h2.56v10.24h2.56V13.73h2.56v10.24h2.56v-12.8h-12.8Zm15.35 0v12.8h10.24v-5.12H80.2V16.3h2.56v-5.12H72.52Zm7.58 2.56v2.56h-5.02v-2.56h5.02Zm0 5.12v2.56h-5.02v-2.56h5.02Zm5.22-7.68v12.8h2.56v-5.12H93v5.12h2.56v-12.8H85.32ZM93 16.3h-5.12v-2.56H93v2.56Zm15.36 7.68v-5.12h-2.56V16.3h2.56v-5.12H98.12v12.8h2.56v-5.12h5.12v5.12h2.56Zm-2.66-7.68h-5.02v-2.56h5.02v2.56Zm12.9-2.56v-2.56h-7.68v12.8h7.68v-2.56h2.56v-7.68h-2.56Zm-.1 0v7.68h-5.02v-7.68h5.01Z"
        className={`${variant === 'mono' ? 'fill-white' : 'fill-black'}`}
      />
    </svg>
  );
};
