import { Container } from "@mui/material";
import { styled } from "@mui/system";
import { UseUserContext } from "../../context/userDataProvider";
import { useEffect } from "react";


const AdminDashboardContainer = styled(Container)(({ theme }) => ({
    border: '1px solid green',
}))


const AdminDashboard = () => {
    const { adminDashboardDataService } = UseUserContext();

    adminDashboardDataService();

    return ( 
        <AdminDashboardContainer maxWidth='xxl'>
            
            admin dashboard
        </AdminDashboardContainer>
     );
}
 
export default AdminDashboard;