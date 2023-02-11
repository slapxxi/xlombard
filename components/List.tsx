import classNames from 'classnames';
import styles from './List.module.scss';

export type ListProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'disc' | 'empty' | 'list' | 'ordered';
  gap?: 3 | 6;
};

export let List = (props: ListProps) => {
  let { children, className = '', variant = 'empty', gap = variant === 'disc' ? 1.5 : 4, ...rest } = props;
  return (
    <ul
      className={classNames(
        className,
        'flex flex-col',
        variant === 'disc' && styles.disc,
        variant === 'list' && 'ml-5 list-disc',
        variant === 'ordered' && 'ml-5 list-decimal',
        `gap-${gap}`,
      )}
      {...rest}
    >
      {children}
    </ul>
  );
};

export type ListItemProps = {
  children?: React.ReactNode;
  className?: string;
};

export let ListItem = (props: ListItemProps) => {
  let { children, className = '', ...rest } = props;
  return (
    <li className={`${className}`} {...rest}>
      {children}
    </li>
  );
};
