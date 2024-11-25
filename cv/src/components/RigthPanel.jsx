import React from 'react'

import "./Rigth.css"

//import progressbar from "../hooks/ProgressBar";

export default function RigthPanel({ data }) {
    console.log("data rigth: ", Object.keys(data))
    console.log("data rigth: ", data)
    const pathImages = "../../src/assets/images/";
    const iconsSvg = ['user.svg', 'experiences.svg', 'projects.svg', 'skills.svg', 'courses.svg']
    const stileIcon = { width: "20px", margin: "10px", paddingBottom: "1em" }
    const divIcon = { width: "40px", height: "40px", borderRadius: "100%", marginRight: "10px" }
    //style={{marginBottom:""}}
    return (
        <div id='rigthHtml'>
            <div id='carrera' className='section'>
                <div className='titulo'>
                    <div className='redondSvg' style={divIcon}>
                        <img src={`${pathImages + iconsSvg[0]}`} style={stileIcon} >
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
                    <h2>No hay tecnologías</h2>
                    :
                    <div id='divCarreras'>
                        {data.experiencias.map((v, e) => {
                            console.log("v: ", v)
                            return (
                                <div key={e}>
                                    <p className='pText'>{v.rol}</p>
                                    <p className='pCompany'>{v.nombre}</p>
                                    <p className='pText'>{v.descripción}</p>
                                    <p className='pText'>{v.duración}</p>
                                    <div id='actividades'>

                                        {v.actividades.map((v1, e1) => {
                                            return (
                                                <p key={e1} className='pText'>{v1}</p>
                                            )
                                        })}
                                    </div>
                                    <div id='beneficios'>

                                        {v.beneficios.map((v1, e1) => {
                                            return (
                                                <p key={e1} className='pText'>{v1}</p>
                                            )
                                        })}
                                    </div>


                                </div>
                            );
                        })
                        }
                    </div>
                }


            </div>


            <div id='habilidades' className='section'>
                <div className='titulo'>
                    <div className='redondSvg' style={divIcon}>
                        <img src={`${pathImages + iconsSvg[1]}`} style={stileIcon} >
                        </img>
                    </div>

                    <p className='pTitle '>{Object.keys(data)[2].toUpperCase()}</p>

                </div>

                {data.habilidades == null ?
                    <h2>No hay habilidades</h2>
                    :
                    <div id='tecCarrera'>
                        {data.habilidades.map((v, e) => {
                            return (
                                <p key={e} className='tecP pText'>{v.nombre+"  value: "+v.porcentaje}</p>

                            );
                        })
                        }
                    </div>
                }
                
            </div>


            <div id='projectos' className='section'>
                <div className='titulo'>
                    <div className='redondSvg' style={divIcon}>
                        <img src={`${pathImages + iconsSvg[1]}`} style={stileIcon} >
                        </img>
                    </div>

                    <p className='pTitle '>{Object.keys(data)[3].toUpperCase()}</p>

                </div>

                {data.projectos.lista == null ?
                    <h2>No hay projectos</h2>
                    :
                    <div id='tecCarrera'>
                        {data.projectos.lista.map((v, e) => {
                            return (
                                <p key={e} className='pText'>{v.nombre+"  descripción: "+v.descripción+"  link: "+v.link}</p>

                            );
                        })
                        }
                    </div>
                }
                
            </div>


            <div id='cursos' className='section'>
                <div className='titulo'>
                    <div className='redondSvg' style={divIcon}>
                        <img src={`${pathImages + iconsSvg[1]}`} style={stileIcon} >
                        </img>
                    </div>

                    <p className='pTitle '>{Object.keys(data)[4].toUpperCase()}</p>

                </div>

                {data.cursos == null ?
                    <h2>No hay cursos</h2>
                    :
                    <div id='tecCarrera'>
                        {data.cursos.map((v, e) => {
                            return (
                                <p key={e} className='pText'>{v.titulo+"  file: "+v.dir}</p>

                            );
                        })
                        }
                    </div>
                }
                
            </div>


        </div>
    )
}
