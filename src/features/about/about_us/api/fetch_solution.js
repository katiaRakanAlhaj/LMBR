import client from "../../../../api/client";
export const fetchSolutions = async () => {
  const response = await client.get("/solution");
  return response.data || []; // Return empty array if no data
};