import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://b9a12-server-side-tahmid-ahnaf.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;