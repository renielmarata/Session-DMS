import { Drawer, Typography, Box } from "@mui/material";

const AdminDrawer = ({ showDrawer, setShowDrawer }) => {
    // Function to handle closing the drawer when clicking on its content
    const handleDrawerClose = () => {
        setShowDrawer(false);
    };

    return ( 
        <Drawer anchor="left" open={showDrawer} onClose={handleDrawerClose}>
            <Box
                sx={{ width: 250 }} // Setting the drawer's width
                role="presentation" // Ensures accessibility
                onClick={handleDrawerClose}
                onKeyDown={handleDrawerClose} // Close drawer with keyboard events like Tab or Esc
            >
                <Typography variant="h6" sx={{ padding: 2 }}>
                    First
                </Typography>
                <Typography variant="h6" sx={{ padding: 2 }}>
                    Second
                </Typography>
            </Box>
        </Drawer>
    );
};
 
export default AdminDrawer;
