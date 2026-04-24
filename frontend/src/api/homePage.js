import { fetchJson } from "./http";

export const HOME_PAGE_QUERY_KEY = ["home-page"];

export const fetchHomePage = async () => {
  const result = await fetchJson("/api/resource/Home Page/Home Page");
  return result.data ?? null;
};
