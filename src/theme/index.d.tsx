import 'styled-components/native';

import {OriginTheme} from './';

export type TTheme = typeof OriginTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends TTheme {}
}
