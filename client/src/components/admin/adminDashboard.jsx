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
    const [img, setImg] = useState();

    useEffect(() => {
        const fetchFileData = async () => {
            try {
                const response = await adminDashboardData();

                const url = URL.createObjectURL(response);
                console.log(url);
                setImg(url);

            } catch (err) {
                console.error(err);
            }
        };

        if (!img) {
            fetchFileData();
        }
    }, [adminDashboardData]);

    return (
        <AdminDashboardContainer maxWidth='xxl'>
            <h2>Admin Dashboard</h2>
            {
                <img src={img}/>
            }
        </AdminDashboardContainer>
    );
};

export default AdminDashboard;
