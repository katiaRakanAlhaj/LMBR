import client from "../../../api/client";
export const fetchHealth = async () => {
  const response = await client.get("/health-and-safety-page");
  console.log('response', response.data);
  return response.data || []; // Return empty array if no data
};