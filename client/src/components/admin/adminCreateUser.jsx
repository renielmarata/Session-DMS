import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Checkbox, Container, FormControl, List, ListItem, Stack, TextField, Typography } from "@mui/material";
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
            .max(40, 'maximum of 40 characters'),
        privilege: Yup.object({
            read_only: Yup.boolean(),
            create_file: Yup.boolean(),
            update_file: Yup.boolean(),
            delete_file: Yup.boolean(),
        })
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
                    privilege: {
                        read_only: true,
                        create_file: false,
                        update_file: false,
                        delete_file: false,
                    }
                }}
                validationSchema={userSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ isSubmitting, values, errors, handleChange, handleSubmit, touched }) => (
                    <Form>
                        <Stack direction='column' spacing={2}>
                            <Field
                                as={TextField}
                                name="firstname"
                                type="text"
                                label="firstname"
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                error={touched.firstname && Boolean(errors.firstname)}
                                helperText={touched.firstname && errors.firstname}
                            />

                            <Field
                                as={TextField}
                                name="lastname"
                                type="text"
                                label="lastname"
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                error={touched.lastname && Boolean(errors.lastname)}
                                helperText={touched.lastname && errors.lastname}
                            />

                            <Field
                                as={TextField}
                                name="suffix"
                                type="text"
                                label="suffix"
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                error={touched.suffix && Boolean(errors.suffix)}
                                helperText={touched.suffix && errors.suffix}
                            />

                            <Field
                                as={TextField}
                                name="role"
                                type="text"
                                label="role"
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                error={touched.role && Boolean(errors.role)}
                                helperText={touched.role && errors.role}
                            />

                                <List
                                    subheader={<Typography>Privileges</Typography>}>
                                    <FormControl>
                                        <ListItem>
                                            <label>
                                                <Field 
                                                    as={Checkbox}
                                                    name="privilege.read_only" 
                                                    onChange={handleChange}
                                                    checked={values.privilege.read_only}
                                                />
                                                read only
                                            </label>
                                        </ListItem>
                                    </FormControl>
                                    <FormControl>
                                        <ListItem>
                                            <label>
                                                <Field 
                                                    as={Checkbox}
                                                    name="privilege.create_file" 
                                                    onChange={handleChange} 
                                                />
                                                create file
                                            </label>
                                        </ListItem>
                                    </FormControl>
                                    <FormControl>
                                        <ListItem>
                                            <label>
                                                <Field 
                                                    as={Checkbox}
                                                    name="privilege.update_file" 
                                                    onChange={handleChange} 
                                                />
                                                update file
                                            </label>
                                        </ListItem>
                                    </FormControl>
                                    <FormControl>
                                        <ListItem>
                                            <label>
                                                <Field 
                                                    as={Checkbox}
                                                    name="privilege.delete_file" 
                                                    onChange={handleChange} 
                                                />
                                                delete file
                                            </label>
                                        </ListItem>
                                    </FormControl>
                                </List>

                                <Button
                                    type="submit"
                                    variant="contained"
                                >
                                    submit
                                </Button>

                            
                        </Stack>
                    </Form>
                )}
            </Formik>
        </CreateUserContainer>
     );
}
 
export default CreateUser;