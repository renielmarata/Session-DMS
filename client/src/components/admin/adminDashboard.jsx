import { Container } from "@mui/material";
import { styled } from "@mui/system";


const AdminDashboardContainer = styled(Container)(({ theme }) => ({
    border: '1px solid green',
}))


const AdminDashboard = () => {
    return ( 
        <AdminDashboardContainer maxWidth='xxl'>
            admin dashboard
        </AdminDashboardContainer>
     );
}
 
export default AdminDashboard;