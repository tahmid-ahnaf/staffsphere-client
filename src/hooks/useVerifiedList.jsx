import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useVerifiedList = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: verifiedList = [] } = useQuery({
        queryKey: ['verifiedList'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/verifiedlist`);
            return res.data;
        }
    })

    return [verifiedList, refetch]
};

export default useVerifiedList;