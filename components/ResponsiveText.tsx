import classNames from 'classnames';
import { Text, TextProps } from 'components/Text';
import useMediaQuery from '../lib/hooks/useMediaQuery';
import { mdQuery } from '../lib/styles/mq';

export type ResponsiveTextProps = {
  children?: React.ReactNode;
  className?: string;
} & TextProps;

export let ResponsiveText = (props: ResponsiveTextProps) => {
  let { children, className = '', ...rest } = props;
  let md = useMediaQuery(mdQuery);
  let textSize: TextProps['size'] = md ? 'md' : 'xs';

  return (
    <Text className={classNames(className)} size={textSize} {...rest}>
      {children}
    </Text>
  );
};
