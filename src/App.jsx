import { useState } from 'react'
import './App.css'
import html2pdf from 'html2pdf.js';
import { Heading, Container, Center, Card, Box, Text, CardHeader, Flex, CardBody, CardFooter, Button, Divider } from '@chakra-ui/react';


const generateReferenceNumber = () => {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 10000);
  return `${timestamp}-${randomNum}`;
};


function App() {
  const [referenceNumber, setReferenceNumber] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);

  const handleCopyReceipt = () => {
    const newReferenceNumber = generateReferenceNumber();
    setReferenceNumber(newReferenceNumber);
    //working on time display.
    const copyTime = new Date();
    setInterval(() => {
      const elapsedMilliseconds = new Date() - copyTime;
      setElapsedTime(formatElapsedTime(elapsedMilliseconds));
    }, 1000);

    generatePDF();
  };

  const formatElapsedTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const generatePDF = () => {
    const content = document.getElementById('receipt');
    const options = {
      margin: 5,
      filename: 'receipt.pdf',
      image: { type: 'jpeg', quality: 0.98},
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'mm', format: 'a6', orientation: 'portrait' },
    };

    html2pdf().from(content).set(options).save();
  };

  return (
    <>
      <Container maxW='lg' id='receipt' >
        <Card border='1px solid grey' borderRadius={5} >

          <CardBody>
            <Box alignItems='center' justifyContent='space-between' pb={5}>

              <Heading as='h4' pt={5}>
                Amount:  $15.00
              </Heading>
              <Text mt={5} pt={5} fontSize={12} color='grey'>
                Date: Today 25 Dec
              </Text>

            </Box>
          </CardBody>


          <CardBody textAlign='left'>
            <Text pt={5} fontSize={12} color='grey'>
              Description
            </Text>
            <Text fontWeight='bold'>
              Incoming PayNow
            </Text>
            <Text pb={5}>
              Ref: {referenceNumber}
            </Text>
            <Divider />
            <Text pt={5}>
              From:
            </Text>
            <Text fontWeight='bold'>
              ONG WEI XIANG KIERNAN OTHR
            </Text>
            <Text pb={5}>
              Transfer - Mobile
            </Text>
            <Divider />
            <Text pt={5} fontSize={12} color='grey'>
              Transfer Type
            </Text>
            <Text fontWeight='bold'>
              FAST / PAYNow Transfer
            </Text>


          </CardBody>



        </Card>




      </Container>
      <Container maxW='lg'>
        <Flex dir='row' alignItems='center' placeContent='space-between' p={5}>
          <Box>
            <Text fontSize={15}>
              Time elapsed since copy: {elapsedTime}
            </Text>
          </Box>
          <Box alignSelf='right'>
            <Button variant='outline' onClick={handleCopyReceipt}>Copy</Button>
          </Box>

        </Flex>
      </Container>

     
    </>
  );
};

export default App


