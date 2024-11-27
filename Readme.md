# Indice
Recurso estatico para realizar un cv sin dependecias instaladas en el package.json

## Aplicación
imagen de representacion de la app:
![ScreenShot](cv.png)

## Comandos
* npm run dev: para ejecutar la aplicación
* npm run build: para construir la aplicación
hay algunos errores producidos por la version de vite
deben poner exactamente asi en el index.html: 
```
<script type="module" crossorigin src="assets/index-BAU9OtcN.js"></script>
    
<link rel="stylesheet" crossorigin href="assets/index-DcAij2k-.css">

una parte más abajo deben copiar las librerías la carpeta src/assets/librarys en cv/assets y luego poner estas líneas:

<script src="../assets/librarys/html2canvas/html2canvas.min.js"></script>

<script src="../assets/librarys/jsPDF/jspdf.umd.min.js"></script>

luego ejecutan algun servidor de html para correr la aplicación
```

