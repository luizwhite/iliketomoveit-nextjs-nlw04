import { DefaultTheme } from 'styled-components';
import { appColorsLight, appColorsDark } from './appColors';

import { colors } from './colors';
import { fonts } from './fonts';

const lightTheme: DefaultTheme = {
  appColors: appColorsLight,
  colors,
  fonts,
  name: 'light',
};

const darkTheme: DefaultTheme = {
  appColors: appColorsDark,
  colors,
  fonts,
  name: 'dark',
};

export { lightTheme, darkTheme };
