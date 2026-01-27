import client from "../../../api/client";
export const fetchCompanyEquipment = async () => {
  const response = await client.get("/equipment-page");
  return response.data || []; // Return empty array if no data
};