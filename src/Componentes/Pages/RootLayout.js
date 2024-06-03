import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader";

const RootLayout = () => {

    return (
        <>
            <h1>LOGO</h1>
            <MainHeader />
            <Outlet />
        </>
    );
}
export default RootLayout;