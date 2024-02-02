import { useState, useEffect, useRef } from 'react';
import './App.css';
import { ClipboardItem } from 'clipboard-polyfill';
import html2canvas from 'html2canvas';
import {
  Container, Grid,
  Box, Text, Flex,
  Image, Button,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
} from '@chakra-ui/react';

const generateReferenceNumber = () => {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 10000);
  return `${timestamp}-${randomNum}`;
};

const receipts = [
  {
    id: 'receipt1',
    type: 'type1',
    date: '25 Dec',
    amount: '15.00',
    description: 'Incoming PayNow Ref',
    payer: 'ONG WEI XIANG KIERNAN OTHR Transfer - Mobile',
    transferType: 'FAST / PAYNow Transfer',
  },
  {
    id: 'receipt2',
    type: 'type2',
    date: '25 Dec',
    amount: '15.00',
    title: 'Transfer Alert',
    payer: 'ONG WEIXIANG KIERNAN',
    transferDetails: 'SGD 15.00 on 25 Dec 12:34 (SGT) from ONG WEIXIANG KIERNAN to your account via PayNow',
  },
  {
    id: 'receipt3',
    type: 'type1',
    date: '27 Dec',
    amount: '15.00',
    description: 'Incoming PayNow Ref',
    payer: 'LAU CHUN KIT OTHR PayNow Transfer',
    transferType: 'Advice',
  },
  {
    id: 'receipt4',
    type: 'type3',
    date: 'December 2023',
    amount: '38.00',
    payee: 'CHONG SEI KAI',
    serviceFee: '0.00',
    purpose: 'Others',
    remarks: 'Transfer via PayNow',
    referenceID: '',
    successMessage: 'Transaction Successful! To check on the status of your transaction, please go to View Status',
  },
  {
    id: 'receipt5',
    type: 'type1',
    date: '25 Dec',
    amount: '15.00',
    description: 'Incoming PayNow Ref',
    payer: 'ONG WEI XIANG KIERNAN OTHR Transfer - Mobile',
    transferType: 'FAST / PAYNow Transfer',
  },
];

const Receipt = ({ receipt, setIsModalOpen }) => {
  const [referenceNumber, setReferenceNumber] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [canvasImage, setCanvasImage] = useState(null);
  const receiptRef = useRef(null);

  useEffect(() => {
    setReferenceNumber(generateReferenceNumber());
    const storedStartTime = localStorage.getItem(`copyStartTime_${receipt.id}`);

    if (storedStartTime) {
      const copyTime = new Date(storedStartTime);
      const elapsedMilliseconds = new Date() - copyTime;
      setElapsedTime(formatElapsedTime(elapsedMilliseconds));

      const id = setInterval(() => {
        const elapsedMilliseconds = new Date() - copyTime;
        setElapsedTime(formatElapsedTime(elapsedMilliseconds));
      }, 1000);

      setIntervalId(id);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [receipt.id]);

  const generateImage = async () => {
    const newReferenceNumber = generateReferenceNumber();
    setReferenceNumber(newReferenceNumber);

    const copyTime = new Date();
    localStorage.setItem(`copyStartTime_${receipt.id}`, copyTime.toISOString());

    const id = setInterval(() => {
      const elapsedMilliseconds = new Date() - copyTime;
      setElapsedTime(formatElapsedTime(elapsedMilliseconds));
    }, 1000);

    setIntervalId(id);

    try {
      if (receiptRef.current) {
        const canvas = await html2canvas(receiptRef.current);
        if (canvas) {
          setCanvasImage(canvas.toDataURL('image/png'));
          setIsModalOpen(true);
        } else {
          console.error('html2canvas returned null');
        }
      }
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  const formatElapsedTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m ${seconds}s`;
  };


  return (
    <Box key={receipt.id}>
      <Box maxW='sm' onClick={generateImage} style={{ cursor: 'pointer' }} ref={receiptRef} bg='#f2f2f2' p={5}>
        {receipt.type === 'type1' && (
          <>
            <Box>
              <Text fontSize={50} textAlign='center'>💵</Text>
              <Flex dir='row' alignItems='center' pb={3} justifyContent='center'>
                <Box as='h4'>
                  <Text>
                    <span style={{ paddingRight: '5px' }}>SGD</span>
                    <strong style={{ fontSize: '50px', color: 'green' }}>
                      {receipt.amount}
                    </strong>
                    <strong style={{ color: 'green', fontSize: '24px' }}>.00</strong>
                  </Text>
                </Box>
              </Flex>
              <Text pt={3} pb={3} fontSize={14} color='grey' textAlign='center'>
                Today {receipt.date}
              </Text>
            </Box>
            <Box textAlign='left' bg='white' p={5} boxShadow='var(--chakra-shadows-md)' borderRadius={3}>
              <Text pt={5} pb={3} fontSize={14} color='grey'>
                Description
              </Text>
              <Text fontWeight='normal'>
                {receipt.description} {referenceNumber} From: {receipt.payer}
              </Text>
              {receipt.transferType && (
                <>
                  <Text pt={5} pb={2} fontSize={14} color='grey'>
                    Transfer Type
                  </Text>
                  <Text fontWeight='normal' pb={2}>
                    {receipt.transferType}
                  </Text>
                </>
              )}
            </Box>
          </>
        )}
        {receipt.type === 'type2' && (
          <>
            <Box textAlign='left' bg='white' p={5} boxShadow='var(--chakra-shadows-md)' borderRadius={3}>
              <Image maxW={'50%'} src='./brand-left.png' alt='Bank logo' />
              <Text color='#c00' fontSize='20px' pt={8} pb={8}>
                {receipt.title}
              </Text>
              <Text>{receipt.transferDetails}</Text>
            </Box>
          </>
        )}
        {receipt.type === 'type3' && (
          <>
            <Box>
              <Box bg='#099157' borderTopLeftRadius={5} borderTopRightRadius={5} borderBottom={'2px solid #ffdf00'} color='white' pb={3}>
                <Box mr={5}>
                  <Text p={1} pt={5} textAlign='left' fontSize={14}>
                    Transfer To <strong>{receipt.payee}</strong>
                  </Text>
                  <Text p={1} textAlign='left' fontSize={14}>
                    SGD {receipt.amount}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box textAlign='left' bg='white' p={5} borderRadius={3}>
              <Text fontWeight='normal'>Service Fee</Text>
              <Text pb={3} fontSize={14} color='grey'>
                SGD {receipt.serviceFee}
              </Text>
              <Text fontWeight='normal'>Purpose of Transfer</Text>
              <Text pb={3} fontSize={14} color='grey'>
                {receipt.purpose}
              </Text>
              <Text fontWeight='normal'>Remarks</Text>
              <Text pb={3} fontSize={14} color='grey'>
                {receipt.remarks}
              </Text>
              <Text fontWeight='normal'>Effective Date</Text>
              <Text pb={3} fontSize={14} color='grey'>
                Today {receipt.date}
              </Text>
              <Text fontWeight='normal'>Reference ID</Text>
              <Text pt={5} pb={3} fontSize={14} color='grey'>
                {referenceNumber}
              </Text>
            </Box>
            <Box bg={'#ffdf00'}>
              <Text fontWeight='normal' p={10} textAlign='left'>
                {receipt.successMessage}
              </Text>
            </Box>
          </>
        )}
        <Container maxW='sm'>
          <Box>
            <Text fontSize={15} mt={5} p={5}>
              Time elapsed since copy: {elapsedTime}
            </Text>
          </Box>
          <Box alignSelf='right'>
            <Button variant='outline' bg='#26A9E0' p={5} size={'lg'} w={'100%'} onClick={generateImage}>
              Share
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

function App() {
  const [canvasImage, setCanvasImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={8}>
        {receipts.map((receipt) => (
          <Receipt key={receipt.id} receipt={receipt} setIsModalOpen={setIsModalOpen} />
        ))}
      </Grid>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Receipt Copy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={canvasImage} alt="Receipt Screenshot" />
            <Flex justifyContent="center" mt={4}>
              <Text>Right-click to copy</Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
