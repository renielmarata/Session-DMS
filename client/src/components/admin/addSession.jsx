import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, FormControl, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { addSessionService } from '../../services';

registerPlugin(FilePondPluginFileValidateType);

const AddSessionContainer = styled(Box)(({ theme }) => ({
    border: '2px solid yellow',
    padding: '100px',
    width: '100%',
}));

const PageHeader = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins',
    fontSize: '40px',
    fontWeight: '800',
}));

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    sessionType: Yup.string().required('Session type is required'),
    sessionNumber: Yup.string().required('Session number is required'),
    date: Yup.date().required('Date is required'),
    title: Yup.string().required('Title is required'),
    file: Yup.array().min(1, 'File is required').required('File is required'),
});

const AddSession = () => {
    const [sessionType, setSessionType] = React.useState('regular');
    const [file, setFile] = React.useState([]);

    const handleSessionTypeChange = (event) => {
        setSessionType(event.target.value);
    };

    return (
        <AddSessionContainer disableGutters maxWidth="xxl">
            <PageHeader>
                Add Session
            </PageHeader>

            <Formik
                initialValues={{
                    sessionType: 'regular',
                    sessionNumber: '',
                    date: '',
                    title: '',
                    file: [],
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ errors, touched, handleChange, setFieldValue }) => (
                    <Form>
                        <FormControl fullWidth margin="normal">
                            <Field
                                as={TextField}
                                name="sessionType"
                                label="Session Type"
                                select
                                value={sessionType}
                                onChange={ async (event) => {
                                    handleSessionTypeChange(event);
                                    handleChange(event);
                                }}
                                error={touched.sessionType && Boolean(errors.sessionType)}
                                helperText={touched.sessionType && errors.sessionType}
                            >
                                <MenuItem value="regular">Regular</MenuItem>
                                <MenuItem value="special">Special</MenuItem>
                            </Field>
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <Field
                                as={TextField}
                                name="sessionNumber"
                                label="Session Number"
                                type="text"
                                error={touched.sessionNumber && Boolean(errors.sessionNumber)}
                                helperText={touched.sessionNumber && errors.sessionNumber}
                            />
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <Field
                                as={TextField}
                                name="date"
                                label="Date"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                error={touched.date && Boolean(errors.date)}
                                helperText={touched.date && errors.date}
                            />
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <Field
                                as={TextField}
                                name="title"
                                label="Title"
                                type="text"
                                error={touched.title && Boolean(errors.title)}
                                helperText={touched.title && errors.title}
                            />
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <FilePond
                                files={file}
                                onupdatefiles={(fileItems) => {
                                    setFile(fileItems.map(fileItem => fileItem.file));
                                    setFieldValue('file', fileItems.map(fileItem => fileItem.file));
                                }}
                                allowMultiple={true}
                                acceptedFileTypes={['application/pdf', 'image/jpeg']}
                                labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
                            />
                            {touched.file && errors.file && (
                                <Typography color="error" variant="body2">
                                    {errors.file}
                                </Typography>
                            )}
                        </FormControl>

                        <Stack direction='row' spacing={2}>
                            <FormControl>
                                <Button
                                    type="submit"
                                    variant="contained"
                                >
                                    Discard
                                </Button>
                            </FormControl>

                            <FormControl>
                                <Button
                                    type="submit"
                                    variant="contained"
                                >
                                    Submit
                                </Button>
                            </FormControl>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </AddSessionContainer>
    );
};

export default AddSession;
