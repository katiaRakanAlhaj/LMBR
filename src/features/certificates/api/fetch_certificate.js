import client from "../../../api/client";
export const fetchCertificates = async () => {
  const response = await client.get("/certificates-page");
  console.log('response', response.data);
  return response.data || []; // Return empty array if no data
};