export type MenuIconProps = {
  className?: string;
  size?: number;
};

export let MenuIcon = (props: MenuIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 24 24" width={size} height={size} {...rest}>
      <path className="stroke-current stroke-2 cap-round line-round" d="M4 12h16M4 6h16M4 18h16" />
    </svg>
  );
};
