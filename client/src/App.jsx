import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { LandingPage } from "./pages";


const App = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />}/>
            </Route>
        </Routes>
     );
}
 
export default App;