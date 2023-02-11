import classNames from 'classnames';

export type StrongProps = {
  children?: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | '2xl' | '3xl' | '5xl' | '7xl' | number;
};

export let Strong = (props: StrongProps) => {
  let { children, className = '', size = 'md', ...rest } = props;
  return (
    <strong
      className={classNames(
        className,
        'font-bold',
        size === 'xs' && 'text-xs',
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-base',
        size === '2xl' && 'text-2xl',
        size === '3xl' && 'text-3xl',
        size === '5xl' && 'text-5xl',
        size === '7xl' && 'text-7xl',
      )}
      style={{ fontSize: typeof size === 'number' ? size : undefined }}
      {...rest}
    >
      {children}
    </strong>
  );
};
