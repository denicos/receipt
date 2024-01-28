// Receipt.js

import React, { useState } from 'react';
import { Button, Box, Flex, Text, Image } from '@chakra-ui/react';
import html2canvas from 'html2canvas';

const Receipt = ({ id, generateImage, referenceNumber, setReferenceNumber, setElapsedTime, setIsModalOpen, setCanvasImage }) => {
    const generateNewImage = async () => {
        const newReferenceNumber = generateReferenceNumber();
        setReferenceNumber(newReferenceNumber);

        const copyTime = new Date();
        const intervalId = setInterval(() => {
            const elapsedMilliseconds = new Date() - copyTime;
            setElapsedTime(formatElapsedTime(elapsedMilliseconds));
        }, 1000);

        const element = document.getElementById(`receipt${id}`);

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

    return (
        <Box maxW='sm' id={`receipt${id}`} bg='#f2f2f2' p={5}>
            <Box>
                <Text fontSize={50} textAlign='center'>💵</Text>

                <Flex dir='row' alignItems='center' pb={3} justifyContent='center'>
                    <Box as='h4'>
                        <Text>
                            <span style={{ paddingRight: '5px' }}>SGD</span>
                            <strong style={{ fontSize: '50px', color: 'green' }}>15</strong>
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

            <Button variant='outline' bg='#26A9E0' p={5} size={'lg'} w={'100%'} onClick={generateNewImage}>
                Share
            </Button>
        </Box>
    );
};

export default Receipt;
