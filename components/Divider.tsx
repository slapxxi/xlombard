import { SVGProps } from 'react';

export type DividerProps = {
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export let Divider = (props: DividerProps) => {
  let { size = 96, ...rest } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 66 17" {...rest}>
      <path
        fill="#0862EE"
        d="M11.23.63v5.35l5.08-1.67 1.3 4-5.14 1.67 3.24 4.37-3.4 2.48-3.18-4.37-3.14 4.32-3.45-2.48 3.4-4.49L.7 8.2l1.24-3.88 5.08 1.67V.63h4.21Zm23.84 0v5.35l5.07-1.67 1.3 4-5.13 1.67 3.24 4.37-3.4 2.48-3.19-4.37-3.13 4.32-3.46-2.48 3.4-4.49-5.23-1.62 1.24-3.88 5.08 1.67V.63h4.2Zm23.83 0v5.35l5.08-1.67 1.3 4-5.13 1.67 3.24 4.37-3.4 2.48-3.2-4.37-3.12 4.32-3.46-2.48 3.4-4.49-5.24-1.62 1.25-3.88 5.07 1.67V.63h4.21Z"
      />
    </svg>
  );
};
