import classNames from 'classnames';
import useMediaQuery from '../lib/hooks/useMediaQuery';
import { mdQuery } from '../lib/styles/mq';
import { Title, TitleProps } from './Title';

export type PageTitleProps = {
  children?: React.ReactNode;
  className?: string;
} & TitleProps;

export let PageTitle = (props: PageTitleProps) => {
  let { children, className = '', ...rest } = props;
  let md = useMediaQuery(mdQuery);

  return (
    <Title
      className={classNames(className, md && 'leading-tight')}
      variant="decorated"
      size={md ? '2xl' : undefined}
      fontSize={md ? 54 : undefined}
      {...rest}
    >
      {children}
    </Title>
  );
};
