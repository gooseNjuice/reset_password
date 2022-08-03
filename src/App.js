import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Notification from "./ui/Notification";
import MainPage from "./ui/MainPage";
import NewPassword from "./ui/NewPassword";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="notification" element={<Notification/>}/>
                <Route path="password/:hash" element={<NewPassword/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
