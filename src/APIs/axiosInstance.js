import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000'
})

axiosInstance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

axiosInstance.interceptors.response.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

export default axiosInstance;