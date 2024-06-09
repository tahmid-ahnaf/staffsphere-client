import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useTask = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: task = [] } = useQuery({
        queryKey: ['task', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    })

    return [task, refetch]
};

export default useTask;