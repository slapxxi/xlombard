import { SVGProps } from 'react';

export type ExternalIconProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let ExternalIcon = (props: ExternalIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 15 15" width={size} height={size} {...rest}>
      <path
        className="stroke-current cap-round line-round"
        d="M10.5 7.82v3.5a1.17 1.17 0 0 1-1.17 1.17H2.92a1.17 1.17 0 0 1-1.17-1.17V4.9a1.17 1.17 0 0 1 1.17-1.16h3.5M8.75 1.99h3.5v3.5M5.83 8.4 12.25 2"
      />
    </svg>
  );
};
