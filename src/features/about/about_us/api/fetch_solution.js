import client from "../../../../api/client";
export const fetchSolutions = async () => {
  const response = await client.get("/solution");
  console.log('response', response.data);
  return response.data || []; // Return empty array if no data
};