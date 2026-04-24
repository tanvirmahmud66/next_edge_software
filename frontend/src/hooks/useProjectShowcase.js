import { useQuery } from "@tanstack/react-query";
import { fetchJson } from "../api/http";

const CONFIG = {
  BASE_URL: "",
  API_ENDPOINTS: {
    PROJECT_SCREENSHOT: "/api/resource/Project Screenshot",
  },
};

const PROJECT_SHOWCASE_QUERY_KEY = ["project-showcase"];

const fetchProjectShowcase = async () => {
  const listData = await fetchJson(
    `${CONFIG.API_ENDPOINTS.PROJECT_SCREENSHOT}?fields=["name"]&limit_page_length=1&order_by=creation desc`,
  );

  if (!listData.data?.length) {
    return [];
  }

  const docName = listData.data[0].name;
  const detailData = await fetchJson(
    `${CONFIG.API_ENDPOINTS.PROJECT_SCREENSHOT}/${docName}`,
  );

  return (detailData.data?.demo_project || [])
    .map((item, idx) => ({
      id: item.id || idx,
      title: item.primary_value?.trim() || null,
      image: item.attachment ? CONFIG.BASE_URL + item.attachment : null,
    }))
    .filter((item) => item.image);
};

export const useProjectShowcase = () => {
  const query = useQuery({
    queryKey: PROJECT_SHOWCASE_QUERY_KEY,
    queryFn: fetchProjectShowcase,
  });

  return {
    items: query.data ?? [],
    loading: query.isLoading,
    error: query.error ? "Unable to load projects. Please check your connection." : null,
    refreshShowcase: query.refetch,
  };
};
