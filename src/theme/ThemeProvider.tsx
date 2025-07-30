import React, { createContext, useContext, ReactNode } from 'react';
import { theme as defaultTheme } from '../theme';

export type Theme = typeof defaultTheme;

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ theme = defaultTheme, children }: { theme?: Theme; children: ReactNode }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useTheme = function() { return useContext(ThemeContext) };
