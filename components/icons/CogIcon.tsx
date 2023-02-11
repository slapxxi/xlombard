import { SVGProps } from 'react';

export type CogIconProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let CogIcon = (props: CogIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 54 54" width={size} height={size} {...rest}>
      <path
        d="M26.95 44.74A17.7 17.7 0 0 0 39.47 14.5a17.7 17.7 0 1 0-25.03 25.05 17.7 17.7 0 0 0 12.51 5.19v0Z"
        className="stroke-current stroke-[3] cap-round line-round"
      />
      <path
        className="stroke-current stroke-[3] cap-round line-round"
        d="M26.95 31.45a4.42 4.42 0 1 0 0-8.84 4.42 4.42 0 0 0 0 8.84ZM26.95 4.9v4.42M26.95 49.16v-4.42M38.01 46.2l-2.2-3.83M24.74 23.2 15.9 7.86M46.11 38.1l-3.83-2.22M7.8 15.96l3.82 2.21M31.38 27.03h17.7M4.83 27.03h4.42M46.11 15.96l-3.83 2.21M7.8 38.1l3.82-2.22M38.01 7.86l-2.2 3.83M24.74 30.86 15.9 46.2"
      />
    </svg>
  );
};
