import client from "../../../../api/client";
export const fetchGoals = async () => {
  const response = await client.get("/goals");
  return response.data || []; // Return empty array if no data
};