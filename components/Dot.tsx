import classNames from 'classnames';
import { SVGProps } from 'react';

export type DotProps = {
  children?: React.ReactNode;
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let Dot = (props: DotProps) => {
  let { children, className = '', size = 14, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" className={classNames(className)} width={size} height={size} {...rest}>
      <circle cx="50%" cy="50%" r="50%" />
    </svg>
  );
};
