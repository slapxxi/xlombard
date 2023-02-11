import { Config } from 'tailwindcss';
import { defaultTheme } from './styles/theme';

export type ThemeConfig = Config & {
  theme: { colors: { primary: string; secondary: string; bg: string; text: string } };
};

export type ClassNameProps = {
  className?: string;
};

export type Theme = typeof defaultTheme & { data?: any };
