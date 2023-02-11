import classNames from 'classnames';

export type TextProps = {
  children?: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  subtle?: boolean;
  pre?: boolean;
  prose?: boolean;
  center?: boolean;
  weight?: 400 | 500 | 700;
  as?: 'p' | 'small';
};

export let Text = (props: TextProps) => {
  let {
    children,
    className = '',
    size = 'md',
    subtle = false,
    pre = false,
    prose = false,
    center = false,
    weight = 400,
    as = 'p',
    ...rest
  } = props;
  let Element = as;
  return (
    <Element
      className={classNames(
        className,
        size === 'xs' && 'text-xs',
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-base',
        size === 'lg' && 'text-lg',
        size === 'xl' && 'text-xl',
        prose && 'max-w-prose',
        subtle && 'text-gray-500',
        pre && 'whitespace-pre',
        center && 'text-center',
      )}
      style={{ fontWeight: weight }}
      {...rest}
    >
      {children}
    </Element>
  );
};
