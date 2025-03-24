import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';

// Define colors based on extracted website theme
const Colors = {
  light: {
    primary: '#32373c',
    secondary: '#f78da7',
    background: '#ffffff',
    text: '#000000',
    accent: '#cf2e2e',
    card: '#f9f9f9',
    border: '#e1e1e1',
  },
  dark: {
    primary: '#32373c',
    secondary: '#f78da7',
    background: '#121212',
    text: '#ffffff',
    accent: '#cf2e2e',
    card: '#1e1e1e',
    border: '#2a2a2a',
  },
};

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = {
    colors: Colors[colorScheme || 'light'],
    isDark: colorScheme === 'dark',
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
