import { Container, Hidden, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { AdminDashboard, AdminDrawer, AdminSidebar, LogoutDialog } from "../../components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { UseAuthContext } from "../../context/authProvider";


// material icons
import MenuIcon from '@mui/icons-material/Menu';


const AdminPageContainer = styled(Container)(({ theme }) => ({
    border: '1px solid green',
    minHeight: '100vh',
    display: 'flex',
}));


const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    margin: '10px 15px',
}))

const AdminPage = () => {
    const { logout } = UseAuthContext();
    const [logoutNotif, setLogoutNotif] = useState(false);
    const [showDrawer, setShowDrawer] = useState(true);

    return ( 
        <AdminPageContainer disableGutters maxWidth="xxl">
            <Stack direction='column'>
                <Hidden mdUp>
                    <IconButton
                        onClick={()=>{setShowDrawer(true)}}
                    >
                        <CustomMenuIcon/>
                    </IconButton>
                </Hidden>

                
                {/** desktop sidebar */}
                <Hidden mdDown>
                    <AdminSidebar states={{ logoutNotif, setLogoutNotif }} />
                </Hidden>

                {/** mobile drawer */}
                <AdminDrawer states={{showDrawer, setShowDrawer}} />
            </Stack>

            
            <Outlet />
            


            {/* dialogs */}
            <LogoutDialog states={{ logout, logoutNotif, setLogoutNotif }} />
        </AdminPageContainer>
     );
}
 
export default AdminPage;