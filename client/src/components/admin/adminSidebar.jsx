import { useNavigate } from "react-router-dom";
import { Box, ButtonBase, Card, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../../assets/images/public/logo.svg";

// material ui
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import AddIcon from '@mui/icons-material/Add';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';




const AdminSidebarContainer = styled(Box)(({ theme }) => ({
    border: '1px solid red',
    padding: '80px 0px',
    height: '100%',
    minWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '80px',
}));


const ImageContainer = styled(Box)(({ theme }) => ({
    width: '120px',
}));


const NavText = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
}));


const CustomList = styled(List)(({ theme }) => ({

    width: '100%',
}))

const CustomItem = styled(ListItem)(({ theme }) => ({
    width: '100%',
}));

const CustomIcon = styled(ListItemIcon)(({ theme }) => ({
    minWidth: 40,
}))


const AdminSidebar = ({states}) => {
    const navigate = useNavigate();
    const { logoutNotif, setLogoutNotif } = states;

    return ( 
        <AdminSidebarContainer>
            <Stack direction="column" spacing={4} alignItems="center">

                <ImageContainer
                    component="img"
                    src={logo}
                />

                <Typography>
                    Admin
                </Typography>
            </Stack>


            <CustomList component="nav" sx={{width:'100%'}}>
                <CustomItem button="true" component={ButtonBase} onClick={()=>{navigate('./')}}>
                    <CustomIcon>
                        <SpaceDashboardOutlinedIcon />
                    </CustomIcon>
                    <ListItemText>Dashboard</ListItemText>
                </CustomItem>

                <CustomItem button="true" component={ButtonBase} onClick={()=>{navigate('addsession')}}>
                    <CustomIcon>
                        <AddIcon/>
                    </CustomIcon>
                    <ListItemText>Add Session</ListItemText>
                </CustomItem>

                <CustomItem button="true" component={ButtonBase}>
                    <CustomIcon>
                        <SearchOutlinedIcon/>
                    </CustomIcon>
                    <ListItemText>Find Session</ListItemText>
                </CustomItem>

                <CustomItem button="true" component={ButtonBase}>
                    <CustomIcon>
                        <PersonAddAltOutlinedIcon />
                    </CustomIcon>
                    <ListItemText>Create Session</ListItemText>
                </CustomItem>

                <CustomItem
                    button="true"
                    component={ButtonBase}
                    onClick={() => {
                        setLogoutNotif(true);
                    }}
                >
                    <CustomIcon>
                        <LogoutOutlinedIcon/>
                    </CustomIcon>
                    <ListItemText>Logout</ListItemText>
                </CustomItem>
            </CustomList>


        </AdminSidebarContainer>
     );
}
 
export default AdminSidebar;