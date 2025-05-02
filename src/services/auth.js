import { apiClient } from "./config";

export const apiRegister = async (payload) => {
  return apiClient.post("user/register", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
