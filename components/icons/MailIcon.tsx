export type MailIconProps = {
  className?: string;
  size?: number;
};

export let MailIcon = (props: MailIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 26 26" width={size} height={size} {...rest}>
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="M21.26 4.73H4.42a2.1 2.1 0 0 0-2.1 2.11V19.5a2.1 2.1 0 0 0 2.1 2.1h16.84a2.1 2.1 0 0 0 2.1-2.1V6.84a2.1 2.1 0 0 0-2.1-2.11Z"
      />
      <path
        className="stroke-current stroke-2 cap-round line-round"
        d="m23.37 7.9-9.44 6a2.04 2.04 0 0 1-2.17 0l-9.44-6"
      />
    </svg>
  );
};
