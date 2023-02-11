import classNames from 'classnames';
import { HTMLProps } from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'outline' | 'fill' | 'icon';
  radius?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  center?: boolean;
} & Omit<HTMLProps<HTMLButtonElement>, 'size'>;

export let Button = (props: ButtonProps) => {
  let {
    children,
    className = '',
    variant = 'outline',
    type,
    radius = 'md',
    size = 'md',
    center = false,
    ...rest
  } = props;
  return (
    <button
      className={classNames(
        className,
        'inline-flex items-center gap-2.5 border-2',
        `rounded-${radius}`,
        variant === 'fill' && 'border-blue-base bg-blue-base text-white hover:bg-blue-dark',
        variant === 'outline' &&
          'border-blue-base text-blue-base hover:border-blue-dark hover:text-blue-dark dark:border-white dark:text-white',
        variant === 'icon' &&
          'border-blue-base !p-[7px] text-blue-base hover:border-blue-dark hover:text-blue-dark dark:border-white dark:text-white',
        size === 'sm' && 'px-3.5 py-[9px] text-xs font-bold md:text-sm',
        size === 'md' && 'px-4 py-3 text-sm font-bold md:text-base',
        size === 'lg' && 'px-7 py-4 text-2xl font-bold',
        center && 'justify-center',
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
