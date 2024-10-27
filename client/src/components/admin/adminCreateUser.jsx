import { Field, Formik } from "formik";
import * as Yup from "yup";
import { Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";


const CreateUserContainer = styled(Container)(({ theme }) => ({
    border: '1px solid green',
}));


const Header = styled(Typography)(({ theme }) => ({
    fontSize: '30px',
}))


const CreateUser = () => {
    const userSchema = Yup.object({
        firstname: Yup.string()
            .typeError('enter valid character')
            .matches(/^[a-zA-Z-]+$/, 'letters only')
            .max(20, 'Maximum of 20 characters')
            .required('firstname is required'),
        lastname: Yup.string()
            .typeError('enter valid character')
            .matches(/^[a-zA-Z-]+$/, 'letters only')
            .max(20, 'Maximum of 20 characters')
            .required('lastname is required'),
        suffix: Yup.string()
            .typeError('enter valid character')
            .max(4, 'Maximum of 4 characters'),
        email: Yup.string()
            .typeError('enter valid character')
            .matches(/^[a-zA-Z0-9+._]+@gmail\.com$/, 'Enter valid gmail')
            .max(40, 'maximum of 40 characters')
    })

    return ( 
        <CreateUserContainer>
            <Header>
                Create User
            </Header>

            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    suffix: '',
                    email: '',
                    role: '',
                    privilege: '',
                }}

                onSubmit={(values) => {
                    console.log("submitted");
                }}
            >
                {({ isSubmitting }) => (
                    <Field
                        component={TextField}
                    />
                )}
            </Formik>
        </CreateUserContainer>
     );
}
 
export default CreateUser;