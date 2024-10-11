import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? "http://localhost:5173/api": "/api",
    withCredentials: true // helps to send data from cookies to server
})

export default axiosInstance;