import client from "../../../api/client";
export const fetchContactPage = async () => {
  const response = await client.get("/contact-us-page");
  return response.data || []; // Return empty array if no data
};