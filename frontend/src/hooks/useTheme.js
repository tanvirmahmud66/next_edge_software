import { useQuery } from "@tanstack/react-query";
import { fetchActiveTheme, defaultThemeColors } from '../api/theme_api';

export const useTheme = () => {
  const query = useQuery({
    queryKey: ["active-theme"],
    queryFn: fetchActiveTheme,
    select: (result) => {
      if (result.success) {
        return {
          colors: result.data.colors,
          name: result.data.themeName,
          error: null,
        };
      }

      return {
        colors: result.data?.colors || defaultThemeColors,
        name: result.data?.themeName || "Default (Fallback)",
        error: result.error || "Failed to load theme",
      };
    },
  });

  const theme = query.data || {
    colors: defaultThemeColors,
    name: "Default",
    error: null,
  };

  return {
    colors: theme.colors,
    themeName: theme.name,
    loading: query.isLoading,
    error: theme.error,
    refreshTheme: query.refetch,
  };
};
