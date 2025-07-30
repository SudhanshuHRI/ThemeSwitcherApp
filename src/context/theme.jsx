import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const ThemeContext = createContext();

// Custom hook
export function useTheme() {
  return useContext(ThemeContext);
}

// Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-theme') || 'theme1';
  });

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    document.body.className = ''; // clear old classes
    document.body.classList.add(theme); // apply new theme class to body
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
