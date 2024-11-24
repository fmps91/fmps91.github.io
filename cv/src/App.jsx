import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  /*
  //codigo para guardar como imagen 
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    //console.log(formData);


    html2canvas(document.body).then(async function (canvas) {
      // Convertir la imagen capturada a un formato adecuado para PDF

      const imgData = await canvas.toDataURL('image/png');
      const byteString = atob(imgData.split(',')[1]); // Eliminar el encabezado "data:image/png;base64,"
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const uint8Array = new Uint8Array(arrayBuffer);

      for (let i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
      }

      const blob = new Blob([uint8Array], { type: 'image/png' });

      // Crear un enlace para descargar el archivo
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob); // Crear una URL temporal para el Blob
      link.download = 'filename.png'; // Nombre del archivo a descargar
      link.click();

      console.log('Imagen descargada correctamente');


    });

  }; */

  const handleSubmit = async (e) => {
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
  return (
    <>

      <div>
        <h1>Ejemplo</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, commodi sint dolorem asperiores corporis dolores. Ipsum repudiandae officiis odio mollitia perferendis illo accusantium vel. Deleniti impedit ipsam repellat perspiciatis est.
        </p>
        <button id="c" onClick={handleSubmit}>click</button>
      </div>

    </>
  )
}

export default App
