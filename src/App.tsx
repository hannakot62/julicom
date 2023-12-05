import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import {store} from "./store";
import {Provider} from "react-redux";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </Provider>
        </>
    )
}
export default App
