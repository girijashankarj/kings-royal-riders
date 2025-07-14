import { createTheme } from '@mui/material/styles';
import { THEME } from '../config/constants';

export const getTheme = (isDarkMode) =>
  createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: THEME.colors.primary.main,
        light: THEME.colors.primary.light,
        dark: THEME.colors.primary.dark,
        contrastText: isDarkMode ? '#FFFFFF' : '#FFFFFF', // Keep text white on primary in both modes
      },
      secondary: {
        main: THEME.colors.secondary.main,
        light: THEME.colors.secondary.light,
        dark: THEME.colors.secondary.dark,
      },
      background: {
        default: isDarkMode
          ? THEME.colors.background.default
          : THEME.colors.background.light.default,
        paper: isDarkMode ? THEME.colors.background.paper : THEME.colors.background.light.paper,
        gradient: isDarkMode
          ? THEME.colors.background.gradient
          : THEME.colors.background.light.gradient,
      },
      text: {
        primary: isDarkMode ? THEME.colors.text.primary : THEME.colors.text.light.primary,
        secondary: isDarkMode ? THEME.colors.text.secondary : THEME.colors.text.light.secondary,
      },
    },
    typography: {
      fontFamily: THEME.typography.FONT_FAMILY,
      h1: {
        fontSize: THEME.typography.FONT_SIZE.h1,
        fontWeight: THEME.typography.FONT_WEIGHT.bold,
      },
      h2: {
        fontSize: THEME.typography.FONT_SIZE.h2,
        fontWeight: THEME.typography.FONT_WEIGHT.semiBold,
      },
      h3: {
        fontSize: THEME.typography.FONT_SIZE.h3,
        fontWeight: THEME.typography.FONT_WEIGHT.medium,
      },
      body1: {
        fontSize: THEME.typography.FONT_SIZE.body1,
        fontWeight: THEME.typography.FONT_WEIGHT.regular,
      },
      body2: {
        fontSize: THEME.typography.FONT_SIZE.body2,
        fontWeight: THEME.typography.FONT_WEIGHT.regular,
      },
    },
    spacing: THEME.SPACING,
    shape: {
      borderRadius: THEME.BORDER_RADIUS,
    },
  });

export default getTheme;
