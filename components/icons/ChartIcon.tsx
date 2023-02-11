import { SVGProps } from 'react';

export type ChartIconProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let ChartIcon = (props: ChartIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 31 31" width={size} height={size} {...rest}>
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M26.41 20.65A12.45 12.45 0 1 1 9.97 4.39"
      />
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M27.4 15.8A12.46 12.46 0 0 0 14.95 3.36v12.46H27.4Z"
      />
    </svg>
  );
};
