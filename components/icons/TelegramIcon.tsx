export type TelegramIconProps = {
  className?: string;
  size?: number;
};

export let TelegramIcon = (props: TelegramIconProps) => {
  let { className = '', size = 24, ...rest } = props;
  return (
    <svg className={`${className} fill-none`} viewBox="0 0 24 24" width={size} height={size} {...rest}>
      <path
        className="fill-current"
        d="M20.84 2.06A1.5 1.5 0 0 0 18.78.43l-17.1 7.2c-1.2.5-1.26 2.23 0 2.75 1.24.51 2.5.99 3.77 1.41 1.17.39 2.44.75 3.46.85.28.33.63.65 1 .95.54.45 1.2.91 1.88 1.36a59 59 0 0 0 3.89 2.29c1.21.66 2.67-.1 2.89-1.43l2.27-13.75ZM3.59 8.99l15.13-6.36-2.12 12.84a56.1 56.1 0 0 1-3.72-2.2 19.99 19.99 0 0 1-2.14-1.6l3.97-3.96a1 1 0 1 0-1.42-1.42l-4.33 4.34a17 17 0 0 1-2.88-.74A48.9 48.9 0 0 1 3.6 9Z"
        transform="translate(1 3)"
      ></path>
      /
    </svg>
  );
};
