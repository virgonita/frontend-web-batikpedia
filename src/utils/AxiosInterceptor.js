import axios from "axios";

const AxiosInterceptor = axios.create({
    baseURL: process.env.REACT_APP_APIURL, // replace with your API base URL
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

AxiosInterceptor.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error.response?.data);
    }
)
export default AxiosInterceptor