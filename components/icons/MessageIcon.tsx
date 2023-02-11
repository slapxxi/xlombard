import { SVGProps } from 'react';

export type MessageIconProps = {
  className?: string;
  size?: number;
  dots?: boolean;
} & SVGProps<SVGSVGElement>;

export let MessageIcon = (props: MessageIconProps) => {
  let { className = '', size = 24, dots = false, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 31 31" width={size} height={size} {...rest}>
      <path
        d="M27.0709 14.6625C27.0752 16.3059 26.6914 17.9271 25.9509 19.394C25.0728 21.1518 23.723 22.6303 22.0525 23.6639C20.3821 24.6975 18.457 25.2454 16.4929 25.2462C14.8504 25.2504 13.23 24.8665 11.7639 24.1255L4.67041 26.4913L7.03491 19.394C6.29436 17.9271 5.9106 16.3059 5.91488 14.6625C5.91564 12.6974 6.46321 10.7713 7.49626 9.09995C8.5293 7.42861 10.007 6.07804 11.7639 5.19951C13.23 4.45857 14.8504 4.07461 16.4929 4.07889H17.1151C19.709 4.22207 22.159 5.3175 23.996 7.15544C25.833 8.99338 26.9278 11.4447 27.0709 14.04V14.6625Z"
        className="stroke-current stroke-2 cap-round line-round"
      />
      {dots && (
        <g className="fill-current">
          <circle cx={11} cy={15} r={2} />
          <circle cx={16} cy={15} r={2} />
          <circle cx={21} cy={15} r={2} />
        </g>
      )}
    </svg>
  );
};
