import {Routes, Route} from "react-router-dom";
import EntryPage from "../pages/EntryPage/EntryPage";
import Layout from "../components/Layout/Layout";
import AuthPage from "../pages/AuthPage/AuthPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import SpacePartsSellingPage from "../pages/SpacePartsSellingPage/SpacePartsSellingPage";



export default function AppRouter(){
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/*" element={<EntryPage />} />
                <Route path="entry" element={<EntryPage />} />
                <Route path='auth' element={<AuthPage/>}/>
                <Route path='services' element={<ServicesPage/>}/>
                <Route path='space_parts' element={<SpacePartsSellingPage/>}/>
            </Route>
        </Routes>
    );
}