import {Routes, Route} from "react-router-dom";
import EntryPage from "../pages/EntryPage/EntryPage";
import Layout from "../components/Layout/Layout";
import AuthPage from "../pages/AuthPage/AuthPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";



export default function AppRouter(){
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/*" element={<EntryPage />} />
                <Route path="/entry" element={<EntryPage />} />
                <Route path='auth' element={<AuthPage/>}/>
                <Route path='services' element={<ServicesPage/>}/>
            </Route>
        </Routes>
    );
}