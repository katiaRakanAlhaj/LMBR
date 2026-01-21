import client from "../../../api/client";
export const fetchContactPage = async () => {
  const response = await client.get("/contact-us-page");
  console.log('response', response.data);
  return response.data || []; // Return empty array if no data
};