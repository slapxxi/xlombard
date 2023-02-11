import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

export type TextLinkProps = {
  children?: React.ReactNode;
  className?: string;
} & LinkProps;

export let TextLink = (props: TextLinkProps) => {
  let { children, className = '', ...rest } = props;
  return (
    <Link className={classNames(className, 'text-blue-base hover:underline')} {...rest}>
      {children}
    </Link>
  );
};
