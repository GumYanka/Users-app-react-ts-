import axios from "axios";
import { API_BASE_URL, API_TOKEN } from "../constants";
import { User } from "../interfaces";

export const UserService = {
  getUser: async (userId: number): Promise<User> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${userId}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  updateUser: async (
    userId: number,
    userData: Partial<User>
  ): Promise<void> => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      };
      await axios.put(`${API_BASE_URL}/${userId}`, userData, config);
    } catch (error) {
      throw error;
    }
  },
  getUsers: async (
    page: number,
    pageSize: number,
    genderFilter: string
  ): Promise<{ data: User[]; meta: any }> => {
    try {
      const response = await axios.get(API_BASE_URL, {
        params: {
          page,
          per_page: pageSize,
          gender: genderFilter,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
