import { Outlet } from "react-router-dom";
import Header from "./header";


function MainHeader(){
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    );
}

export default MainHeader;