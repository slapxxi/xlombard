import { SVGProps } from 'react';

export type BadgeProps = {
  r?: number;
  textColor?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
} & SVGProps<SVGSVGElement>;

export let Badge = (props: BadgeProps) => {
  let { children, r = 10, backgroundColor = 'crimson', textColor = 'white', ...rest } = props;
  return (
    <svg style={{ overflow: 'visible' }} x="100%" y="0" fontSize={r + 1} {...rest}>
      <circle cx="0" cy="0" r={r} stroke="none" fill={backgroundColor} />
      <text x="0" y="1" textAnchor="middle" alignmentBaseline="middle" fill={textColor} stroke="none">
        {children}
      </text>
    </svg>
  );
};
