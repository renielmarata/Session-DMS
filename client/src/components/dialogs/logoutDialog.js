import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Navigate } from "react-router-dom";

const LogoutDialog = ({ states }) => {
    const { logout, logoutNotif, setLogoutNotif } = states;

    return ( 
        <Dialog
            open={logoutNotif}
            onClose={() => {
                setLogoutNotif(!logoutNotif);
            }}
        >
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to log out?
                </DialogContentText>
                <DialogActions>
                    <Button onClick={() => {
                        setLogoutNotif(false);
                    }} color="primary">
                        cancel
                    </Button>
                    <Button onClick={async () => {
                        await setLogoutNotif(false);
                        const response = await logout();

                    }} color="primary" autoFocus>
                        confirm
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
     );
}
 
export default LogoutDialog;