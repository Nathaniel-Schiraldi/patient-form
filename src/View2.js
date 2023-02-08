import React from 'react';
import {useNavigate} from "react-router-dom";

import {Formik, Field} from 'formik';
import {Box, Button, Flex, FormControl, FormLabel, FormErrorMessage, Input, VStack} from "@chakra-ui/react";

import * as Yup from 'yup';


const View2 = () => {
  const navigate = useNavigate();
  return (
    <Flex bg="blue.100" align="center" justify="center" h="100vh"> 
      <Box bg="white" p={6} rounded="md" w="300px">
        <Formik
        
        initialValues={{ birthYear: '', birthMonth: '', birthDay: '', gender: '' , healthCard: ''}}
        validationSchema={Yup.object({
            
          birthYear: Yup.number()
            .max(2023, 'Must not be from future.')
            .min(1900, 'Must be above 1900.')
            .required('Required'),
            
          birthMonth: Yup.number()
            .max(12, 'Maxmimum of 12.')
            .min(1, 'Minimum of 1.')
            .required('Required'),
            
          birthDay: Yup.number()
            .max(31, 'Maxmimum of 31.')
            .min(1, 'Minimum of 1.')
            .required('Required'),
            
          gender: Yup.string()
            .required('Required')
            .matches(/(^(m|M)(ale|ALE)?$)|(^(f|F)(emale|EMALE)?$)|(^(o|O)(ther|THER)?$)/, "Invalid Gender (M, F, O)."),
            
          healthCard: Yup.string()
            .required("Health Card Number is Required.")
            .matches(/\d{10}[A-Z]{2}/, "Health Card Number must be in format '0123456789AB'.")
        })}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            localStorage.setItem("patientPersonalInfo", JSON.stringify(values));
            setSubmitting(false);
            navigate('/view3');
          }, 400);
        }}
      >
        {({handleSubmit, errors, touched}) => (
          <form onSubmit={handleSubmit} noValidate>
            <VStack spacing={4} align="flex-start">

                <FormControl isInvalid={errors.birthYear && touched.birthYear} isRequired>
                  <FormLabel htmlFor="birthYear">Year of Birth</FormLabel>
                  <Field as={Input} variant="filled" name ="birthYear" type="text" />
                  <FormErrorMessage name="birthYear">{errors.birthYear}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.birthMonth && touched.birthMonth} isRequired>
                  <FormLabel htmlFor="birthMonth">Month of Birth</FormLabel>
                  <Field as={Input} variant="filled" name ="birthMonth" type="text" />
                  <FormErrorMessage name="birthMonth">{errors.birthMonth}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.birthDay && touched.birthDay} isRequired>
                  <FormLabel htmlFor="birthDay">Day of Birth</FormLabel>
                  <Field as={Input} variant="filled" name ="birthDay" type="text" />
                  <FormErrorMessage name="birthDay">{errors.birthDay}</FormErrorMessage>
                </FormControl>
              
                <FormControl isInvalid={errors.healthCard && touched.healthCard} isRequired>
                  <FormLabel htmlFor="healthCard">Health Card Number</FormLabel>
                  <Field as={Input} variant="filled" name ="healthCard" type="text" />
                  <FormErrorMessage name="healthCard">{errors.healthCard}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.gender && touched.gender} isRequired>
                  <FormLabel htmlFor="gender">Gender</FormLabel>
                  <Field as={Input} variant="filled" name ="gender" type="text" />
                  <FormErrorMessage name="gender">{errors.gender}</FormErrorMessage>
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

export default View2;