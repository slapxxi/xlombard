import useMediaQuery from 'lib/hooks/useMediaQuery';
import { mdQuery } from 'lib/styles/mq';
import { BackdropIcon } from './icons/BackdropIcon';
import { MenuIcon } from './icons/MenuIcon';
import { NotificationIcon } from './icons/NotificationIcon';
import { StopIcon } from './icons/StopIcon';
import { ResponsiveText } from './ResponsiveText';
import { Title, TitleProps } from './Title';

export type FeatureListProps = {
  children?: React.ReactNode;
  className?: string;
};

export let FeatureList = (props: FeatureListProps) => {
  let { children, className = '', ...rest } = props;
  let md = useMediaQuery(mdQuery);
  let titleSize: TitleProps['size'] = md ? '2xl' : 'md';
  let iconSize = md ? 100 : 64;

  return (
    <div className="rounded-md bg-gray-light px-2 pt-8 pb-7 md:px-14 md:pl-[82px]" {...rest}>
      <ul className="flex flex-col gap-7 font-normal md:gap-14">
        <li className="flex gap-4 md:gap-7">
          <BackdropIcon className="shrink-0 text-blue-base" size={iconSize}>
            <MenuIcon />
          </BackdropIcon>
          <div>
            <Title className="mb-3 md:mb-4" variant="stroke" size={titleSize}>
              Агрегатор заявок
            </Title>
            <ResponsiveText>
              Агрегатор заявок на займ из различных источников (веб-сайтов, партнеров компании и т.д.),
              позволяет более качественно управлять входящими обращениями клиентов
            </ResponsiveText>
          </div>
        </li>
        <li className="flex gap-4 md:gap-7">
          <BackdropIcon className="shrink-0 text-blue-base" size={iconSize}>
            <NotificationIcon />
          </BackdropIcon>
          <div>
            <Title className="mb-3 md:mb-4" variant="stroke" size={titleSize}>
              Уведомления
            </Title>
            <ResponsiveText>
              Sms и Email-уведомления обо всех операциях в компании. Также используется для уведомлений
              клиентам компании о текущем состоянии договора, акциях и скидках
            </ResponsiveText>
          </div>
        </li>
        <li className="flex gap-4 md:gap-7">
          <BackdropIcon className="shrink-0 text-blue-base" size={iconSize}>
            <StopIcon />
          </BackdropIcon>
          <div>
            <Title className="mb-3 leading-5 md:mb-4" variant="stroke" size={titleSize}>
              Исключаем человеческий фактор
            </Title>
            <ResponsiveText>
              XLombard MOD - дополнительные модули позволяют существенно оптимизировать ежедневную работу
              сотрудников. XLombard делает невозможными ошибки, связанные с человеческим фактором при
              оформлении договоров.
            </ResponsiveText>
          </div>
        </li>
      </ul>
    </div>
  );
};
