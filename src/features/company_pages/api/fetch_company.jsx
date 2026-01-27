import client from "../../../api/client";
export const fetchCompanies = async () => {
  const response = await client.get("/companies");
  return response.data || []; // Return empty array if no data
};
export const fetchSingleCompany = async (id) => {
  const response = await client.get(`/company?id=${id}`);
  return response.data || {}; // Return empty object if no data
};