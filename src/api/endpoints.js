const API_KEY = "d00fce8f-06ad-472a-8e13-3dfd1a36fdb4";

export const getNewsCategoriesEndpoint = (
  category,
  page = 1,
  pageSize = 20
) => {
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page=${page}&page-size=${pageSize}`;

  return `https://content.guardianapis.com/search${queryParams}`;
};

export const getNewsDetailsEndpoint = newsId => {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;

  return `https://content.guardianapis.com/${newsId}${queryParams}`;
};
