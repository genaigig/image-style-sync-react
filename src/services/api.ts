import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export interface RequestType {
  id: number;
  name: string;
}

export interface OEM {
  id: number;
  name: string;
}

export interface Plant {
  id: number;
  name: string;
}

export const apiService = {
  getRequestTypes: async (): Promise<RequestType[]> => {
    const response = await axios.get(`${API_BASE_URL}/request-types`);
    return response.data;
  },

  getOEMs: async (): Promise<OEM[]> => {
    const response = await axios.get(`${API_BASE_URL}/oems`);
    return response.data;
  },

  getPlants: async (): Promise<Plant[]> => {
    const response = await axios.get(`${API_BASE_URL}/plants`);
    return response.data;
  },

  getAllData: async (): Promise<{ requestTypes: RequestType[], oems: OEM[], plants: Plant[] }> => {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
  }
};
