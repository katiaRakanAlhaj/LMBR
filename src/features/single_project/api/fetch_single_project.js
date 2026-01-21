import client from "../../../api/client";
export const fetchSingleProject = async (id) => {
  const response = await client.get(`/project?id=${id}`);
  return response.data || {}; // Return empty object if no data
};