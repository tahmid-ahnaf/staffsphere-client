import { Navigate, useLocation } from "react-router-dom";
import useHr from "../hooks/useHr";
import useAuth from "../hooks/useAuth";


const HrRoute = ({children}) => {
    const {user, loading} = useAuth();  
    const [isHr, isHrLoading] = useHr();
    const location = useLocation();

    if(loading || isHrLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isHr) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default HrRoute;