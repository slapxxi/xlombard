import useMediaQuery from '../lib/hooks/useMediaQuery';
import { mdQuery } from '../lib/styles/mq';
import { Text } from './Text';
import { Title } from './Title';

export type CardProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  footer?: JSX.Element;
};

export let Card = (props: CardProps) => {
  let { children, className = '', title, description, footer, ...rest } = props;
  let md = useMediaQuery(mdQuery);

  return (
    <CardContainer {...rest}>
      <div className="p-4 md:pb-5">
        {title && (
          <Title size={md ? '2xl' : 'md'} className="mb-1.5 md:mb-3">
            {title}
          </Title>
        )}
        {description && (
          <Text subtle size={md ? 'md' : 'xs'} weight={500}>
            {description}
          </Text>
        )}
      </div>
      {children}
      {footer && (
        <footer className="rounded-b-lg border border-white bg-gray-light p-2 px-4 text-sm uppercase text-gray-base">
          {footer}
        </footer>
      )}
    </CardContainer>
  );
};

export type CardContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export let CardContainer = (props: CardContainerProps) => {
  let { children, className = '', ...rest } = props;
  return (
    <div className={`${className} big-shadow rounded-lg bg-white text-sm md:rounded-xl`} {...rest}>
      {children}
    </div>
  );
};
