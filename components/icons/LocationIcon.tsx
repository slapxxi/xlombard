import { SVGProps } from 'react';

export type LocationIconProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let LocationIcon = (props: LocationIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 33 33" width={size} height={size} {...rest}>
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M27.35 13.94c0 7.94-10.6 15.89-10.6 15.89S6.17 21.88 6.17 13.93a10.6 10.6 0 0 1 21.2 0v0Z"
      />
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M16.76 17.9a3.97 3.97 0 1 0 0-7.94 3.97 3.97 0 0 0 0 7.95Z"
      />
    </svg>
  );
};
