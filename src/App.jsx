import { useState } from 'react'
import './App.css'
import html2pdf from 'html2pdf.js';
import {
  Container, Grid,
  Box, Text, Flex, CardBody, Image, CardFooter, Button, Divider
} from '@chakra-ui/react';


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
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a6', orientation: 'portrait' },
    };

    html2pdf().from(content).set(options).save();
  };

  return (
    <>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={8}>

        <Box>


          <Box maxW='sm' id='receipt' bg='#f2f2f2' p={5}>
            <Box >
              <Text fontSize={50} textAlign='center'>💵</Text>

              <Flex dir='row' alignItems='center' pb={3} justifyContent='center'>

                <Box as='h4'>
                  <Text>  <span style={{ paddingRight: '5px' }}>SGD</span>
                    <strong style={{ fontSize: '50px', color: 'green' }}>
                      15</strong>
                    <strong style={{ color: 'green', fontSize: '24px' }}>.00</strong>
                  </Text>

                </Box>


              </Flex>
              <Text pt={3} pb={3} fontSize={14} color='grey' textAlign='center'>
                Today 25 Dec
              </Text>
            </Box>

            <Box textAlign='left' bg='white' p={5} boxShadow='var(--chakra-shadows-md)' borderRadius={3}>
              <Text pt={5} pb={3} fontSize={14} color='grey'>
                Description
              </Text>
              <Text fontWeight='normal'>
                Incoming PayNow Ref {referenceNumber} From: ONG WEI XIANG KIERNAN OTHR Tranfer - Mobile
              </Text>


              <Text pt={5} pb={2} fontSize={14} color='grey'>
                Transfer Type
              </Text>
              <Text fontWeight='normal' pb={2}>
                FAST / PAYNow Transfer
              </Text>


            </Box>
          </Box>
          <Container maxW='sm'>

            <Box>
              <Text fontSize={15} mt={5} p={5}>
                Time elapsed since copy:
              </Text>
            </Box>
            <Box alignSelf='right'  >
              <Button variant='outline' bg='#26A9E0' p={5} size={'lg'} w={'sm'} onClick={handleCopyReceipt}>Copy</Button>
            </Box>


          </Container>

        </Box>


        {/* Another receipt */}
        <Box>


          <Box maxW='sm' id='receipt' bg='#f2f2f2' p={5}>



            <Box textAlign='left' bg='white' p={5} boxShadow='var(--chakra-shadows-md)' borderRadius={3}>
              <Image maxW={'50%'} src='./brand-left.png' alt='Bank logo' />

              <Text color='#c00' fontSize='20px' pt={8} pb={8}>Transfer Alert</Text>
              <Text>Dear sir/ madam,</Text>
              <Text pt={5} pb={3} fontSize={14} color='grey'>
               
              </Text>
              <Text fontWeight='normal'>
               You have received SGD 15.00 on 25 Dec 12:34 (SGT) from ONG WEIXIANG KIERNAN to your account via PayNow
              </Text>


              <Text pt={5} pb={2} fontSize={14} color='grey'>
               
              </Text>
              <Text fontWeight='normal' pb={5}>
                Thank you for banking with us.
              </Text>

              <Text fontWeight='normal' pb={5}>
                Yours faithfully <br/>
                DBS Bank Ltd
              </Text>


            </Box>
          </Box>
          <Container maxW='sm'>

            <Box>
              <Text fontSize={15} mt={5} p={5}>
                Time elapsed since copy:
              </Text>
            </Box>
            <Box alignSelf='right'  >
              <Button variant='outline' bg='#26A9E0' size={'lg'} w={'sm'} onClick={handleCopyReceipt}>Copy</Button>
            </Box>
          </Container>
        </Box>


        {/* Another receipt */}
        <Box>
          <Box>


            <Box maxW='sm' id='receipt' bg='#f2f2f2' p={5}>
              <Box >
                <Text fontSize={50} textAlign='center'>💵</Text>

                <Flex dir='row' alignItems='center' pb={3} justifyContent='center'>

                  <Box as='h4'>
                    <Text>  <span style={{ paddingRight: '5px' }}>SGD</span>
                      <strong style={{ fontSize: '50px', color: 'green' }}>
                        15</strong>
                      <strong style={{ color: 'green', fontSize: '24px' }}>.00</strong>
                    </Text>

                  </Box>


                </Flex>
                <Text pt={3} pb={3} fontSize={14} color='grey' textAlign='center'>
                  Today 27 Dec
                </Text>
              </Box>

              <Box textAlign='left' bg='white' p={5} boxShadow='var(--chakra-shadows-md)' borderRadius={3}>
                <Text pt={5} pb={3} fontSize={14} color='grey'>
                  Description
                </Text>
                <Text fontWeight='normal'>
                  ICTIncoming PayNow Ref From: LAU CHUN KIT OTHR PayNow Transfer 
                </Text>


                <Text pt={5} pb={2} fontSize={14} color='grey'>
                  Transfer Type
                </Text>
                <Text fontWeight='normal' pb={2}>
                  Advice
                </Text>


              </Box>
            </Box>
            <Container maxW='sm'>

              <Box>
                <Text fontSize={15} mt={5} p={5}>
                  Time elapsed since copy:
                </Text>
              </Box>
              <Box alignSelf='right'  >
                <Button variant='outline' bg='#26A9E0' size={'lg'} w={'sm'} onClick={handleCopyReceipt}>Copy</Button>
              </Box>
            </Container>
          </Box>
        </Box>

        <Box>


          <Box maxW='sm' id='receipt'  p={5}>
            <Box >
           

              <Box bg='#099157' borderTopLeftRadius={5} borderTopRightRadius={5} borderBottom={'2px solid yellow'} color='white' pb={3}>
                <Box mr={5}>
                <Text p={1} pt={5} textAlign='left' fontSize={14}>
                    Transfer To <strong>CHONG SEI KAI</strong> 
                </Text>
                <Text p={1} textAlign='left' fontSize={14}>
                  +6598740165
                </Text>
                <Text p={1} textAlign='left' fontSize={14}>
                  SGD 38.00
                  </Text>
                </Box>

              </Box>
             
            </Box>

            <Box textAlign='left' bg='white' p={5} boxShadow='var(--chakra-shadows-md)' borderRadius={3}>
              <Text fontWeight='normal'>
                Service Fee
              </Text>
              <Text pt={5} pb={3} fontSize={14} color='grey'>
                SGD 0.00
              </Text>
              <Text fontWeight='normal'>
                Purpose of Transfer
              </Text>
              <Text pt={5} pb={3} fontSize={14} color='grey'>
               Others
              </Text>
            
              <Text fontWeight='normal'>
            Remarks
              </Text>
              <Text pt={5} pb={3} fontSize={14} color='grey'>
                Transfer via PayNow
              </Text>
              <Text fontWeight='normal'>
                Effective Date
              </Text>
              <Text pt={5} pb={3} fontSize={14} color='grey'>
                Today December 2023
              </Text>
              <Text fontWeight='normal'>
               Reference ID
              </Text>
              <Text pt={5} pb={3} fontSize={14} color='grey'>
               {referenceNumber}
              </Text>

            </Box>
          </Box>
          <Container maxW='sm'>

            <Box>
              <Text fontSize={15} mt={5} p={5}>
                Time elapsed since copy:
              </Text>
            </Box>
            <Box alignSelf='right'  >
              <Button variant='outline' bg='#26A9E0' size={'lg'} w={'sm'} onClick={handleCopyReceipt}>Copy</Button>
            </Box>
          </Container>
        </Box>


        <Box>


          <Box maxW='sm' id='receipt' bg='#f2f2f2' p={5}>
            <Box >
              <Text fontSize={50} textAlign='center'>💵</Text>

              <Flex dir='row' alignItems='center' pb={3} justifyContent='center'>

                <Box as='h4'>
                  <Text>  <span style={{ paddingRight: '5px' }}>SGD</span>
                    <strong style={{ fontSize: '50px', color: 'green' }}>
                      15</strong>
                    <strong style={{ color: 'green', fontSize: '24px' }}>.00</strong>
                  </Text>

                </Box>


              </Flex>
              <Text pt={3} pb={3} fontSize={14} color='grey' textAlign='center'>
                Today 25 Dec
              </Text>
            </Box>

            <Box textAlign='left' bg='white' p={5} boxShadow='var(--chakra-shadows-md)' borderRadius={3}>
              <Text pt={5} pb={3} fontSize={14} color='grey'>
                Description
              </Text>
              <Text fontWeight='normal'>
                Incoming PayNow Ref From: ONG WEI XIANG KIERNAN OTHR Tranfer - Mobile
              </Text>


              <Text pt={5} pb={2} fontSize={14} color='grey'>
                Transfer Type
              </Text>
              <Text fontWeight='normal' pb={2}>
                FAST / PAYNow Transfer
              </Text>


            </Box>
          </Box>
          <Container maxW='sm'>

            <Box>
              <Text fontSize={15} mt={5} p={5}>
                Time elapsed since copy:
              </Text>
            </Box>
            <Box alignSelf='right'  >
              <Button variant='outline' bg='#26A9E0' size={'lg'} w={'sm'} onClick={handleCopyReceipt}>Copy</Button>
            </Box>
          </Container>
        </Box>
      </Grid>

    </>
  );
};

export default App


