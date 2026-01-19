import client from "../../../../api/client";
export const fetchAboutUs = async () => {
  const response = await client.get("/about-us-page");
  console.log('response', response.data);
  return response.data || []; // Return empty array if no data
};