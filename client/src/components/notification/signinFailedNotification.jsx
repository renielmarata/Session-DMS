import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const NoticationContainer = styled(Container)(({ theme }) => ({
    padding: '10px',
    color: '#AA2A2A',
    backgroundColor: '#F8D7D7',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
}))

const ErrorText = styled(Typography)(({ theme }) => ({
    fontSize: '15px',
}))



const SigninFailed = () => {
    return ( 
        <NoticationContainer>
            <ErrorOutlineIcon />
            <ErrorText>
                Username or Password is incorrect
            </ErrorText>
        </NoticationContainer>
     );
}
 
export default SigninFailed;