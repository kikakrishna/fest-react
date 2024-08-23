import axios from "axios";


// export const BASEURL='https://xclinic.kindclinic.online/telehealthapi/api/'

export const BASEURL = 'http://localhost:5000'




export const apiClient = () => {
    const axiosInstance = axios.create({
        baseURL: BASEURL,
        responseType: "json",
    });
    // axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return axiosInstance;
};