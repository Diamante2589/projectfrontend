import axios, { AxiosRequestConfig } from 'axios';

// Configura el host base para todas las solicitudes Axios
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Reemplaza con tu host y puerto predeterminados
});

// Función para realizar solicitudes GET
export const httpGet = async <T>(path: string, config?: AxiosRequestConfig) => {
    try {
        const response = await axiosInstance.get<T>(path, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Función para realizar solicitudes POST
export const httpPost = async <T>(path: string, data?: any, config?: AxiosRequestConfig) => {
    try {
        const response = await axiosInstance.post<T>(path, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Función para realizar solicitudes PUT
export const httpPut = async <T>(path: string, data?: any, config?: AxiosRequestConfig) => {
    try {
        const response = await axiosInstance.put<T>(path, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default axiosInstance;
