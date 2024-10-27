import { Container, IconButton, SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { UseUserContext } from "../../context/userDataProvider";
import { useEffect, useState } from "react";


const AdminDashboardContainer = styled(Container)(({ theme }) => ({
    // You can add your styles here if needed
}));

const AdminDashboard = () => {
    const { adminDashboardData } = UseUserContext();
    const [img, setImg] = useState();

    useEffect(() => {
        const fetchFileData = async () => {
            try {
                const response = await adminDashboardData();
                console.log(response);
            } catch (err) {
                console.error(err);
            }
        };

        fetchFileData();
    }, [adminDashboardData]);

    return (
        <AdminDashboardContainer maxWidth='xxl'>
            <h2>Admin Dashboard</h2>
            <IconButton>
                <i class="ri-chat-1-line"></i>
            </IconButton>
        </AdminDashboardContainer>
    );
};

export default AdminDashboard;
