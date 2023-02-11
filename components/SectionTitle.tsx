import classNames from 'classnames';
import useMediaQuery from '../lib/hooks/useMediaQuery';
import { mdQuery } from '../lib/styles/mq';
import { Title, TitleProps } from './Title';

export type SectionTitleProps = {
  children?: React.ReactNode;
  className?: string;
  decorationColor?: TitleProps['decorationColor'];
};

export let SectionTitle = (props: SectionTitleProps) => {
  let { children, className = '', decorationColor = 'blue-light', ...rest } = props;
  let md = useMediaQuery(mdQuery);
  let titleSize: TitleProps['size'] = md ? '4xl' : '2xl';

  return (
    <Title
      variant="decorated"
      decorationColor={decorationColor}
      className={classNames(className)}
      size={titleSize}
      {...rest}
    >
      {children}
    </Title>
  );
};
