import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDetails = (email) => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: details = [] } = useQuery({
        queryKey: ['details'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/details?email=${email}`);
            return res.data;
        }
    })

    return [details, refetch]
};

export default useDetails;