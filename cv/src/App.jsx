import { useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import './App.css'
import LeftPanel from './components/LeftPanel';
import RigthPanel from './components/RigthPanel';
import leftJson from './assets/jsons/left.json';
import rigthJson from './assets/jsons/rigth.json';


function App() {
  const [count, setCount] = useState(0)


  /* const handleSubmit = (e) => {
    e.preventDefault();
    html2canvas(document.body).then(function (canvas) {
      
      // Convertir la imagen capturada a formato Base64
      const imgData = canvas.toDataURL('image/png'); // Imagen en formato Base64
      
      const { jsPDF } = window.jspdf;
      // Crear un documento PDF con jsPDF
      const pdf = new jsPDF();
    
      // Obtener las dimensiones del PDF
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
    
      // Obtener las dimensiones del canvas
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
    
      // Calcular el tamaño de la imagen para ajustarse al PDF
      const imgAspectRatio = canvasWidth / canvasHeight;
      const pdfAspectRatio = pdfWidth / pdfHeight;
    
      let imgWidth, imgHeight;
      if (imgAspectRatio > pdfAspectRatio) {
        // Imagen es más ancha que la proporción del PDF
        imgWidth = pdfWidth;
        imgHeight = pdfWidth / imgAspectRatio;
      } else {
        // Imagen es más alta o igual en proporción al PDF
        imgHeight = pdfHeight;
        imgWidth = pdfHeight * imgAspectRatio;
      }
    
      // Agregar la imagen al PDF
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
      // Descargar el PDF generado
      pdf.save('captura.pdf');
    }); 
    };
    */
    

  
  return (
    <div id="container">
        
        <div id='left'>
        <LeftPanel data={leftJson}></LeftPanel>
        
        </div>

        <div id='rigth'>
        <RigthPanel data={rigthJson}></RigthPanel>
        </div>
        
        
        {/* <button  onClick={handleSubmit}>click</button> */}

    </div>
  )
}

export default App
