import { useQuery } from "@tanstack/react-query";
import { fetchHomePage, HOME_PAGE_QUERY_KEY } from "../api/homePage";

export const useHomePage = () => {
  const query = useQuery({
    queryKey: HOME_PAGE_QUERY_KEY,
    queryFn: fetchHomePage,
  });

  return {
    homePageData: query.data ?? null,
    loading: query.isLoading,
    error: query.error ? "Failed to load home page content" : null,
    refreshHomePage: query.refetch,
  };
};
