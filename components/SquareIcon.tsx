export type SquareIconProps = {
  children?: React.ReactNode;
  className?: string;
  size?: number;
  iconSize?: number;
};

export let SquareIcon = (props: SquareIconProps) => {
  let { children, className = '', size = 50, iconSize = 24, ...rest } = props;
  return (
    <svg className={`${className}`} width={size} height={size} viewBox="0 0 48 48" {...rest}>
      <rect width="100%" height="100%" />
      <g transform={`translate(${-iconSize / 2} ${-iconSize / 2})`}>
        <svg x="50%" y="50%">
          {children}
        </svg>
      </g>
    </svg>
  );
};
