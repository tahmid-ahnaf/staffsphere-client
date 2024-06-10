import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllTask = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: alltask = [] } = useQuery({
        queryKey: ['alltask'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/alltasks`);
            return res.data;
        }
    })

    return [alltask, refetch]
};

export default useAllTask;