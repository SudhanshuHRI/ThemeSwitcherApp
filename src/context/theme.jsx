import React, { createContext, useContext, useState, useEffect } from 'react';


const ThemeContext = createContext();


export function useTheme() {
  return useContext(ThemeContext);
}

// context provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-theme') || 'theme1';
  });
   const [layout, setLayout] = useState(() => {
    return localStorage.getItem('app-layout') || 'layout1';
  });
  
// saving layout in localStorage
   useEffect(() => {
    localStorage.setItem('app-layout', layout);
  }, [layout]);

  // saving theme in localStorage
  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    document.body.className = ''; 
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, layout,setLayout }}>
      {children}
    </ThemeContext.Provider>
  );
}
