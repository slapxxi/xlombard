import classNames from 'classnames';
import { CardContainer } from 'components/Card';
import { DownloadIcon } from 'components/icons/DownloadIcon';
import { PhoneIcon } from 'components/icons/PhoneIcon';
import { TelegramIcon } from 'components/icons/TelegramIcon';
import { WhatsappIcon } from 'components/icons/WhatsappIcon';
import { SquareIcon } from 'components/SquareIcon';
import { Title } from 'components/Title';
import { HeroText } from '../components/HeroText';
import { PageTitle } from '../components/PageTitle';
import { ResponsiveButton } from '../components/ResponsiveButton';
import { ResponsiveText } from '../components/ResponsiveText';
import { SectionTitle } from '../components/SectionTitle';
import { Strong } from '../components/Strong';
import useMediaQuery from '../lib/hooks/useMediaQuery';
import { mdQuery } from '../lib/styles/mq';

let Prices = () => {
  let md = useMediaQuery(mdQuery);

  return (
    <div>
      <section className="cont my-8 flex flex-col gap-6 px-5 pt-8 md:mb-28 md:flex-row md:justify-between">
        <div className="flex flex-col gap-6 md:max-w-2xl">
          <PageTitle>Тарифы и цены</PageTitle>
          <HeroText>
            Все наши цены обозначены в прайс-листах, но, если у вас есть вопросы вы всегда можете писать и
            звонить нам.
          </HeroText>
          <HeroText>Мы будем рады вам помочь!</HeroText>
          <div className="flex gap-2.5 text-white">
            <a href="">
              <SquareIcon className="fill-blue-dark">
                <PhoneIcon />
              </SquareIcon>
            </a>
            <a href="">
              <SquareIcon className="fill-whatsapp">
                <WhatsappIcon />
              </SquareIcon>
            </a>
            <a href="">
              <SquareIcon className="fill-telegram">
                <TelegramIcon />
              </SquareIcon>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:max-w-[370px]">
          <ResponsiveButton variant="fill" center>
            <DownloadIcon />
            <span>Скачать полный прайс</span>
          </ResponsiveButton>
          <ResponsiveText subtle className="md:pl-4">
            Прайс на базовые и дополнительные услуги в размере мобильного, в формате PDF
          </ResponsiveText>
        </div>
      </section>

      <section id="price-list" className="cont my-8 md:my-24">
        <SectionTitle decorationColor="green-medium">Прайс-лист базовых услуг</SectionTitle>
        <ResponsiveText subtle>Цены актуальны до 01.06.23</ResponsiveText>
        <ul className="my-2 flex flex-col gap-4">
          {[
            {
              title: 'Лицензия XLombard',
              price: 12000,
              period: 'ежемесячно за 1 филиал',
              description:
                'Базовая лицензия распространяется на 1 филиал. Количество рабочих мест в филиале не ограничено. Филиалом считаем пункт обслуживания клиентов.',
            },
            {
              title: 'Базовая установка и настройка системы',
              price: 20000,
              period: 'ежемесячно за 1 филиал',
              description:
                'Регистрация нового сервера, подключение интеграционных модулей (телефония, смс, проверки и т. д.), настройка 1 пакета документов.',
            },
            {
              title: 'Техническая поддержка',
              description:
                'Мы обеспечиваем поддержку наших клиентов по WhatsApp, email и телефону. Любой сотрудник вашей компании может обратиться за оперативной помощью',
            },
            {
              title: 'Техническая поддержка',
              description:
                'Мы обеспечиваем поддержку наших клиентов по WhatsApp, email и телефону. Любой сотрудник вашей компании может обратиться за оперативной помощью',
            },
            {
              title: 'Лицензия XLombard',
              price: 12000,
              period: 'ежемесячно за 1 филиал',
              description:
                'Базовая лицензия распространяется на 1 филиал. Количество рабочих мест в филиале не ограничено. Филиалом считаем пункт обслуживания клиентов.',
            },
          ].map((item, i) => (
            <li key={i}>
              <CardContainer
                className={classNames(
                  'flex flex-col gap-2 p-5 md:flex-row md:items-center md:gap-7',
                  !item.price && 'free',
                )}
              >
                <Title size={md ? '2xl' : 'lg'} className="md:w-3/12">
                  {item.title}
                </Title>
                {item.price && (
                  <div className="md:w-3/12">
                    <Strong className="leading-none" size={md ? '3xl' : '2xl'}>
                      {new Intl.NumberFormat('ru', {
                        style: 'currency',
                        currency: 'rub',
                        maximumFractionDigits: 0,
                      }).format(item.price)}
                    </Strong>
                    <ResponsiveText subtle>{item.period}</ResponsiveText>
                  </div>
                )}
                {!item.price && (
                  <Strong className="text-green-dark md:w-3/12" size={md ? '3xl' : '2xl'}>
                    бесплатно!
                  </Strong>
                )}
                <ResponsiveText prose className="md:w-6/12">
                  {item.description}
                </ResponsiveText>
              </CardContainer>
            </li>
          ))}
        </ul>
      </section>

      <section id="price-list" className="cont my-8 md:my-24">
        <SectionTitle decorationColor="violet">Дополнительные модули</SectionTitle>
        <ResponsiveText subtle>Цены актуальны до 01.01.23</ResponsiveText>
        <ul className="my-2 flex flex-col gap-4">
          {[
            {
              title: 'Кабинет заёмщика на сайте',
              price: 50000,
              period: 'разово за подключение',
              description:
                'На вашем сайте размещается готовый модуль, который позволяет заемщикам просматривать текущие займы, оплачивать платежи online через эквайринг.',
            },
            {
              title: 'Базовая установка и настройка системы',
              price: 20000,
              period: 'ежемесячно за 1 филиал',
              description:
                'Регистрация нового сервера, подключение интеграционных модулей (телефония, смс, проверки и т. д.), настройка 1 пакета документов.',
            },
            {
              title: 'Лицензия XLombard',
              price: 12000,
              period: 'ежемесячно за 1 филиал',
              description:
                'Базовая лицензия распространяется на 1 филиал. Количество рабочих мест в филиале не ограничено. Филиалом считаем пункт обслуживания клиентов.',
            },
            {
              title: 'Кабинет заёмщика на сайте',
              price: 50000,
              period: 'разово за подключение',
              description:
                'На вашем сайте размещается готовый модуль, который позволяет заемщикам просматривать текущие займы, оплачивать платежи online через эквайринг.',
            },
          ].map((item, i) => (
            <li key={i}>
              <CardContainer
                className={classNames(
                  'flex flex-col gap-2 p-5 md:flex-row md:items-center md:gap-7',
                  !item.price && 'free',
                )}
              >
                <Title size={md ? '2xl' : 'lg'} className="md:w-3/12">
                  {item.title}
                </Title>
                {item.price && (
                  <div className="md:w-3/12">
                    <Strong className="leading-none" size={md ? '3xl' : '2xl'}>
                      {new Intl.NumberFormat('ru', {
                        style: 'currency',
                        currency: 'rub',
                        maximumFractionDigits: 0,
                      }).format(item.price)}
                    </Strong>
                    <ResponsiveText subtle>{item.period}</ResponsiveText>
                  </div>
                )}
                {!item.price && (
                  <Strong className="text-green-dark md:w-3/12" size={md ? '3xl' : '2xl'}>
                    бесплатно!
                  </Strong>
                )}
                <ResponsiveText prose className="md:w-6/12">
                  {item.description}
                </ResponsiveText>
              </CardContainer>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Prices;
