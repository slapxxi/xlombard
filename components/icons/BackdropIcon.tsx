export type BackdropIconProps = {
  className?: string;
  size?: number;
  iconSize?: number;
  children?: JSX.Element;
};

export let BackdropIcon = (props: BackdropIconProps) => {
  let { children, className = '', size = 24, iconSize = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 48 48" width={size} height={size} {...rest}>
      <path
        fill="#E3E4F8"
        d="M44.84 20.84 27.16 3.16a4.47 4.47 0 0 0-6.32 0L3.16 20.84a4.47 4.47 0 0 0 0 6.32l17.68 17.68a4.47 4.47 0 0 0 6.32 0l17.68-17.68a4.47 4.47 0 0 0 0-6.32Z"
      />
      <path
        fill="#fff"
        d="M42.29 13.51 19.4 3.43c-2.26-1-4.9.03-5.89 2.28L3.43 28.6c-1 2.26.03 4.9 2.28 5.89L28.6 44.57c2.26 1 4.9-.03 5.89-2.28L44.57 19.4c1-2.26-.03-4.9-2.28-5.89Z"
      />
      <g transform={`translate(${-iconSize / 2} ${-iconSize / 2})`}>
        <svg x="50%" y="50%">
          {children}
        </svg>
      </g>
    </svg>
  );
};
