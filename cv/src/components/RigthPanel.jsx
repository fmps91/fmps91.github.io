import React from 'react'

import "./Rigth.css"
import ProgressBar from '../hooks/ProgressBar';

export default function RigthPanel({ data }) {
    /* console.log("data rigth: ", Object.keys(data))
    console.log("data rigth: ", data) */
    
    let pathImages = "images/";
    
    process.env.NODE_ENV === "production" ? pathImages="images/" : pathImages="../../src/assets/images/"
    
    const iconsSvg = ['user.png', 'experiences.png', 'projects.png', 'skills.png', 'courses.png']
    const stileIcon = { width: "20px", margin: "10px", paddingBottom: "1em" }
    const divIcon = { width: "40px", height: "40px", borderRadius: "100%", marginRight: "10px" }
    const stileA = { textDecoration: "none", color: "black" }

    return (
        <div id='rigthHtml'>
            <div id='carrera' className='section'>
                <div className='titulo'>
                    <div className='redondSvg' style={divIcon}>
                        <img src={`${pathImages + iconsSvg[0]}`} style={{ width: "20px", marginLeft: "10px", marginTop: "7px" }} >
                        </img>
                    </div>

                    <p className='pTitle '>{Object.keys(data)[0].toUpperCase()}</p>

                </div>
                {data.carrera == null ?
                    <h2>No hay perfil disponible</h2>
                    :
                    <p style={{ marginBottom: "5px" }} className='pText ' >{data.carrera.descripción}</p>
                }
                {data.carrera == null ?
                    <h2>No hay tecnologías</h2>
                    :
                    <div id='tecCarrera'>
                        {data.carrera.tecnologías.map((v, e) => {
                            return (

                                <p key={e} className='tecP pText'>{v}</p>


                            );
                        })
                        }
                    </div>
                }


            </div>

            <div id='experiencias' className='section'>
                <div className='titulo'>
                    <div className='redondSvg' style={divIcon}>
                        <img src={`${pathImages + iconsSvg[1]}`} style={stileIcon} >
                        </img>
                    </div>

                    <p className='pTitle '>{Object.keys(data)[1].toUpperCase()}</p>

                </div>
                {data.experiencias == null ?
                    <h2>No hay experiencias</h2>
                    :
                    <div id='divCarreras'>
                        {data.experiencias.map((v, e, a) => {
                            const styleExp = a.length > 1 ? { marginBottom: "1em" } : { marginBottom: "0px" }
                            return (
                                <div key={e} style={styleExp}>
                                    <div id='headerExp'>
                                        <div className='itemExp'>
                                            <p className='pText'>{v.rol}</p>
                                            <p className='pCompany'>{v.nombre}</p>

                                        </div>
                                        <div >
                                            <p className='pTitle'>{v.duración}</p>
                                        </div>

                                    </div>


                                    <p className='pText defaultRigth'>{v.descripción}</p>


                                    <div id='containerActBen'>

                                        <div id='tecnologias'>
                                            <p className='pText default'>{Object.keys(v)[3].toLocaleUpperCase()}</p>
                                            <div className='lista'>
                                                {v.herramientas.map((v1, e1) => {
                                                    return (
                                                        <p key={e1} className='pText'>{v1}</p>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div id='actividades'>
                                            <p className='pText default'>{Object.keys(v)[4].toLocaleUpperCase()}</p>
                                            <ul className='lista'>
                                                {v.actividades.map((v1, e1) => {
                                                    return (
                                                        <li key={e1} className='pText itemLista'>{v1}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div id='beneficios'>
                                            <p className='pText default'>{Object.keys(v)[6].toLocaleUpperCase()}</p>
                                            <ul className='lista'>
                                                {v.beneficios.map((v1, e1) => {
                                                    return (
                                                        <li key={e1} className='pText itemLista'>{v1}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>

                                    </div>



                                </div>
                            );
                        })
                        }
                    </div>
                }


            </div>


            <div id='projectos' className='section'>
                <div className='titulo'>
                    <div className='redondSvg' style={divIcon}>
                        <img src={`${pathImages + iconsSvg[2]}`} style={stileIcon} >
                        </img>
                    </div>

                    <p className='pTitle '>{Object.keys(data)[2].toUpperCase()}</p>

                </div>
                <p className='pText ' style={{marginBottom:"5px"}}>{data.projectos.descripción}</p>
                {data.projectos.lista == null ?
                    <h2>No hay projectos</h2>
                    :
                    <div className='wrapper'>
                        {data.projectos.lista.map((v, e) => {
                            return (
                                <div className='card' key={e}>
                                    <p className='pCompany textDefaultRitgh'>{v.nombre}</p>
                                    <p className='pText'>{v.descripción}</p>
                                    <a href={v.link} style={stileA} className="pCompany" >link</a>
                                </div>
                            );
                        })
                        }
                    </div>
                }

            </div>


            <div id='habilidadess' className='section'>
                <div className='titulo'>
                    <div className='redondSvg' style={divIcon}>
                        <img src={`${pathImages + iconsSvg[3]}`} style={stileIcon} >
                        </img>
                    </div>

                    <p className='pTitle '>{Object.keys(data)[3].toUpperCase()}</p>

                </div>
                {data.habilidades == null ?
                    <h2>No hay habilidades</h2>
                    :
                    <div  >
                        {data.habilidades.map((v, e) => {
                            return (
                                <div key={e} className='habFlex'>
                                    <p className='pText il'>{v.nombre}</p>
                                    <ProgressBar value={v.porcentaje} max={100} />

                                </div>

                            );
                        })
                        }
                    </div>
                }

            </div>


            <div id='cursos' className='section' style={{ paddingBottom: "1em" }}>
                <div className='titulo'>
                    <div className='redondSvg' style={divIcon}>
                        <img src={`${pathImages + iconsSvg[4]}`} style={{ width: "20px", marginLeft: "9px", marginTop: "6px" }} >
                        </img>
                    </div>

                    <p className='pTitle '>{Object.keys(data)[4].toUpperCase()}</p>

                </div>

                {data.cursos == null ?
                    <h2>No hay cursos</h2>
                    :
                    <div className=''>
                        {data.cursos.map((v, e) => {
                            return (
                                <div key={e} id="curso" className='textDefaultRitgh' style={{marginTop:"20px"}}>

                                    <p className='pText'>{v.titulo}</p>
                                    <img src={`${pathImages + v.dir}`} className='imgCourse' >
                                    </img>

                                </div>

                            );
                        })
                        }
                    </div>
                }

            </div>


        </div>
    )
}
