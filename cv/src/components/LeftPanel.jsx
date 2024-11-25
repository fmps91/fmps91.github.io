import React from 'react'
import './left.css'

export default function LeftPanel({ data }) {
    console.log("data left: ", data)
    const pathImages = "../../src/assets/images/";
    const iconsSvg = ['correo.svg', 'github.svg', 'linkedin.svg']
    console.log("imagen: ", pathImages + iconsSvg[0])

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

    const stileIcon = { width: "20px", marginRight: "10px" }
    const stileA = { textDecoration: "none", color: "white" }

    return (
        <div id='leftHtml'>
            <div id="perfil" className='default'>
                {data.perfil == null ?
                    <h2>No hay perfil disponible</h2>
                    :
                    <div id='datosPerfil'>
                        <img src={data.perfil.foto} className='default' style={{ marginTop: "1em" }} />
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

                        <div className='content marginSocial'>
                            <img src={`${pathImages + iconsSvg[0]}`} style={stileIcon}>
                            </img>

                            <a href={`http://${data.redes.correo}`} className='pText' style={stileA}>{data.redes.correo} </a>
                        </div >

                        <div className='content marginSocial'>
                            <img src={`${pathImages + iconsSvg[1]}`} style={stileIcon} >
                            </img>
                            <a href={data.redes.github} className='pText' style={stileA}>fmps91</a>
                        </div>

                        <div className='content marginSocial'>
                            <img src={`${pathImages + iconsSvg[2]}`} style={stileIcon} >
                            </img>
                            <a href={data.redes.linkeding} className='pText' style={stileA}>linkedin.com/in/miguel...</a>
                        </div >
                    </div >

                }
            </div>



            <div id="educacion" className='default items'>
                <h4 className='default pTitle'>EDUCACIÓN</h4>
                {data.educación == null ?
                    <h4>No hay redes disponibles</h4>
                    :
                    <div>
                        {data.educación.map((v,e) => {
                            return (
                                <div className='default' key={e}>
                                    <div >
                                        <h4 className='pTitle'>{v.titulo}</h4>
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
                <h4 className='default pTitle'>LENGUAJES</h4>
                {data.idiomas == null ?
                    <h4>No hay idiomas disponibles</h4>
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
                <h4 className='default pTitle'>INTERESES</h4>
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

            <div id="cv" className='default items' style={{ paddingBottom: "2em" }}>

                <h4 id="curriculun" className='pTitle' onClick={handleClick} >Descargar CV/Curriculun</h4>
            </div>
        </div>
    )
}
