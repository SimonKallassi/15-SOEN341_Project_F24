// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; // FastAPI backend URL

export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.detail : "Network Error";
    }
};
