import { SVGProps } from 'react';

export type DashIconProps = {
  className?: string;
} & SVGProps<SVGSVGElement>;

export let DashIcon = (props: DashIconProps) => {
  let { className = '', ...rest } = props;
  return (
    <svg viewBox="0 0 10 2" {...rest}>
      <path d="m1 1h8" className="stroke-blue stroke-2 cap-round" />
    </svg>
  );
};
