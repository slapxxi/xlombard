import { SVGProps } from 'react';

export type NotificationIconProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let NotificationIcon = (props: NotificationIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 48 48" width={size} height={size} {...rest}>
      <path
        className="stroke-current stroke-[3] cap-round line-round"
        d="M36 16a12 12 0 0 0-24 0c0 14-6 18-6 18h36s-6-4-6-18Zm-8.54 26a4 4 0 0 1-6.92 0M4 16c0-4.4 1.4-8.6 4-12m36 12a20 20 0 0 0-4-12"
      />
    </svg>
  );
};
