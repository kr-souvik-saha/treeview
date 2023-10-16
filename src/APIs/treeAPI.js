import axiosInstance from "./axiosInstance"

export const getData = async () => {
    try {
        const response = await axiosInstance.get('/data');
        return response;
    } catch (err) {
        return err;
    }

}