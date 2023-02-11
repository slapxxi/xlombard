import { Text } from 'components/Text';
import { Title } from 'components/Title';
import { Block } from '../components/Block';
import { Button } from '../components/Button';
import { Divider } from '../components/Divider';
import { BackdropIcon } from '../components/icons/BackdropIcon';
import { DownloadIcon } from '../components/icons/DownloadIcon';
import { SendIcon } from '../components/icons/SendIcon';
import { List, ListItem } from '../components/List';
import { PageTitle } from '../components/PageTitle';
import { ResponsiveButton } from '../components/ResponsiveButton';
import { ResponsiveText } from '../components/ResponsiveText';
import { SectionTitle } from '../components/SectionTitle';
import { TextLink } from '../components/TextLink';
import useMediaQuery from '../lib/hooks/useMediaQuery';
import { mdQuery } from '../lib/styles/mq';

let Contacts = () => {
  let md = useMediaQuery(mdQuery);

  return (
    <div className="cont">
      <section className="my-12 px-5">
        <div className="my-6 md:my-10">
          <PageTitle className="my-8" as="h1">
            H1-Текстовая страница
          </PageTitle>
          <SectionTitle decorationColor="green-medium" className="my-6">
            Н2-Подзаголовок
          </SectionTitle>
          <Title size="xl" variant="decorated" decorationColor="violet" className="my-4" as="h3">
            Н3-Подзаголовок
          </Title>
        </div>

        <Title className="my-2" as="h4">
          Н4-Заголовок блоков, карточек, разделов
        </Title>
        <div className="flex flex-col gap-6">
          <ResponsiveText>
            Основной текст. XLombard MOD - дополнительные модули позволяют существенно оптимизировать
            ежедневную работу сотрудников. XLombard делает невозможными ошибки, связанные с человеческим
            фактором при оформлении договоров.{' '}
          </ResponsiveText>
          <ResponsiveText>
            XLombard - система комплексной автоматизации компаний, предоставляющих услуги краткосрочного
            кредитования под залог автомобиля. XLombard - система, которая подходит для максимального
            количества автоломбардов за счет простоты использования и гибкой системы настроек, позволяющих
            настроить программу под любые требования клиента.
          </ResponsiveText>
          <ResponsiveText>
            XLombard - документоборот + KPI-система = точная и оперативная информация об эффективности
            компании. BaseDocs - подходит для любой компании, в бизнес-процессах которой предусмотрена
            процедура осмотра траспортного средства с последующей обработкой полученных данных. BaseDocs -
            подходит для любой компании, в бизнес-процессах которой предусмотрена процедура осмотра
            траспортного средства с последующей обработкой полученных данных.{' '}
          </ResponsiveText>
          <Title className="px-5" variant="stroke">
            Выноска Агрегатор заявок на займ из различных источников (веб-сайтов, партнеров компании и т.д.),
            позволяет более качественно управлять входящими обращениями клиентов
          </Title>
          <ResponsiveText>
            Основной текст. XLombard MOD - дополнительные модули позволяют существенно оптимизировать
            ежедневную работу сотрудников. XLombard делает невозможными ошибки, связанные с человеческим
            фактором при оформлении договоров. XLombard - система комплексной автоматизации компаний,
            предоставляющих услуги краткосрочного кредитования под залог автомобиля.
          </ResponsiveText>
          <List variant="list">
            <ListItem>Общие сведения о программе</ListItem>
            <ListItem>Установка и настройка</ListItem>
            <ListItem>Авторизация в системе</ListItem>
            <ListItem>Базовые принципы работы с программой</ListItem>
            <ListItem>Роли пользователей</ListItem>
            <ListItem>Модуль Автоломбард</ListItem>
            <ListItem>Модуль Автосалон</ListItem>
            <ListItem>Модуль Касса</ListItem>
            <ListItem>Модуль Кассовая книга</ListItem>
            <ListItem>Модуль Отчетность</ListItem>
            <ListItem>Конфигурация системы</ListItem>
          </List>
          <ResponsiveText>
            Основной текст. XLombard MOD - дополнительные модули позволяют существенно оптимизировать
            ежедневную работу сотрудников. XLombard делает невозможными ошибки, связанные с человеческим
            фактором при оформлении договоров. XLombard - система комплексной автоматизации компаний,
            предоставляющих услуги краткосрочного кредитования под залог автомобиля.
          </ResponsiveText>
          <List variant="ordered">
            <ListItem>
              <ResponsiveText>XL.Check: проверка ТС и собственника</ResponsiveText>
            </ListItem>
            <ListItem>
              <ResponsiveText>Распознавание паспортов</ResponsiveText>
            </ListItem>
            <ListItem>
              <ResponsiveText>XLombard Web</ResponsiveText>
            </ListItem>
            <ListItem>
              <ResponsiveText>Заявки</ResponsiveText>
            </ListItem>
            <ListItem>
              <ResponsiveText>Уведомления</ResponsiveText>
            </ListItem>
            <ListItem>
              <ResponsiveText>Партнеры</ResponsiveText>
            </ListItem>
            <ListItem>
              <ResponsiveText>Инвесторы</ResponsiveText>
            </ListItem>
            <ListItem>
              <ResponsiveText>Синхронизация 1С</ResponsiveText>
            </ListItem>
          </List>
          <ResponsiveText>
            Основной текст. XLombard MOD - дополнительные модули позволяют существенно оптимизировать
            ежедневную работу сотрудников. XLombard делает невозможными ошибки, связанные с человеческим
            фактором при оформлении договоров. XLombard - система комплексной автоматизации компаний,
            предоставляющих услуги краткосрочного кредитования под залог автомобиля.
          </ResponsiveText>
        </div>
        <div className="my-8 flex flex-col items-start gap-3">
          <ResponsiveButton variant="fill">
            <DownloadIcon />
            <span>Кнопка с иконкой</span>
          </ResponsiveButton>
          <ResponsiveButton variant="fill">Основная кнопка</ResponsiveButton>
          <Button radius="lg">Основная кнопка</Button>
        </div>
      </section>

      <section className="my-12 px-5">
        <Block className="flex gap-4 md:gap-6">
          <BackdropIcon className="shrink-0 text-blue-base" size={md ? 107 : 48}>
            <SendIcon />
          </BackdropIcon>
          <div className="flex flex-col gap-4">
            <Title variant="stroke" weight={500} size={md ? '2xl' : 'lg'}>
              Акцентный блок в тексте
            </Title>
            <ResponsiveText>
              Описание. Агрегатор заявок на займ из различных источников (веб-сайтов, партнеров компании и
              т.д.), позволяет более качественно управлять входящими обращениями клиентов. Агрегатор заявок на
              займ из различных источников (веб-сайтов, партнеров компании и т.д.), позволяет более
              качественно управлять входящими обращениями клиентов.
            </ResponsiveText>
          </div>
        </Block>
      </section>

      <section className="my-12 flex flex-col gap-6 px-5">
        <ResponsiveText>
          Основной текст. XLombard MOD - дополнительные модули позволяют существенно оптимизировать ежедневную
          работу сотрудников. XLombard делает невозможными ошибки, связанные с человеческим фактором при
          оформлении договоров. XLombard - система комплексной автоматизации компаний, предоставляющих услуги
          краткосрочного кредитования под залог автомобиля.
        </ResponsiveText>
        <TextLink href="#">
          <ResponsiveText>Ссылки на допресурсы</ResponsiveText>
        </TextLink>
        <Block className="flex items-center gap-4">
          <BackdropIcon className="shrink-0 text-blue-base" size={md ? 66 : 48}>
            <DownloadIcon />
          </BackdropIcon>
          <div>
            <ResponsiveText>
              <TextLink href="#">Ссылка на прикрепленный файл.pdf</TextLink>
            </ResponsiveText>
            <ResponsiveText subtle>140 Кб</ResponsiveText>
          </div>
        </Block>
      </section>

      <Divider className="mx-auto" />

      <section className="px-5 md:my-12">
        <ResponsiveText>
          Основной текст. XLombard MOD - дополнительные модули позволяют существенно оптимизировать ежедневную
          работу сотрудников. XLombard делает невозможными ошибки, связанные с человеческим фактором при
          оформлении договоров. XLombard - система комплексной автоматизации компаний, предоставляющих услуги
          краткосрочного кредитования под залог автомобиля.
        </ResponsiveText>
      </section>

      <section className="my-12 flex flex-col gap-10 px-5 md:my-24">
        <div>
          <SectionTitle>Пример блока с карточками</SectionTitle>
          <ResponsiveText subtle>Цены актуальны до 01.06.23</ResponsiveText>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <Block className="flex flex-col gap-3">
            <div>
              <Title variant="stroke" size={md ? '2xl' : 'lg'}>
                12 000 ₽
              </Title>
              <ResponsiveText>ежемесячно за 1 филиал</ResponsiveText>
            </div>
            <Title size={md ? '2xl' : 'lg'}>Лицензия XLombard</Title>
            <ResponsiveText subtle>
              Базовая лицензия распространяется на 1 филиал. Количество рабочих мест в филиале не ограничено.
              Филиалом считаем пункт обслуживания клиентов.
            </ResponsiveText>
          </Block>
          <Block className="flex flex-col gap-3">
            <div>
              <Title variant="stroke">20 000 ₽</Title>
              <Text size="sm">разово</Text>
            </div>
            <Title>Базовая установка и настройка системы</Title>
            <Text subtle size="xs">
              Регистрация нового сервера, подключение интеграционных модулей (телефония, смс, проверки и т.
              д.), настройка 1 пакета документов.
            </Text>
          </Block>
          <Block className="flex flex-col gap-3" bg="green-light">
            <div>
              <Title variant="stroke">12 000 ₽</Title>
              <Text size="sm">ежемесячно за 1 филиал</Text>
            </div>
            <Title>Лицензия XLombard</Title>
            <Text subtle size="xs">
              Базовая лицензия распространяется на 1 филиал. Количество рабочих мест в филиале не ограничено.
              Филиалом считаем пункт обслуживания клиентов.
            </Text>
          </Block>
          <Block className="flex flex-col gap-3" bg="green-light">
            <div>
              <Title variant="stroke">12 000 ₽</Title>
              <Text size="sm">ежемесячно за 1 филиал</Text>
            </div>
            <Title>Лицензия XLombard</Title>
            <Text subtle size="xs">
              Базовая лицензия распространяется на 1 филиал. Количество рабочих мест в филиале не ограничено.
              Филиалом считаем пункт обслуживания клиентов.
            </Text>
          </Block>
          <Block className="flex flex-col gap-3">
            <div>
              <Title variant="stroke">20 000 ₽</Title>
              <Text size="sm">разово</Text>
            </div>
            <Title>Базовая установка и настройка системы</Title>
            <Text subtle size="xs">
              Регистрация нового сервера, подключение интеграционных модулей (телефония, смс, проверки и т.
              д.), настройка 1 пакета документов.
            </Text>
          </Block>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
