import { Routes, Route } from "react-router-dom";
import { AddSession, AdminDashboard, CreateUser, Layout } from "./components";
import { AdminPage, LandingPage } from "./pages";
import Protected from "./pages/protected/protected";
import 'remixicon/fonts/remixicon.css';

const App = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                
                <Route element={<Protected />}>
                    <Route path="adminpage" element={<AdminPage />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="addsession" element={<AddSession />} />
                        <Route path="createuser" element={<CreateUser />}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
     );
}
 
export default App;
