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
    const content = document.getElementById('card');
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
      <Container maxW='lg'>
        <Card >
          <CardHeader bg='#1850bc' color='white' p={25} borderTopRightRadius={10} borderTopLeftRadius={10}>
            <Flex dir='row' alignItems='center' justifyContent='space-between' pb={5}>
              <Box>
                <Text textAlign='left'>
                  Amount in
                </Text>
              </Box>
              <Box>
                <Text fontSize={14} fontWeight='bold'>
                  Reference No. {referenceNumber}
                </Text>
              </Box>

            </Flex>
            <Flex dir='row' alignItems='center' justifyContent='space-between'>
              <Box>
                <Text fontSize={20} fontWeight='bold'>
                  SGD
                </Text>
              </Box>
              <Box>
                <Text fontSize={20} fontWeight='bold'>
                  58.00
                </Text>
              </Box>

            </Flex>

          </CardHeader>
          <CardBody textAlign='left'>
            <Text>
              From
            </Text>
            <Text fontWeight='bold'>
              POSB PassBook Savings Account
            </Text>
            <Text pb={5}>
              189-63487-0
            </Text>
            <Divider />
            <Text pt={5}>
              To
            </Text>
            <Text fontWeight='bold'>
              ANG JIN YI
            </Text>
            <Text>
              Mobile: +6584696523
            </Text>
          </CardBody>

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

        </Card>




      </Container>

      <div className='container'>

        <div className="card" id='card'>

          <p>Reference Number: {referenceNumber}</p>
          <h1>$75.00</h1>
          <p>Paid 15 Jan, 2024</p>

          <hr />
          <div>

          </div>




        </div>


      </div>
      {elapsedTime && <p>Time elapsed since copy: {elapsedTime}</p>}
      <button style={{ color: 'white', background: 'rgb(25, 97, 169)' }} onClick={handleCopyReceipt}>Copy Receipt</button>

    </>
  );
};

export default App


