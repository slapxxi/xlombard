import classNames from 'classnames';
import { Text, TextProps } from 'components/Text';
import useMediaQuery from '../lib/hooks/useMediaQuery';
import { mdQuery } from '../lib/styles/mq';

export type HeroTextProps = {
  children?: React.ReactNode;
  className?: string;
};

export let HeroText = (props: HeroTextProps) => {
  let { children, className = '', ...rest } = props;
  let md = useMediaQuery(mdQuery);
  let textSize: TextProps['size'] = md ? 'lg' : 'md';

  return (
    <Text className={classNames(className)} size={textSize} {...rest}>
      {children}
    </Text>
  );
};
