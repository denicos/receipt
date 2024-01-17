import { useState } from 'react'
import './App.css'
import html2pdf from 'html2pdf.js';


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
       margin: 10,
       padding:5,
      filename: 'receipt.pdf',
      image: { type: 'jpeg', quality: 0.98},
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'mm', format: 'a6', orientation: 'portrait' },
    };

    html2pdf().from(content).set(options).save();
  };
 
return (
  <>

    <h1>Copy your Recipt</h1>
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
