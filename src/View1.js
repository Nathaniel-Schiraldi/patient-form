import React from 'react';
import {useNavigate} from "react-router-dom";

import {Formik, Field} from 'formik';
import {Box, Button, Flex, FormControl, FormLabel, FormErrorMessage, Input, VStack} from "@chakra-ui/react";

import * as Yup from 'yup';

const View1 = () => {
  const navigate = useNavigate();
  return (
    // chakra components used for structure and styling.
    // 100% viewport height
    <Flex bg="blue.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w="300px">
          <Formik 
          // initialValues prop, validationSchema prop, and onSubmit prop for Formik component.  
          initialValues={{ firstName: '', lastName: ''}}
          // yup used for validation schema
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(20, 'Maximum of 20 characters.')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Maximum of 20 characters.')
              .required('Required'),
          })}
          // JSON values converted to string and stored in local storage.
          // setSubmitting - finish form submission cycle
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                localStorage.setItem("patientName", JSON.stringify(values));
                setSubmitting(false);
                navigate('/view2');
            }, 400);
          }}
        >
            {({handleSubmit, errors, touched}) => (
          // Fired when submission is triggered.
          // Formik used for form input fields. (VStack - stacks vertically)
          // chakura handles input ui.
          <form onSubmit={handleSubmit} noValidate>
              <VStack spacing={4} align="flex-start">
                
                <FormControl isInvalid={errors.firstName && touched.firstName} isRequired>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Field as={Input} variant="filled" id="firstName" name="firstName" type="text" />
                  <FormErrorMessage name="firstName">{errors.firstName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.lastName && touched.lastName} isRequired>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Field as={Input} variant="filled" name="lastName" type="text"/>
                  <FormErrorMessage name="lastName">{errors.lastName}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <Button type="submit" colorScheme="blue" width="full">Submit</Button>
                </FormControl>

            </VStack>
          </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default View1;
