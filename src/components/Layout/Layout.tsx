import CommonFooter from "../CommonFooter/CommonFooter";
import CommonHeader from "../CommonHeader/CommonHeader";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div style={{width: "100%"}}>
            <CommonHeader/>
                <Outlet/>
            <CommonFooter/>
        </div>
    )
}