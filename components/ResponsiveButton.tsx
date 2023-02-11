import classNames from 'classnames';
import useMediaQuery from '../lib/hooks/useMediaQuery';
import { mdQuery } from '../lib/styles/mq';
import { Button, ButtonProps } from './Button';

export type ResponsiveButtonProps = {
  children?: React.ReactNode;
  className?: string;
} & ButtonProps;

export let ResponsiveButton = (props: ResponsiveButtonProps) => {
  let { children, className = '', ...rest } = props;
  let md = useMediaQuery(mdQuery);
  let buttonSize: ButtonProps['size'] = md ? 'lg' : 'md';
  let buttonRadius: ButtonProps['radius'] = md ? 'xl' : 'md';

  return (
    <Button className={classNames(className)} size={buttonSize} radius={buttonRadius} {...rest}>
      {children}
    </Button>
  );
};
