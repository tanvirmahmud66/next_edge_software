// src/hooks/useTheme.js
import { useState, useEffect } from 'react';
import { fetchActiveTheme, defaultThemeColors } from '../api/theme_api';

export const useTheme = () => {
  const [theme, setTheme] = useState({
    colors: defaultThemeColors,
    name: 'Default',
    loading: true,
    error: null
  });

  const loadTheme = async () => {
    try {
      setTheme(prev => ({ ...prev, loading: true, error: null }));
      
      const result = await fetchActiveTheme();
      
      if (result.success) {
        setTheme({
          colors: result.data.colors,
          name: result.data.themeName,
          loading: false,
          error: null
        });
      } else {
        setTheme({
          colors: defaultThemeColors,
          name: 'Default (Fallback)',
          loading: false,
          error: result.error
        });
      }
    } catch (error) {
      setTheme({
        colors: defaultThemeColors,
        name: 'Default (Fallback)',
        loading: false,
        error: error.message
      });
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  return {
    colors: theme.colors,
    themeName: theme.name,
    loading: theme.loading,
    error: theme.error,
    refreshTheme: loadTheme
  };
};