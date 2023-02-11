import { SVGProps } from 'react';

export type ClockIconProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let ClockIcon = (props: ClockIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 14 14" width={size} height={size} {...rest}>
      <g stroke="#9DA7E0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} clipPath="url(#a)">
        <path d="M7.03 12.75a5.63 5.63 0 1 0 0-11.26 5.63 5.63 0 0 0 0 11.26Z" />
        <path d="M7.03 3.75v3.37L9.28 6" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.27.37h13.51v13.5H.28z" />
        </clipPath>
      </defs>
    </svg>
  );
};
