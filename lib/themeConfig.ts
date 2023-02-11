import tailwindConfig from 'tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';
import { ThemeConfig } from './types';

export let themeConfig = resolveConfig(tailwindConfig) as ThemeConfig;
