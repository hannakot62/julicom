import {createBrowserRouter, Routes, Route} from "react-router-dom";
import EntryPage from "../pages/EntryPage/EntryPage";
import CommonHeader from "../components/CommonHeader/CommonHeader";
import CommonFooter from "../components/CommonFooter/CommonFooter";
import Layout from "../components/Layout/Layout";
import AuthPage from "../pages/AuthPage/AuthPage";



export default function AppRouter(){
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/*" element={<EntryPage />} />
                <Route path="/entry" element={<EntryPage />} />
                <Route path='auth' element={<AuthPage/>}/>
            </Route>
        </Routes>
    );
}