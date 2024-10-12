// themeContext.ts
import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    buttonBackground: '#007bff',
    buttonForeground: '#ffffff'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    buttonBackground: '#555555',
    buttonForeground: '#eeeeee'
  }
};

export const ThemeContext = React.createContext(themes.light);
