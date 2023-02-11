export type TextBadgeProps = {
  children?: React.ReactNode;
  className?: string;
};

export let TextBadge = (props: TextBadgeProps) => {
  let { children, className = '', ...rest } = props;
  return (
    <span className={`${className} rounded bg-blue-base px-1.5 py-0.5 text-white`} {...rest}>
      {children}
    </span>
  );
};
