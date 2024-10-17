import { Container } from "@mui/material";
import { styled } from "@mui/system";
import { UseUserContext } from "../../context/userDataProvider";
import { useEffect, useState } from "react";
import { Document, page } from "react-pdf";

const AdminDashboardContainer = styled(Container)(({ theme }) => ({
    border: '1px solid green',
}));

const AdminDashboard = () => {
    const { adminDashboardData } = UseUserContext();
    const [file, setFile] = useState(null);

    useEffect(() => {
        const fetchFileData = async () => {
            try {
                const response = await adminDashboardData();
                setFile(response.data.files[0]);
            } catch (err) {
                console.error(err);
            }
        };

        fetchFileData();
    }, [adminDashboardData]);

    return (
        <AdminDashboardContainer maxWidth='xxl'>
            <h2>Admin Dashboard</h2>
        </AdminDashboardContainer>
    );
};

export default AdminDashboard;
