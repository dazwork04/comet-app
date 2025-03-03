import { Appearance } from 'react-native';

const isSystemThemeDark: Boolean = Appearance.getColorScheme() === 'dark';

export { isSystemThemeDark };
