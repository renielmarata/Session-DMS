import { Container } from "@mui/material";
import { styled } from "@mui/system";
import { SigninForm } from "../components";

// assets
import logoBackground from "../assets/images/public/logoBackground.svg";


// styled components
const LandingPageContainer = styled(Container)(({ theme }) => ({
    border: '1px solid red',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${logoBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contained',
    backgroundPosition: 'center',
}))


const LandingPage = () => {
    return ( 
        <LandingPageContainer disableGutters maxWidth='xxl'>
            <SigninForm/>
        </LandingPageContainer>
     );
}
 
export default LandingPage;


