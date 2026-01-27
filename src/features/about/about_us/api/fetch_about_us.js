import client from "../../../../api/client";
export const fetchAboutUs = async () => {
  const response = await client.get("/about-us-page");
  return response.data || []; // Return empty array if no data
};