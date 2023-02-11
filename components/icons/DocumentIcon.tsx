import { SVGProps } from 'react';

export type DocumentIconProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let DocumentIcon = (props: DocumentIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 24 24" width={size} height={size} {...rest}>
      <svg viewBox="0 0 24 26" x="1.5">
        <path
          className="stroke-current stroke-2 cap-round line-round"
          d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z"
        />
        <path className="stroke-current stroke-2 cap-round line-round" d="M14 2v6h6" />
      </svg>
    </svg>
  );
};
