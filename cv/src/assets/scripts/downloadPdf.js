


   
    document.getElementById('curriculun').addEventListener('click', function() {
        // Usar html2canvas para capturar la página
        console.log("si esta haciendo click")
        html2canvas(document.body).then(function(canvas) {
            // Convertir la imagen capturada a un formato adecuado para PDF
            const imgData = canvas.toDataURL('image/png');
    
            // Crear un PDF con jsPDF
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF();
    
            // Agregar la imagen capturada al PDF
            pdf.addImage(imgData, 'PNG', 0, 0);
    
            // Guardar el PDF con el nombre "pagina.pdf"
            pdf.save('pagina.pdf');
        });
    });

 

