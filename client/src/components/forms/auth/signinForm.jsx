import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Container, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";



// material icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { SigninFailedNotification } from "../..";
import { UseAuthContext } from "../../../context/authProvider";


// styled components
const SigninFormContainer = styled(Container)(({ theme }) => ({
    padding: '5px 10px',

    [theme.breakpoints.up('sm')]: {
        width: '400px',
    }
}))


const FormHeader = styled(Typography)(({ theme }) => ({
    fontSize: '25px',
    textAlign: 'center',
}))




const SigninForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { isAuthenticated } = UseAuthContext();

    const signinSchema = Yup.object({
        username: Yup.string()
            .typeError('invalid characters')
            .matches(/^[A-Za-z]+&/, "letters only")
            .max(20, 'maximum of 20 characters')
            .required('username is required'),
        password: Yup.string()
            .typeError("invalid characters")
            .min(5, 'minimum of 5 characters')
            .max(20, 'maximum of 20 characters')
            .required('password is required')
    })

    return ( 
        <SigninFormContainer disableGutters>
            <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={signinSchema}
                onSubmit={() => {
                    console.log("submit test");
                }}
            >
                {({ isSubmitting, values, errors, handleSubmit, handleChange, touched }) => (
                    <Form>


                        <Stack direction='column' spacing={3}>
                            <FormHeader>
                                Signin
                            </FormHeader>

                            {
                                /** notification */
                                !isAuthenticated && <SigninFailedNotification/>
                            }

                            <Field
                                as={TextField}
                                name="username"
                                label="username"
                                autoComplete="off"
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                error={touched.username && Boolean(errors.username)}
                                helperText={touched.username && errors.username}
                            />

                            <Field
                                as={TextField}
                                name="password"
                                label="password"
                                type={ showPassword ? "text" : "password"}
                                autoComplete="off"
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => {
                                                    setShowPassword(!showPassword)
                                                }}
                                            >
                                                { showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />


                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                disableElevation
                                sx={{
                                    textTransform: 'none',
                                }}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </SigninFormContainer>
     );
}
 
export default SigninForm;