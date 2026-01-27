import client from "../../../api/client";
export const fetchHealth = async () => {
  const response = await client.get("/health-and-safety-page");
  return response.data || []; // Return empty array if no data
};