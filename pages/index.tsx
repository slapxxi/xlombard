import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { Button } from 'components/Button';
import { CalculatorPic } from 'components/CalculatorPic';
import { Card, CardContainer } from 'components/Card';
import { FeatureList } from 'components/FeatureList';
import { AttachmentIcon } from 'components/icons/AttachmentIcon';
import { BackdropIcon } from 'components/icons/BackdropIcon';
import { ClockIcon } from 'components/icons/ClockIcon';
import { ExternalIcon } from 'components/icons/ExternalIcon';
import { LocationIcon } from 'components/icons/LocationIcon';
import { MailIcon } from 'components/icons/MailIcon';
import { MessageIcon } from 'components/icons/MessageIcon';
import { PhoneIcon } from 'components/icons/PhoneIcon';
import { PuzzleIcon } from 'components/icons/PuzzleIcon';
import { TelegramIcon } from 'components/icons/TelegramIcon';
import { WhatsappIcon } from 'components/icons/WhatsappIcon';
import { Integrations } from 'components/Integrations';
import { ResponsiveText } from 'components/ResponsiveText';
import { Scheme } from 'components/Scheme';
import { SectionTitle } from 'components/SectionTitle';
import { SquareIcon } from 'components/SquareIcon';
import { Strong } from 'components/Strong';
import { Text } from 'components/Text';
import { TextBadge } from 'components/TextBadge';
import { TextLink } from 'components/TextLink';
import { Title, TitleProps } from 'components/Title';
import useMediaQuery from 'lib/hooks/useMediaQuery';
import { mdQuery } from 'lib/styles/mq';
import styles from 'styles/index.module.scss';
import { HeroText } from '../components/HeroText';
import { CheckmarkIcon } from '../components/icons/CheckmarkIcon';
import { DocumentIcon } from '../components/icons/DocumentIcon';
import { UserIcon } from '../components/icons/UserIcon';
import { PageTitle } from '../components/PageTitle';
import { RequestForm } from '../components/RequestForm';
import { ResponsiveButton } from '../components/ResponsiveButton';

let IndexPage = () => {
  let md = useMediaQuery(mdQuery);
  let titleSize: TitleProps['size'] = md ? '4xl' : '2xl';

  return (
    <main className={`mt-8 pt-2 md:pt-8 ${styles.main}`}>
      <section className="cont gap-2 md:mb-12 md:flex">
        <div className="md:flex-1">
          <PageTitle className="mb-5">
            Лучшая программа для автоматизации <em>автоломбарда</em>
          </PageTitle>

          <HeroText className="my-3 md:my-7">Начните работать в XLombard бесплатно уже сегодня</HeroText>

          <div className="flex flex-col items-start md:flex-row md:items-center md:gap-7">
            <ResponsiveButton variant="fill" className="mb-2 md:mb-0 md:flex-1" center={md}>
              Хочу попробовать!
            </ResponsiveButton>
            <ResponsiveText className="mb-2 md:mb-0 md:flex-1" subtle>
              Подберем пакет документов и сделаем базовые настройки
            </ResponsiveText>
          </div>
        </div>

        <Scheme className="md:flex-1" />
      </section>

      <section className={`relative z-0 mb-8 bg-gray-light pt-8 pb-12 md:my-24 ${styles.section}`}>
        <div className="cont">
          <div className="md:my-14 md:flex md:gap-8">
            <SectionTitle decorationColor="green-medium" className="mb-4 md:w-min">
              Идеально для любого автоломбарда
            </SectionTitle>
            <div className="mb-12 flex flex-col gap-3 md:flex-row md:gap-4">
              {[
                {
                  title: 'Обратный лизинг',
                  description: 'Описание типа ломбарда на две строки',
                  footerDescription: 'ДКП + ДФА',
                  Icon: AttachmentIcon,
                },
                {
                  title: 'Ломбард Сlassic',
                  description: 'Описание типа ломбарда на две строки',
                  footerDescription: 'Залоговый билет',
                  Icon: DocumentIcon,
                },
                {
                  title: 'Обратный лизинг',
                  description: 'Описание типа ломбарда на две строки',
                  footerDescription: 'Займ + Залог',
                  Icon: AttachmentIcon,
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  title={item.title}
                  description={item.description}
                  footer={
                    <div className="flex items-center gap-2">
                      <item.Icon strokeOpacity=".9" />
                      <strong>{item.footerDescription}</strong>
                    </div>
                  }
                />
              ))}
            </div>
          </div>

          <div className="flex md:my-20 md:gap-24">
            <CalculatorPic
              className="w-[120px] md:w-[200px]"
              offsetX={md ? undefined : 20}
              offsetY={md ? 30 : 15}
            />
            <div className="flex flex-col gap-4">
              <SectionTitle>Создали специальную конфигурацию для обратного лизинга</SectionTitle>
              <HeroText>Учли все тонкости бизнеса и подключили необходимые сервисы</HeroText>
              <ResponsiveButton variant="fill" className="self-start">
                Сел и поехал
              </ResponsiveButton>
            </div>
          </div>
        </div>
      </section>

      <section className="cont my-12 px-5" id="features">
        <div className="mb-4 items-center justify-between md:my-14 md:flex">
          <SectionTitle>
            Возможности <em>XLombard BPM System</em>
          </SectionTitle>
          <ResponsiveButton variant="fill" className="hidden md:ml-0 md:block">
            Попробовать бесплатно
          </ResponsiveButton>
        </div>

        {!md && (
          <Accordion.Root
            className="relative my-4 flex flex-col gap-1 md:gap-2"
            type="single"
            defaultValue="item-1"
            collapsible={!md}
          >
            <Accordion.Item className="acc-item" value="item-1">
              <Accordion.AccordionTrigger className="acc-trigger">
                Лидогенерация и обработка заявок
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-2">
              <Accordion.AccordionTrigger className="acc-trigger">
                Скоринг и комплексная проверка заёмщика
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-3">
              <Accordion.AccordionTrigger className="acc-trigger">
                Оформление договора и выдача ДС заёмщику
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-4">
              <Accordion.AccordionTrigger className="acc-trigger">
                Операционный учёт текущих договоров
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-5">
              <Accordion.AccordionTrigger className="acc-trigger">
                Полный контроль общения с клиентом
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-6">
              <Accordion.AccordionTrigger className="acc-trigger">
                Управленческие отчёты, аналитика и виджеты
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-7">
              <Accordion.AccordionTrigger className="acc-trigger">
                Учёт всех расходов и доходов
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-8">
              <Accordion.AccordionTrigger className="acc-trigger">
                Реализация залогового имущества
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
        )}

        {md && (
          <Accordion.Root className="flex gap-6" type="single" defaultValue="item-1">
            <div className="flex w-[287px] shrink-0 flex-col gap-4">
              <Accordion.Item className="acc-item" value="item-1">
                <Accordion.AccordionTrigger className="acc-trigger big-shadow">
                  <Text>Лидогенерация и обработка заявок</Text>
                </Accordion.AccordionTrigger>
              </Accordion.Item>
              <Accordion.Item className="acc-item" value="item-2">
                <Accordion.AccordionTrigger className="acc-trigger">
                  <Text>Скоринг и комплексная проверка заёмщика</Text>
                </Accordion.AccordionTrigger>
              </Accordion.Item>
              <Accordion.Item className="acc-item" value="item-3">
                <Accordion.AccordionTrigger className="acc-trigger">
                  <Text>Оформление договора и выдача ДС заёмщику</Text>
                </Accordion.AccordionTrigger>
              </Accordion.Item>
            </div>
            <div>
              <Accordion.Item className="acc-item" value="item-1">
                <Accordion.AccordionContent className="acc-content">
                  <FeatureList />
                </Accordion.AccordionContent>
              </Accordion.Item>
              <Accordion.Item className="acc-item" value="item-2">
                <Accordion.AccordionContent className="acc-content">
                  <FeatureList />
                </Accordion.AccordionContent>
              </Accordion.Item>
              <Accordion.Item className="acc-item" value="item-3">
                <Accordion.AccordionContent className="acc-content">
                  <FeatureList />
                </Accordion.AccordionContent>
              </Accordion.Item>
            </div>
          </Accordion.Root>
        )}

        <Button variant="fill" radius="md" className="ml-4 md:ml-0 md:hidden">
          Попробовать бесплатно
        </Button>
      </section>

      {/* integrations */}
      <section className="cont my-12">
        <Title size={titleSize} variant="decorated" decorationColor="blue-light" className="mb-9 md:mb-20">
          Интеграции с различными системами
        </Title>
        <Integrations />
      </section>

      <section className={`relative z-0 my-12 pt-8 pb-8 ${styles.section}`}>
        <div className="cont">
          <div className="items-center justify-between md:mb-16 md:flex">
            <SectionTitle decorationColor="green-medium" className="mb-3 md:mb-0">
              Ни у кого нет — <em>а у нас есть</em>!
            </SectionTitle>
            <ResponsiveButton variant="fill" className="mb-6 md:mb-0">
              Заказать презентацию системы
            </ResponsiveButton>
          </div>

          <ul className="flex grid-cols-3 flex-col gap-3 font-normal md:grid md:gap-5">
            {[
              {
                title: 'Электронный акт осмотра ТС',
                description: 'Позволяет фиксировать все повреждения ТС в электронном виде на планшете',
              },
              {
                title: 'Регулярная проверка портфеля по ГИБДД',
                description:
                  'Позволяет оперативно узнавать о новых ограничениях, изменениях регистрационных данных и т.д.',
              },
              {
                title: 'Корсар — куда уходят ваши клиент',
                description:
                  'Позволяет узнать, куда ушёл клиент при отказе от сделки или где перезаложился, если уже был залог',
              },
              {
                title: 'Полностью адаптивный интерфейс',
                description:
                  'Настройка отображения только необходимы данных для работы конкретного сотрудника или роли',
              },
              {
                title: 'Электронный акт осмотра ТС',
                description: 'Позволяет фиксировать все повреждения ТС в электронном виде на планшете',
              },
              {
                title: 'Электронный акт осмотра ТС',
                description: 'Позволяет фиксировать все повреждения ТС в электронном виде на планшете',
              },
            ].map((item, i) => (
              <li key={i}>
                <CardContainer className={classNames('h-full flex-col justify-between p-4 md:flex md:p-10')}>
                  <Title variant="stroke" className="mb-title leading-5 md:mt-2" size={md ? '2xl' : 'md'}>
                    {item.title}
                  </Title>
                  <Text subtle size={md ? 'md' : 'sm'} className="mt-auto">
                    {item.description}
                  </Text>
                </CardContainer>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cont my-8 md:my-20" id="summary">
        <SectionTitle className="mb-6 md:mb-20">Подводим итоги 2022 года</SectionTitle>
        <div className="mb-6 flex justify-between gap-4 md:mb-16 md:gap-8">
          {[
            { count: 28, description: 'городов присутствия нашей программы' },
            { count: 6, description: 'новых модулей разработано' },
            { count: 9, description: 'новых интеграций добавлено' },
          ].map((item, i) => (
            <div className="items-center justify-center gap-4 md:flex md:w-min md:flex-1" key={i}>
              <div className="mb-3 md:mb-0">
                <Strong className="decorate" size={md ? '7xl' : '3xl'}>
                  +{item.count}
                </Strong>
              </div>
              <Text size={md ? 'md' : 'sm'} className="md:mb-4" weight={500}>
                {item.description}
              </Text>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 md:grid-cols-4 md:grid-rows-1">
          {[
            {
              description: 'Сделано больших и маленьких доработок уже существующих модулей',
              count: 240,
              Icon: PuzzleIcon,
            },
            { description: 'Пришло новых людей в коллектив XLombard ', count: 4, Icon: UserIcon },
            {
              description: 'Обработано обращений клиентов в техническую поддержку',
              count: 2109,
              Icon: MessageIcon,
            },
            { description: 'Исправлено недочетов в программе', count: 210, Icon: CheckmarkIcon },
          ].map((item, i) => (
            <div className="flex flex-col justify-between rounded-lg bg-violet-light p-5 text-xs" key={i}>
              <Text size={md ? 'md' : 'xs'} className="mb-2 md:mb-4" weight={500}>
                {item.description}
              </Text>
              <div className="flex items-center gap-2 md:gap-4">
                <item.Icon className="text-violet" size={md ? 48 : 24} />
                <Strong size={md ? '5xl' : '2xl'}>{new Intl.NumberFormat('ru').format(item.count)}</Strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`relative z-0 bg-violet-light font-normal ${styles.section2}`} id="recommended-by">
        <div className="cont pt-8 md:pt-16">
          <div className="mb-4 items-center justify-between pt-8 md:mb-16 md:flex">
            <SectionTitle decorationColor="blue-light" className="mb-3 md:mb-0">
              Кто нас может порекомендовать
            </SectionTitle>
            <ResponsiveButton variant="fill" className="mb-8 md:mb-0">
              Хочу попробовать!
            </ResponsiveButton>
          </div>
        </div>

        <div className="pb-24">
          <div className="flex snap-x snap-mandatory scroll-px-32 gap-3 overflow-x-scroll px-[max(calc((100%-1200px)/2-10px),20px)] pb-8">
            {new Array(10).fill(null).map((_item, i) => (
              <CardContainer
                key={i}
                className="flex min-h-[280px] w-[234px] shrink-0 snap-center flex-col gap-2 px-6 py-7 md:w-[390px]"
              >
                <img src="image.png" alt="" width={140} className="mb-2 self-center md:mb-10" />
                <ResponsiveText className="mb-2">
                  Полностью подходит под нашу специфику деятельности. Лучший продукт на рынке...
                </ResponsiveText>
                <TextLink href="#" className="md:mb-10">
                  <ResponsiveText>Читать полностью</ResponsiveText>
                </TextLink>
                <Strong className="mt-auto" size={md ? 'md' : 'xs'}>
                  Исполнительный директор Владимир Иванов
                </Strong>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative z-0 bg-blue-base pb-7 pt-8 font-normal text-white md:pt-24 md:pb-24"
        id="tech-support"
      >
        <div className="cont gap-6 md:flex">
          <div className="md:flex-1">
            <SectionTitle decorationColor="blue-base-light" className="mb-8 md:mb-10">
              Техническая поддержка онлайн всегда
            </SectionTitle>

            <div className="mb-3 flex gap-3 md:mb-12">
              {[
                {
                  count: 5,
                  title: 'Время реакции менее',
                  description: 'минут\n(в раб. время)',
                },
                {
                  count: 3,
                  title: 'На линии всегда не менее',
                  description: 'сотрудника\nонлайн',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={classNames(
                    i === 0 ? 'card-fade-8' : '-card-fade-8',
                    'flex gap-2 rounded-lg bg-white p-3 text-xs font-medium text-black md:flex-1',
                  )}
                >
                  <ClockIcon className="shrink-0 translate-y-0.5" size={md ? 24 : 14} />
                  <div className="flex flex-col gap-2">
                    <ResponsiveText weight={500}>{item.title}</ResponsiveText>
                    <div className="mt-auto flex items-center gap-1.5">
                      <Strong size={md ? '5xl' : '3xl'}>{item.count}</Strong>
                      <ResponsiveText subtle pre weight={500}>
                        {item.description}
                      </ResponsiveText>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <ResponsiveText className="mb-5">
              Если возникла какая-либо сложность с программой, то всегда можно написать в месенджеры или
              позвонить по телефону в квалифицированную техническую поддержку.
            </ResponsiveText>

            <div className="mb-8 flex gap-2.5 md:mb-0">
              <a href="#" className="group">
                <SquareIcon className="fill-blue-light group-hover:fill-blue-lighter">
                  <PhoneIcon />
                </SquareIcon>
              </a>
              <a href="#" className="group">
                <SquareIcon className="fill-blue-light group-hover:fill-blue-lighter">
                  <TelegramIcon />
                </SquareIcon>
              </a>
              <a href="#" className="group">
                <SquareIcon className="fill-blue-light group-hover:fill-blue-lighter">
                  <WhatsappIcon />
                </SquareIcon>
              </a>
            </div>
          </div>

          <div className="flex-col rounded-lg bg-white py-5 px-4 text-black md:flex md:flex-1 md:p-14">
            <Title className="mb-5 md:mb-12" size={md ? '3xl' : 'md'} center weight={500}>
              Статистика за <em>октябрь 2022</em>
            </Title>
            <div className="mt-auto flex text-xs md:mt-0 md:text-base">
              <div className="decorate-center flex w-1/3 flex-1 flex-col items-center justify-center gap-2 md:gap-2.5">
                <MailIcon className="text-blue-base" size={md ? 48 : 24} />
                <Strong size={md ? '7xl' : '3xl'}>408</Strong>
                <Text size={md ? 'xl' : 'xs'} center weight={500}>
                  обращений клиентов обработано
                </Text>
              </div>

              <div className="w-2/3 shrink-0 rounded-xl bg-violet-light p-4 md:p-9">
                <Title className="mb-4" size={md ? 'xl' : 'xs'}>
                  Сколько раз за месяц нам сказали
                </Title>
                <div className="grid grid-cols-[auto_1fr] gap-2 font-medium">
                  <div className="flex items-start justify-end">
                    <TextBadge>133</TextBadge>
                    &nbsp;&#8211;
                  </div>
                  <div> Большое спасибо</div>
                  <div className="flex items-start justify-end">
                    <TextBadge>23</TextBadge>
                    &nbsp;&#8211;
                  </div>
                  <div> Отлично</div>
                  <div className="flex items-start justify-end">
                    <TextBadge>4</TextBadge>
                    &nbsp;&#8211;
                  </div>
                  <div> Супер</div>
                  <div className="flex items-start justify-end">
                    <TextBadge>2</TextBadge>
                    &nbsp;&#8211;
                  </div>
                  <div> Ох?уенно</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20" id="updates">
        <div className="cont items-center justify-between md:mb-12 md:flex">
          <SectionTitle className="mb-3 md:mb-0" decorationColor="green-medium">
            Обновления программы
          </SectionTitle>
          <Text className="mb-8 max-w-[430px] md:mb-0 md:text-right" size={md ? 'xl' : 'xs'} weight={500}>
            Мы постоянно работаем над улучшением системы XLombard
          </Text>
        </div>

        <div className="mb-8 flex snap-x snap-mandatory gap-4 overflow-x-scroll px-[max(calc((100%-1200px)/2-10px),20px)]">
          {new Array(10).fill(null).map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 snap-center flex-col justify-center gap-3 rounded-lg bg-gray-light px-5 py-7 
            md:rounded-xl md:p-10"
            >
              <Title variant="stroke" size={md ? '2xl' : 'md'}>
                18.01.2023
              </Title>
              <ResponsiveText>
                Реализовано доработок: 11 <br /> Исправлено ошибок: 2
              </ResponsiveText>
              <div className="flex items-center gap-1">
                <ExternalIcon className="text-blue-base" size={md ? 24 : 14} />
                <TextLink href="#">
                  <ResponsiveText>Релиз 3.48.0.0</ResponsiveText>
                </TextLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className={classNames(styles.dotsWithGradient, 'relative z-0 py-px')}>
        <div className="mx-auto max-w-[1200px] justify-between gap-4 md:flex md:pb-12">
          <div className="my-8 flex-1 px-5 md:my-20 md:px-0">
            <SectionTitle className="mb-5 md:mb-12">Открыты для общения</SectionTitle>
            <ul className="flex flex-col gap-4 md:gap-6">
              <li className="flex gap-4">
                <BackdropIcon className="shrink-0 text-blue-base" size={72} iconSize={20}>
                  <PhoneIcon size={20} />
                </BackdropIcon>
                <div className="flex flex-col gap-2 pt-4">
                  <Title>Пишите нам</Title>
                  <p className="font-normal text-gray-500">в мессенджеры на +7 (968) 096-59-40</p>
                  <div className="flex gap-2 text-white">
                    <a href="#">
                      <SquareIcon className="fill-telegram">
                        <TelegramIcon />
                      </SquareIcon>
                    </a>
                    <a href="#">
                      <SquareIcon className="fill-whatsapp">
                        <WhatsappIcon />
                      </SquareIcon>
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <BackdropIcon className="shrink-0 text-blue-base" size={72}>
                  <MessageIcon dots />
                </BackdropIcon>
                <div className="flex flex-col gap-2 pt-4">
                  <Title>Пишите нам</Title>
                  <p className="font-normal text-gray-500">с 10-00 до 18-00 по Мск</p>
                  <span className="text-xl">+7 (495) 677-95-51</span>
                </div>
              </li>
              <li className="flex gap-4">
                <BackdropIcon className="shrink-0 text-blue-base" size={72}>
                  <LocationIcon />
                </BackdropIcon>
                <div className="flex flex-col gap-2 pt-4">
                  <Title>Приезжайте</Title>
                  <p className="font-normal text-gray-500">Москва, ул. 3-я Северная линия, д. 14, оф. 2</p>
                  <TextLink href="#">Мы на Яндекс.Картах</TextLink>
                </div>
              </li>
            </ul>
          </div>

          <div className="my-12 flex-1 px-5 md:my-20 md:max-w-xl md:px-0">
            <RequestForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
