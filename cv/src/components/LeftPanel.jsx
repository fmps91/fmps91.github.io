import './left.css'

export default function LeftPanel({ data }) {
    
    console.log("data left: ", data)
    const pathImages = "../../src/assets/images/";
    const iconsSvg = ['correo.png', 'github.png', 'linkedin.png']
    //console.log("imagen: ", pathImages + iconsSvg[0])

    /* let photo="/images/photo.jpeg" */
  
    const handleClick = (e) => {

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
        
        <div id='leftHtml'>
            
            <div id="perfil" className='default'>
                {data.perfil == null ?
                    <h2>No hay perfil disponible</h2>
                    :
                    <div id='datosPerfil'>
                        <img id="photo" src={data.perfil.foto} className='default'/>
                        <h1 > {data.perfil.nombre} </h1>
                        <p className='pText ' style={{ marginTop: "10px" }}>{data.perfil.rol}</p>
                    </div>


                }

            </div>

            <div id="redes" className='default'>
                {data.redes == null ?
                    <h4>No hay redes disponibles</h4>
                    :
                    <div>

                        <div className='content marginSocial '>
                            <img src={`${pathImages + iconsSvg[0]}`} >
                            </img>

                            <a href={`http://${data.redes.correo}`}  >{data.redes.correo} </a>
                        </div >

                        <div className='content marginSocial'>
                            <img src={`${pathImages + iconsSvg[1]}`}  >
                            </img>
                            <a href={data.redes.github}  >fmps91</a>
                        </div>

                        <div className='content marginSocial'>
                            <img src={`${pathImages + iconsSvg[2]}`}  >
                            </img>
                            <a href={data.redes.linkeding}  >linkedin.com/in/miguel...</a>
                        </div >
                    </div >

                }
            </div>



            <div id="educacion" className='default items'>
                <p className='default pTitle'>EDUCACIÓN</p>
                {data.educación == null ?
                    <p>No hay redes disponibles</p>
                    :
                    <div>
                        {data.educación.map((v,e) => {
                            return (
                                <div className='default' key={e}>
                                    <div >
                                        <p className='pTitle'>{v.titulo}</p>
                                    </div>
                                    <div>
                                        <p className='pText'>{v.instituto}</p>
                                    </div>
                                    <div>
                                        <p className='pText'>{v.duración}</p>
                                    </div>
                                </div>
                            )
                        })
                        }




                    </div>
                }


            </div>

            <div id="lenguajes" className='default items' >
                <p className='default pTitle'>LENGUAJES</p>
                {data.idiomas == null ?
                    <p>No hay idiomas disponibles</p>
                    :
                    <div>
                        {data.idiomas.map((v,e) => {

                            return (
                                <p key={e} className='pText'>{v}</p>
                            )
                        })
                        }

                    </div>
                }
            </div>

            <div id="intereses" className='default items'>
                <p className='default pTitle'>INTERESES</p>
                {data.intereses == null ?
                    <h4>No hay intereses disponibles</h4>
                    :
                    <div>
                        {data.intereses.map((v,e) => {

                            return (
                                <p  key={e} className='pText'>{v}</p>
                            )
                        })
                        }

                    </div>
                }
            </div>

            <div id="cv" className='default items' style={{ paddingBottom: "1em" }}>
                <p className='pTitle'>DESCARGAS</p>
                <div>
                <a className='pText' href='../../src/assets/images/cv_es.pdf' download>CV/Curriculun PDF</a>
                </div>
                <div>
                    <p className='pText' onClick={handleClick} >CV/Curriculun generando PDF por React</p>
                </div>
                
            </div>
        </div>
    )
}
