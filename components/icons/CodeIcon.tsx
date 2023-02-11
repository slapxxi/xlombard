import { SVGProps } from 'react';

export type CodeIconProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let CodeIcon = (props: CodeIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 31 31" width={size} height={size} {...rest}>
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="m23.13 20.27 4.98-4.98-4.98-4.99M8.2 10.3 3.22 15.3l4.98 4.98M18.78 5.32l-6.22 19.93"
      />
    </svg>
  );
};
