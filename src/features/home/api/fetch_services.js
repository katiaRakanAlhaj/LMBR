import client from "../../../api/client";
export const fetchServices = async () => {
  const response = await client.get("/services");
  console.log('response', response.data);
  return response.data || []; // Return empty array if no data
};