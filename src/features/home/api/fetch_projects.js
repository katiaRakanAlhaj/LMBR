import client from "../../../api/client";
export const fetchProjects = async () => {
  const response = await client.get("/our-projects");
  console.log('response', response.data);
  return response.data || []; // Return empty array if no data
};