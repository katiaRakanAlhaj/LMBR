import client from "../../../api/client";
export const fetchSlider = async () => {
  const response = await client.get("/slider");
  return response.data || []; // Return empty array if no data
};