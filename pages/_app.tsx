import classNames from 'classnames';
import { Button } from 'components/Button';
import { MenuIcon } from 'components/icons/MenuIcon';
import { PhoneIcon } from 'components/icons/PhoneIcon';
import { WhatsappIcon } from 'components/icons/WhatsappIcon';
import { List, ListItem } from 'components/List';
import { Logo } from 'components/Logo';
import { Title } from 'components/Title';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import 'styles/globals.scss';
import { CloseIcon } from '../components/icons/CloseIcon';
import { TelegramIcon } from '../components/icons/TelegramIcon';
import { ResponsiveText } from '../components/ResponsiveText';
import { SquareIcon } from '../components/SquareIcon';
import { Strong } from '../components/Strong';
import useMediaQuery from '../lib/hooks/useMediaQuery';
import { useNoScroll } from '../lib/hooks/useNoScroll';
import { mdQuery } from '../lib/styles/mq';

let App: AppType = (props) => {
  let { Component, pageProps } = props;
  let [menuOpen, setMenuOpen] = useState(false);
  let router = useRouter();
  let md = useMediaQuery(mdQuery);

  router.events?.on('routeChangeStart', () => {
    setMenuOpen(false);
  });

  useNoScroll(menuOpen);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#0b0b16" />
      </Head>

      <header className="cont text-blue flex gap-2.5 py-3 md:my-12 md:items-center md:justify-between">
        <Button onClick={() => setMenuOpen((o) => !o)} variant="icon" className="md:hidden">
          <MenuIcon />
        </Button>

        <Link href="/" className="mr-auto flex self-center md:mr-0">
          <Logo width={124} />
        </Link>

        <ul className="hidden gap-11 text-black md:flex">
          <li>
            <Link href="#" className="nav-link">
              О программе
            </Link>
          </li>
          <li>
            <Link href="/prices" className="nav-link">
              Тарифы и цены
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="nav-link">
              Контакты
            </Link>
          </li>
        </ul>

        <div className="hidden items-center gap-8 md:flex">
          <Button className="hidden md:block">Попробовать бесплатно</Button>
          <div className="hidden flex-col items-center md:flex">
            <em className="text-xs">Заказать обратный звонок</em>
            <Strong className="text-black" size="sm">
              +7 (495) 677-95-51
            </Strong>
          </div>
        </div>

        <Button size="sm" className="md:hidden">
          Демо
        </Button>

        <Button variant="icon" className="md:hidden">
          <PhoneIcon />
        </Button>
      </header>

      <Component {...pageProps} />

      <footer className="dark bg-navy-dark pb-12 pt-9 text-sm font-medium text-white">
        <div className="cont flex flex-col md:flex-row md:justify-between">
          <div className="flex-col justify-between md:flex">
            <div>
              <Link href="/" className="mb-4 block">
                <Logo width={126} variant="mono" />
              </Link>
              <ResponsiveText>
                Лучшая программа <br />
                для автоматизации автоломбарда
              </ResponsiveText>
            </div>
            <div className="hidden md:block">
              <ResponsiveText className={classNames('mb-3 block')} weight={700} as="small">
                &copy; 2023, XLombard
              </ResponsiveText>
              <ResponsiveText>Конфиденциальность и обработка персональных данных</ResponsiveText>
            </div>
          </div>

          <Button className="mt-6 mb-12 items-center rounded-md font-bold md:hidden" center>
            Попробовать бесплатно
          </Button>

          <div className="mb-14 flex justify-between md:mb-0 md:pt-4">
            <div>
              <Title className="mb-4" size={md ? 'xl' : 'lg'}>
                О продукте
              </Title>
              <List>
                <ListItem>
                  <Link href="#">
                    <ResponsiveText>Возможности</ResponsiveText>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <ResponsiveText>Преимущества</ResponsiveText>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <ResponsiveText>Поддержка</ResponsiveText>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <ResponsiveText>Обновления</ResponsiveText>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <ResponsiveText>Интеграции</ResponsiveText>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <ResponsiveText>Документация</ResponsiveText>
                  </Link>
                </ListItem>
              </List>
            </div>
            <div className="md:hidden">
              <Title className="mb-10" size="lg">
                Тарифы и цены
              </Title>
              <Title className="mb-4" size="lg">
                О нас
              </Title>
              <List>
                <ListItem>
                  <Link href="#">
                    <ResponsiveText>Константы</ResponsiveText>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <ResponsiveText>Экспертиза</ResponsiveText>
                  </Link>
                </ListItem>
              </List>
            </div>
          </div>
          <div className="hidden md:block md:pt-4">
            <Title className="mb-10" size="xl">
              Тарифы и цены
            </Title>
            <Title className="mb-4" size="xl">
              О нас
            </Title>
            <List>
              <ListItem>
                <Link href="#">
                  <ResponsiveText>Константы</ResponsiveText>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <ResponsiveText>Экспертиза</ResponsiveText>
                </Link>
              </ListItem>
            </List>
          </div>
          <div className="mb-4 flex-col md:mb-0 md:flex">
            <Button className="-ml-12 mb-12 mt-2 hidden rounded-md font-bold md:block">
              Попробовать бесплатно
            </Button>
            <div>
              <a href="tel:+74956779551" className="mb-1 block text-2xl font-bold md:text-right">
                <Strong size="2xl">+7 (495) 677-95-51</Strong>
              </a>
              <button className="mb-5 w-full text-left font-normal md:text-right">
                <ResponsiveText>Заказать обратный звонок</ResponsiveText>
              </button>
              <div className="flex gap-2.5 md:justify-end">
                <a href="">
                  <SquareIcon className="fill-navy-light text-white">
                    <TelegramIcon />
                  </SquareIcon>
                </a>
                <a href="#">
                  <SquareIcon className="fill-navy-light text-white">
                    <WhatsappIcon />
                  </SquareIcon>
                </a>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <small className="mb-2 block text-xs font-bold">&copy; 2023, XLombard</small>
            <p className="text-xs font-normal">Конфиденциальность и обработка персональных данных</p>
          </div>
        </div>
      </footer>

      {menuOpen && (
        <div className="dark fixed inset-0 z-10 overflow-y-scroll bg-blue-base text-sm font-medium text-white md:hidden">
          <header className="flex gap-2.5 px-5 py-3 pb-8">
            <Button onClick={() => setMenuOpen((o) => !o)} variant="icon">
              <CloseIcon />
            </Button>
            <Link href="/" className="mr-auto flex">
              <Logo width={124} variant="mono" />
            </Link>
            <Button size="sm">Демо</Button>
            <Button variant="icon">
              <PhoneIcon />
            </Button>
          </header>
          <div className="mx-7">
            <div className="ml-[46px]">
              <Title className="mb-5 font-medium">О программе</Title>
              <List className="mb-8">
                <ListItem>
                  <Link href="#">Возможности</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Преимущества</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Поддержка</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Обновления</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Интеграции</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Документация</Link>
                </ListItem>
              </List>
              <Link href="/prices">
                <Title className="mb-7 font-medium">Тарифы</Title>
              </Link>
              <Link href="/contacts">
                <Title className="mb-8 font-medium">Контакты</Title>
              </Link>

              <a href="tel:+74956779551" className="mb-1 text-2xl font-bold">
                +7 (495) 677-95-51
              </a>
              <button className="mb-5 text-left font-normal">Заказать обратный звонок</button>
              <div className="mb-12 flex gap-2.5">
                <a href="#">
                  <SquareIcon className="fill-blue-light">
                    <TelegramIcon />
                  </SquareIcon>
                </a>
                <a href="#">
                  <SquareIcon className="fill-blue-light">
                    <WhatsappIcon />
                  </SquareIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
