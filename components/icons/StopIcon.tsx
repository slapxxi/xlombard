export type StopIconProps = {
  className?: string;
  size?: number;
};

export let StopIcon = (props: StopIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 30 30" width={size} height={size} {...rest}>
      <path
        d="M15.4878 26.737C22.1655 26.737 27.5788 21.3237 27.5788 14.646C27.5788 7.96827 22.1655 2.55493 15.4878 2.55493C8.81007 2.55493 3.39673 7.96827 3.39673 14.646C3.39673 21.3237 8.81007 26.737 15.4878 26.737Z"
        className="stroke-current stroke-2 cap-round line-round"
      />
      <path d="M6.93945 6.09766L24.0362 23.1944" className="stroke-current stroke-2 cap-round line-round" />
    </svg>
  );
};
