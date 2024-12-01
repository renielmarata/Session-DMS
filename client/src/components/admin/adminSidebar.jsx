import { useNavigate } from "react-router-dom";
import { Avatar, Box, ButtonBase, Card, List, ListItem, ListItemIcon, ListItemText, Stack, SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/system";

// assets
import { ReactComponent as HomeIcon } from "../../assets/icons/homeIcon.svg";
import { ReactComponent as DocumentIcon } from "../../assets/icons/documentIcon.svg";
import { ReactComponent as MultipleUserIcon } from "../../assets/icons/multipleUserIcon.svg";
import { ReactComponent as ListIcon } from "../../assets/icons/listIcon.svg";
import { ReactComponent as CloudDownloadIcon } from "../../assets/icons/cloudDownloadIcon.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trashIcon.svg";
import { ReactComponent as SignoutIcon } from "../../assets/icons/signoutIcon.svg";
import LogoutDialog from "../dialogs/logoutDialog";
import { useState } from "react";
import { UseUserContext } from "../../context/userDataProvider";



const AdminSidebarContainer = styled(Box)(({ theme }) => ({
    borderRight: '1px solid #EFEFEF',
    padding: '80px 0px',
    height: '100%',
    minWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

// Profile styles
const ProfileContainer = styled(Stack)(({ theme }) => ({
    marginBottom: '36px',
    color: "#505C6D",
    width: '200px',
}));

const ProfileName = styled(Typography)(({ theme }) => ({
    fontFamily: 'sans-serif',
    color: '#505C6D',
    fontSize: '16px',
    fontWeight: '600',
}));

const ProfileRole = styled(Typography)(({ theme }) => ({
    fontSize: '12px',
}));

const CustomList = styled(List)(({ theme }) => ({
    width: '100%',
}));

const CustomItem = styled(ListItem)(({ theme }) => ({
    paddingLeft: '30px',
    color: '#79869A',
    width: '100%',
    alignItems: 'center',
    gap: '16px',
}));

const NavHeader = styled(Typography)(({ theme }) => ({
    margin: '14px 0px',
    paddingLeft: '30px',
    fontSize: "13px",
    color: '#989EBD',
}));

const NavText = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: '500',
}));

const NavIcon = styled(SvgIcon)(({ theme }) => ({
    fontSize: '18px',
    fontWeight: 'thin',
}));

const AdminSidebar = () => {
    const [logoutNotif, setLogoutNotif] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };


    return (
        <AdminSidebarContainer>
            <ProfileContainer direction="column" spacing={3} alignItems="center">
                <Avatar
                    alt={'profile picture'}
                    sx={{
                        width: '90px',
                        height: '90px',
                    }}
                />
                <Stack direction='column' spacing={0} textAlign="center">
                    <ProfileName>
                        reniel
                    </ProfileName>
                    <ProfileRole>
                        admin
                    </ProfileRole>
                </Stack>
            </ProfileContainer>

            <CustomList
                component="nav"
                subheader={<NavHeader>Menu</NavHeader>}
            >
                <CustomItem
                    button
                    component={ButtonBase}
                    onClick={()=>{navigate('./')}}
                >
                    <NavIcon component={HomeIcon} />
                    <NavText>Home</NavText>
                </CustomItem>

                <CustomItem
                    button
                    component={ButtonBase}
                    onClick={()=>{ navigate('./addsession')}}
                >
                    <NavIcon component={DocumentIcon} />
                    <NavText>Documents</NavText>
                </CustomItem>

                <CustomItem
                    button
                    component={ButtonBase}
                    onClick={()=>{ navigate('./createuser') }}
                >
                    <NavIcon component={MultipleUserIcon} />
                    <NavText>Users</NavText>
                </CustomItem>

                <CustomItem button component={ButtonBase}>
                    <NavIcon component={ListIcon} />
                    <NavText>Logs</NavText>
                </CustomItem>

            </CustomList>


            <CustomList
                component="nav"
                subheader={<NavHeader>Utilities</NavHeader>}
            >
                <CustomItem button component={ButtonBase}>
                    <NavIcon component={CloudDownloadIcon} />
                    <NavText>Backup</NavText>
                </CustomItem>

                <CustomItem button component={ButtonBase}>
                    <NavIcon component={TrashIcon} />
                    <NavText>Trash</NavText>
                </CustomItem>

                <CustomItem 
                button 
                component={ButtonBase}
                onClick={()=>{ setLogoutNotif(!logoutNotif)}}
                >
                    <NavIcon component={SignoutIcon} />
                    <NavText>Logout</NavText>
                </CustomItem>

            </CustomList>



            <LogoutDialog states={{logoutNotif, setLogoutNotif}}/>
            

            
        </AdminSidebarContainer>
    );
};

export default AdminSidebar;
