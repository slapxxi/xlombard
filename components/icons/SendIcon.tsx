export type SendIconProps = {
  className?: string;
  size?: number;
};

export let SendIcon = (props: SendIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 30 30" width={size} height={size} {...rest}>
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M5.02 27.58h16.93a2.42 2.42 0 0 0 2.42-2.42V10.05L17.72 3.4H7.44a2.42 2.42 0 0 0-2.42 2.42v4.83"
      />
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M17.11 3.4v7.25h7.26M2.6 19.12h12.1M11.07 22.74l3.63-3.62-3.63-3.63"
      />
    </svg>
  );
};
