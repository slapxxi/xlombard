import { SVGProps } from 'react';

export type DownloadIconProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let DownloadIcon = (props: DownloadIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 32 32" width={size} height={size} {...rest}>
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M28 20.5v5.33a2.67 2.67 0 0 1-2.67 2.67H6.67A2.67 2.67 0 0 1 4 25.83V20.5m5.33-6.67L16 20.5l6.67-6.67M16 20.5v-16"
      />
    </svg>
  );
};
