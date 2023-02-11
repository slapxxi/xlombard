let colors = {
  black: 'black',
  white: 'ghostwhite',
  pink: 'hsl(350, 100%, 88%)',
  offwhite: 'floralwhite',
  transparent: 'transparent',
} as const;

let components = {
  Button: {
    bg: colors.black,
    fg: colors.offwhite,
  },
  Link: {
    fg: colors.black,
  },
};

let general = {
  fg: colors.black,
  bg: colors.offwhite,
  em: colors.pink,
};

export let defaultTheme = {
  ...general,
  ...colors,
  ...components,
};
