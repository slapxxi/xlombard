import classNames from 'classnames';
import { useId, useState } from 'react';
import useMediaQuery from '../lib/hooks/useMediaQuery';
import { mdQuery } from '../lib/styles/mq';
import { ChartIcon } from './icons/ChartIcon';
import { CodeIcon } from './icons/CodeIcon';
import { CogIcon } from './icons/CogIcon';
import { MessageIcon } from './icons/MessageIcon';
import { List, ListItem } from './List';
import { ResponsiveText } from './ResponsiveText';
import styles from './Scheme.module.scss';
import { Title, TitleProps } from './Title';

type Ids = 'functions' | 'tuning' | 'support' | 'expertise';

type SchemeProps = {
  className?: string;
};

type Data = {
  [K in Ids]: { title: string; points: string[] };
};

let data: Data = {
  expertise: {
    title: 'Экспертиза',
    points: ['18 модулей', 'Полный цикл управления портфелем', 'Безопасность', 'CRM'],
  },
  functions: {
    title: 'Функционал',
    points: ['Полный цикл управления портфелем', 'Безопасность', 'crm'],
  },
  support: {
    title: 'Поддержка',
    points: ['18 модулей', 'Полный цикл управления портфелем', 'Безопасность', 'crm'],
  },
  tuning: {
    title: 'Доработки',
    points: ['18 модулей', 'Безопасность', 'crm', 'Полный цикл управления портфелем'],
  },
};

export let Scheme = (props: SchemeProps) => {
  let { className } = props;
  let [selectedId, setSelectedId] = useState<Ids>('functions');
  let filterId = useId();
  let md = useMediaQuery(mdQuery);
  let titleSize: TitleProps['size'] = md ? '3xl' : 'lg';

  function handleClick(e: React.MouseEvent<SVGAElement | HTMLAnchorElement>) {
    setSelectedId(e.currentTarget.id as Ids);
  }

  return (
    <div className={classNames(className, 'items-center md:flex')}>
      <div className="flex-1">
        <svg
          fill="none"
          viewBox="0 0 320 337"
          className="relative z-10 shrink-0 text-sm text-blue-base md:flex-1"
          fontFamily="Onest"
        >
          <a
            id="functions"
            className={`${styles.link}`}
            onClick={handleClick}
            data-checked={selectedId === 'functions'}
          >
            <rect
              width="99"
              height="99"
              fill="#CAD2FF"
              rx="8"
              transform="translate(115 200) rotate(30 45 45) "
              className={`${styles.backdrop}`}
              style={{
                transform:
                  selectedId === 'functions'
                    ? 'translate(115px, 200px) rotate(45deg)'
                    : 'translate(115px, 200px) rotate(30deg)',
                transformOrigin: '45px 45px',
              }}
            />
            <rect
              width="98"
              height="98"
              fill="#fff"
              stroke="#0862EE"
              rx="8"
              className={`${styles.tile}`}
              transform="translate(115 200) rotate(45 45 45)"
            />
            <rect
              filter={`url(#${filterId})`}
              width="98"
              height="98"
              rx="8"
              className={`${styles.activeTile}`}
              transform="translate(115 200) rotate(45 45 45)"
            />
            <g className={`${styles.icon}`} style={{ transformOrigin: '166px 210px' }}>
              <CogIcon size={42} x={140} y={210} />
            </g>
            <text fill="currentColor" x="118" y="272" className={`${styles.text}`}>
              Функционал
            </text>
          </a>
          <a
            id="expertise"
            onClick={handleClick}
            data-checked={selectedId === 'expertise'}
            className={`${styles.link}`}
          >
            <rect
              width="99"
              height="99"
              fill="#CAD2FF"
              rx="8"
              transform="translate(115 20) rotate(30 45 45) "
              className={`${styles.backdrop}`}
              style={{
                transform:
                  selectedId === 'expertise'
                    ? 'translate(115px, 20px) rotate(45deg)'
                    : 'translate(115px, 20px) rotate(30deg)',
                transformOrigin: '45px 45px',
              }}
            />
            <rect
              width="98"
              height="98"
              fill="#fff"
              stroke="#0862EE"
              rx="8"
              className={`${styles.tile}`}
              transform="rotate(45 80 195)"
            />
            <rect
              filter={`url(#${filterId})`}
              width="98"
              height="98"
              rx="8"
              className={`${styles.activeTile}`}
              transform="translate(116 19) rotate(45 45 45)"
            />
            <g style={{ transformOrigin: '156px 30px' }} className={`${styles.icon}`}>
              <ChartIcon size={38} x={143} y={30} />
            </g>
            <text fill="currentColor" x="120" y="86" className={`${styles.text}`}>
              Экспертиза
            </text>
          </a>
          <a
            id="support"
            onClick={handleClick}
            data-checked={selectedId === 'support'}
            className={`${styles.link}`}
          >
            <rect
              width="99"
              height="99"
              fill="#CAD2FF"
              rx="8"
              className={`${styles.backdrop}`}
              style={{
                transform:
                  selectedId === 'support'
                    ? 'translate(205px, 110px) rotate(45deg)'
                    : 'translate(205px, 110px) rotate(30deg)',
                transformOrigin: '45px 45px',
              }}
            />
            <rect
              width="99"
              height="99"
              fill="#fff"
              stroke="#0862EE"
              rx="8"
              transform="rotate(45.02 15.62 347.6)"
              className={`${styles.tile}`}
            />
            <rect
              filter={`url(#${filterId})`}
              width="98"
              height="98"
              rx="8"
              transform="translate(205 110) rotate(45 45 45)"
              className={`${styles.activeTile}`}
            />
            <g className={`${styles.icon}`} style={{ transformOrigin: '244px 120px' }}>
              <MessageIcon size={38} x={231} y={120} />
            </g>
            <text fill="currentColor" x="209" y="176" className={`${styles.text}`}>
              Поддержка
            </text>
          </a>
          <a
            id="tuning"
            onClick={handleClick}
            data-checked={selectedId === 'tuning'}
            className={`${styles.link}`}
          >
            <rect
              width="99"
              height="99"
              fill="#CAD2FF"
              rx="8"
              className="transition-transform"
              style={{
                transform:
                  selectedId === 'tuning'
                    ? 'translate(25px,110px) rotate(45deg)'
                    : 'translate(25px,110px) rotate(30deg)',
                transformOrigin: '45px 45px',
              }}
            />
            <rect
              width="98"
              height="98"
              fill="#fff"
              stroke="#0862EE"
              strokeWidth="2"
              rx="8"
              transform="rotate(45.02 -73.98 131.36)"
              className={`${styles.tile}`}
            />
            <rect
              filter={`url(#${filterId})`}
              width="98"
              height="98"
              rx="8"
              className={`${styles.activeTile}`}
              transform="translate(25 110) rotate(45 45 45)"
            />
            <g className={`${styles.icon}`} style={{ transformOrigin: '70px 120px' }}>
              <CodeIcon size={38} x={50} y={120} />
            </g>
            <text fill="currentColor" x="33" y="176" className={`${styles.text}`}>
              Доработки
            </text>
          </a>
          <g>
            <path stroke="#CAD2FF" d="M.5-.5h293.58" transform="rotate(45 -41 96)" className="cap-round" />
            <path stroke="#CAD2FF" d="M.5-.5h293.58" transform="rotate(-45 348 65)" className="cap-round" />
            <path fill="#0862EE" d="M144.36 145.27h31.53v31.54h-31.53z" />
            <path stroke="#fff" strokeLinecap="square" strokeWidth="5" d="M151.6 151.9v.61l17.04 17.05v.6" />
            <path
              stroke="#fff"
              strokeLinecap="square"
              strokeWidth="5"
              d="M168.64 151.9v.61l-17.04 17.05v.6"
            />
          </g>
          <defs>
            <filter id={filterId} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology in="SourceAlpha" radius="12" result="effect1_dropShadow_725_73" />
              <feOffset dx="18.26" dy="18.26" />
              <feGaussianBlur stdDeviation="6.64" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.265761 0 0 0 0 0.679167 0 0 0 0.29 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_725_73" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_725_73" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      <div
        className="relative z-0 -mt-8 mb-8 overflow-hidden rounded-lg  
        md:mt-0 md:-ml-12 md:flex-1 md:rounded-xl"
      >
        {(['tuning', 'functions', 'support', 'expertise'] as Ids[]).map(
          (id) =>
            selectedId === id && (
              <div
                className="animate-slide-in relative z-0 bg-gray-light px-8 pt-12 pb-4 md:p-9 md:pl-10"
                key={id}
              >
                <Title variant="decorated" className="mb-4" size={titleSize}>
                  {data[id].title}
                </Title>
                <List className="ml-5 text-xs" variant="disc">
                  {data[id].points.map((p, i) => (
                    <ListItem key={i}>
                      <ResponsiveText>{p}</ResponsiveText>
                    </ListItem>
                  ))}
                </List>
              </div>
            ),
        )}
      </div>
    </div>
  );
};
