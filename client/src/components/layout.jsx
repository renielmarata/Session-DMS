import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { styled } from "@mui/system";

// styled components
const LayoutContainer = styled(Container)(({ theme }) => ({
    border: '2px solid blue',
    minHeight: '100vh',
}))


const Layout = () => {
    return ( 
        <LayoutContainer disableGutters maxWidth='xxl'>
            <Outlet/>
        </LayoutContainer>
     );
}
 
export default Layout;