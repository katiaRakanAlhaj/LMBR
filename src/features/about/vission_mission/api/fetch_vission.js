import client from "../../../../api/client";
export const fetchVission = async () => {
  const response = await client.get("/vision-and-mission");
  return response.data || []; // Return empty array if no data
};