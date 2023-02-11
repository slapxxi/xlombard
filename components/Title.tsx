import classNames from 'classnames';
import styles from './Title.module.scss';

export type TitleProps = {
  children?: React.ReactNode;
  className?: string;
  weight?: 400 | 500 | 700;
  size?: 'xs' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'decorated' | 'normal' | 'stroke';
  decorationColor?: 'blue-light' | 'violet' | 'green-light' | string;
  center?: boolean;
  fontSize?: number;
};

export let Title = (props: TitleProps) => {
  let {
    children,
    className = '',
    as = 'h2',
    size = 'lg',
    variant = 'normal',
    decorationColor = 'violet',
    center = false,
    weight = 700,
    fontSize,
    ...rest
  } = props;
  let Element = as;
  return (
    <Element
      style={{
        // @ts-ignore
        '--decoration-color': `var(--${decorationColor},${decorationColor})`,
        fontSize: fontSize,
        fontWeight: weight,
      }}
      className={classNames(
        className,
        size === 'xs' && 'text-xs',
        size === 'md' && 'text-base',
        size === 'lg' && 'text-lg',
        size === 'xl' && 'text-xl',
        size === '2xl' && 'text-2xl',
        size === '3xl' && 'text-3xl',
        size === '4xl' && 'text-4xl',
        variant === 'decorated' && styles.decorated,
        variant === 'stroke' && styles.stroke,
        center && 'text-center',
      )}
      {...rest}
    >
      {children}
    </Element>
  );
};
