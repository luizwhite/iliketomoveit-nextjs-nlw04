import 'styled-components';

import { appColorsLight } from './appColors';
import { colors } from './colors';
import { fonts } from './fonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    appColors: typeof appColorsLight;
    colors: typeof colors;
    fonts: typeof fonts;
    name: string;
  }
}
