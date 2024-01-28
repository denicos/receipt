import { useState, useEffect } from 'react'
import './App.css'

import { ClipboardItem } from 'clipboard-polyfill';
import html2canvas from 'html2canvas';


import {
  Container, Grid,
  Box, Text, Flex,
  CardBody, Image, Button, Divider,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
} from '@chakra-ui/react';


const generateReferenceNumber = () => {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 10000);
  return `${timestamp}-${randomNum}`;
};


function App() {
  const [referenceNumber, setReferenceNumber] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [canvasImage, setCanvasImage] = useState(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const generateImage1 = async () => {
    const newReferenceNumber = generateReferenceNumber();
    setReferenceNumber(newReferenceNumber);

    const copyTime = new Date();
    const intervalId = setInterval(() => {
      const elapsedMilliseconds = new Date() - copyTime;
      setElapsedTime(formatElapsedTime(elapsedMilliseconds));
    }, 1000);

    const element = document.getElementById('receipt');

    try {
      const canvas = await html2canvas(element);
      setCanvasImage(canvas.toDataURL('image/png'));


      setIsModalOpen(true);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      clearInterval(intervalId);
      setElapsedTime(null);
    }
  };

  const generateImage2 = async () => {
    const newReferenceNumber = generateReferenceNumber();
    setReferenceNumber(newReferenceNumber);

    const copyTime = new Date();
    const intervalId = setInterval(() => {
      const elapsedMilliseconds = new Date() - copyTime;
      setElapsedTime(formatElapsedTime(elapsedMilliseconds));
    }, 1000);

    const element = document.getElementById('receipt1');

    try {
      const canvas = await html2canvas(element);
      setCanvasImage(canvas.toDataURL('image/png'));


      setIsModalOpen(true);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      clearInterval(intervalId);
      setElapsedTime(null);
    }
  };

  const generateImage3 = async () => {
    const newReferenceNumber = generateReferenceNumber();
    setReferenceNumber(newReferenceNumber);

    const copyTime = new Date();
    const intervalId = setInterval(() => {
      const elapsedMilliseconds = new Date() - copyTime;
      setElapsedTime(formatElapsedTime(elapsedMilliseconds));
    }, 1000);

    const element = document.getElementById('receipt2');

    try {
      const canvas = await html2canvas(element);
      setCanvasImage(canvas.toDataURL('image/png'));


      setIsModalOpen(true);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      clearInterval(intervalId);
      setElapsedTime(null);
    }
  };

  const generateImage4 = async () => {
    const newReferenceNumber = generateReferenceNumber();
    setReferenceNumber(newReferenceNumber);

    const copyTime = new Date();
    const intervalId = setInterval(() => {
      const elapsedMilliseconds = new Date() - copyTime;
      setElapsedTime(formatElapsedTime(elapsedMilliseconds));
    }, 1000);

    const element = document.getElementById('receipt3');

    try {
      const canvas = await html2canvas(element);
      setCanvasImage(canvas.toDataURL('image/png'));


      setIsModalOpen(true);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      clearInterval(intervalId);
      setElapsedTime(null);
    }
  };

  const generateImage5 = async () => {
    const newReferenceNumber = generateReferenceNumber();
    setReferenceNumber(newReferenceNumber);

    const copyTime = new Date();
    const intervalId = setInterval(() => {
      const elapsedMilliseconds = new Date() - copyTime;
      setElapsedTime(formatElapsedTime(elapsedMilliseconds));
    }, 1000);

    const element = document.getElementById('receipt4');

    try {
      const canvas = await html2canvas(element);
      setCanvasImage(canvas.toDataURL('image/png'));


      setIsModalOpen(true);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      clearInterval(intervalId);
      setElapsedTime(null);
    }
  };



  const formatElapsedTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            <Container maxW='sm'>

              <Box>
                <Text fontSize={15} mt={5} p={5}>
                  Time elapsed since copy:
                </Text>
              </Box>
              <Box alignSelf='right'  >
                <Button variant='outline' bg='#26A9E0' p={5} size={'lg'} w={'100%'} onClick={generateImage1}>Share</Button>
              </Box>


            </Container> 
          </Box>
          
        
        </Box>


        {/* Another receipt */}
        <Box>


          <Box maxW='sm' id='receipt1' bg='#f2f2f2' p={5}>



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
                Yours faithfully <br />
                DBS Bank Ltd
              </Text>

              <Container maxW='sm'>

                <Box>
                  <Text fontSize={15} mt={5} p={5}>
                    Time elapsed since copy:
                  </Text>
                </Box>
                <Box alignSelf='right'  >
                  <Button variant='outline' bg='#26A9E0' size={'lg'} w={'100%'} onClick={generateImage2}>Share</Button>
                </Box>
              </Container>
            </Box>
          </Box>
         
        </Box>


        {/* Another receipt */}
        <Box>
          <Box>


            <Box maxW='sm' id='receipt2' bg='#f2f2f2' p={5}>
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

                <Container maxW='sm'>

                  <Box>
                    <Text fontSize={15} mt={5} p={5}>
                      Time elapsed since copy:
                    </Text>
                  </Box>
                  <Box alignSelf='right'  >
                    <Button variant='outline' bg='#26A9E0' size={'lg'} w={'100%'} onClick={generateImage3}>Share</Button>
                  </Box>
                </Container>
              </Box>
            </Box>
            
          </Box>
        </Box>

        <Box>


          <Box maxW='sm' id='receipt3' >
            <Box >


              <Box bg='#099157' borderTopLeftRadius={5} borderTopRightRadius={5} borderBottom={'2px solid #ffdf00'} color='white' pb={3}>
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

            <Box textAlign='left' bg='white' p={5} borderRadius={3}>
              <Text fontWeight='normal'>
                Service Fee
              </Text>
              <Text pb={3} fontSize={14} color='grey'>
                SGD 0.00
              </Text>
              <Text fontWeight='normal'>
                Purpose of Transfer
              </Text>
              <Text pb={3} fontSize={14} color='grey'>
                Others
              </Text>

              <Text fontWeight='normal'>
                Remarks
              </Text>
              <Text pb={3} fontSize={14} color='grey'>
                Transfer via PayNow
              </Text>
              <Text fontWeight='normal'>
                Effective Date
              </Text>
              <Text pb={3} fontSize={14} color='grey'>
                Today December 2023
              </Text>
              <Text fontWeight='normal'>
                Reference ID
              </Text>
              <Text pt={5} pb={3} fontSize={14} color='grey'>
                {referenceNumber}
              </Text>

            </Box>
            <Box bg={'#ffdf00'}>
              <Text fontWeight='normal' p={10} textAlign='left'>
                Transaction Successful! To check on status of your transaction, please go to <strong>View Status</strong>
              </Text>
            </Box>
            <Container maxW='sm'>

              <Box>
                <Text fontSize={15} mt={5} p={5}>
                  Time elapsed since copy:
                </Text>
              </Box>
              <Box alignSelf='right'  >
                <Button variant='outline' bg='#26A9E0' size={'lg'} w={'100%'} onClick={generateImage4}>Share</Button>
              </Box>
            </Container>
          </Box>
         
        </Box>


        <Box>


          <Box maxW='sm' bg='#f2f2f2' id='receipt4' p={5}>
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
            <Container maxW='sm'>

              <Box>
                <Text fontSize={15} mt={5} p={5}>
                  Time elapsed since copy:
                </Text>
              </Box>
              <Box alignSelf='right'  >
                <Button variant='outline' bg='#26A9E0' size={'lg'} w={'100%'} onClick={generateImage5}>Share</Button>
              </Box>
            </Container>
          </Box>
         
        </Box>
      </Grid>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Receipt Copy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={canvasImage} alt="Receipt Screenshot" />
            <Flex justifyContent="center" mt={4}>
              <Text>Right click to copy</Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default App