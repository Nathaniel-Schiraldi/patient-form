import React from 'react';

import {Flex, Table, Tbody, VStack, Box, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'

function createPatient() {
    let patientName = localStorage.getItem("patientName");
    patientName = patientName.substring(0, patientName.length-1) + ",";
    let patientPersonalInfo = localStorage.getItem("patientPersonalInfo").replace("{", "");
    // string concatenated (merged together) and parsed
    const patientInfo = JSON.parse(patientName + patientPersonalInfo)
    return patientInfo;
}

const View3 = () => {
  const patientInfo = createPatient();
  return (
    <Flex bg="blue.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w="500px">
          
          <VStack>
            <TableContainer>
                  
                  <Table variant='simple'>
                    
                    <TableCaption placement="top" fontWeight='bold' marginRight='22' marginBottom='22' fontSize="32">
                      Summary
                    </TableCaption>

                    <Tbody>
                      
                      <Tr fontWeight='bold'>
                        <Th>First Name</Th>
                        <Td>{patientInfo["firstName"]}</Td>
                      </Tr>

                      <Tr fontWeight='bold'>
                        <Th>Last Name</Th>
                        <Td>{patientInfo["lastName"]}</Td>
                      </Tr>

                      <Tr fontWeight='bold'>
                        <Th>Date of Birth</Th>
                        <Td>{patientInfo["birthDay"] + "/" + patientInfo["birthMonth"] + "/" + patientInfo["birthYear"]}</Td>
                      </Tr>

                      <Tr fontWeight='bold'>
                        <Th>Gender</Th>
                        <Td>{patientInfo["gender"]}</Td>
                      </Tr>

                      <Tr fontWeight='bold'>
                        <Th>Health Card</Th>
                        <Td>{patientInfo["healthCard"]}</Td>
                      </Tr>
                      
                    </Tbody>
                  </Table>
              
              </TableContainer>
            </VStack>
          
          </Box>
      </Flex>
  );
};

export default View3;