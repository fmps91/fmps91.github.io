import fs from 'fs';

const dev = [
  '<!-- para desarrollo poner estas direcciónes de las librerias -->',
  '<script src="src/assets/librarys/html2canvas/html2canvas.min.js"></script>',
  '<script src="src/assets/librarys/jsPDF/jspdf.umd.min.js"></script>'
];

const prod = [
  '<!-- para producción poner estas direcciónes de las librerias -->',
  '<script src="librarys/html2canvas/html2canvas.min.js"></script>',
  '<script src="librarys/jsPDF/jspdf.umd.min.js"></script>'
];

let htmlPath = '';
let shouldAddDev = false;
let shouldAddProd = false;

// Determinar qué hacer según NODE_ENV
if (process.env.NODE_ENV === 'development') {
  shouldAddDev = true;
  htmlPath = 'index.html';
} else if (process.env.NODE_ENV === 'production') {
  htmlPath = 'page/index.html';
  shouldAddProd = true;
}

fs.readFile(htmlPath, 'utf8', (err, data) => {
  if (err) throw err;
  
  let result = data;
  
  // Primero eliminar TODAS las líneas de desarrollo (por si acaso)
  for (const line of dev) {
    const escapedLine = line.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`${escapedLine}\\s*\\n?`, 'g');
    result = result.replace(regex, '');
  }
  
  // Si es desarrollo, agregar las líneas de desarrollo
  if (shouldAddDev) {
    // Verificar si ya existen para no duplicar

    const devExist = dev.every(line => result.includes(line));
    
    if (!devExist) {
      // Agregar antes de </body>
      result = result.replace('</body>', `${dev.join('\n')}\n</body>`);
      console.log('✅ Líneas de desarrollo agregadas al index.html');
    } else {
      console.log('ℹ️ Las líneas de desarrollo ya existen');
    }
  }
  
  // Si es producción, también agregar las líneas de producción si es necesario
  if (shouldAddProd) {
    // Eliminar líneas de producción existentes primero
    for (const line of prod) {
      const escapedLine = line.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`${escapedLine}\\s*\\n?`, 'g');
      result = result.replace(regex, '');
    }
    
    // Agregar líneas de producción
    result = result.replace('</body>', `${prod.join('\n')}\n</body>`);
    console.log('✅ Líneas de producción agregadas al dist/index.html');
  }
  
  fs.writeFile(htmlPath, result, 'utf8', (err) => {
    if (err) throw err;
    if (shouldAddDev) {
      console.log('✅ Archivo index.html listo para desarrollo');
    } else if (shouldAddProd) {
      console.log('✅ Archivo dist/index.html listo para producción');
    }
  });
});