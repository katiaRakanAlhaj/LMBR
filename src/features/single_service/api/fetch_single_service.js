import client from "../../../api/client";
export const fetchSingleService = async (id) => {
  const response = await client.get(`/service?id=${id}`);
  return response.data || {}; // Return empty object if no data
};