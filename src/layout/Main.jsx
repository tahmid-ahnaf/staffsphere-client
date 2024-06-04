import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";
import FooterComp from "../Pages/Shared/FooterComp/FooterComp";

const Main = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {noHeaderFooter || <NavigationBar></NavigationBar>}
            <Outlet></Outlet>
            { noHeaderFooter || <FooterComp></FooterComp>}
        </div>
    );
};

export default Main;