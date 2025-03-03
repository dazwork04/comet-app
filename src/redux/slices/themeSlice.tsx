import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isSystemThemeDark } from '../../utils/constants';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { isThemeDark: isSystemThemeDark },
  reducers: {
    toggleTheme: (state, action: PayloadAction<boolean | undefined>) => {
      // If payload is provided, use it. Otherwise, just toggle.
      state.isThemeDark = action.payload ?? !state.isThemeDark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
