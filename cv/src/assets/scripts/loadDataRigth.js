

$(document).ready(function () {
    console.log("estoy con el json")
    let textDecotation = `
    color:black;
    margin-top: 2em;
    `;

    var container = document.getElementById('leftHtml');
    let ejemplo="<div>ejemplo<div/>"
    $( "leftHtml", {
        html: ejemplo
    }).appendTo( "body" );

    /* $.getJSON("jsons/lenguajes.json", function (e) {

    $.getJSON("jsons/left.json", function (data) {
        
        let redes = `
        <div>
        <img  src="images/correo.svg" style="width: 20px; margin-right: 10px;" >
        </img>
        <a href="http://${data.redes.correo}" style=${textDecotation}>${data.redes.correo} </a>
        <div />

        <div style="margin-top: 5px; ">
        <img  src="images/github.svg" style="width: 20px; margin-right: 10px;" >
        </img>
        <a href=${data.redes.github} style=${textDecotation} >fmps91</a>
        <div />

        <div style="margin-top: 5px; ">
        <img  src="images/linkedin.svg" style="width: 20px; margin-right: 10px;" >
        </img>
        <a href=${data.redes.linkeding} style=${textDecotation}>linkedin.com/in/miguel...</a>
        <div />
            `;
        
        

        let educación ="";

        data['educación'].map((v,e,a)=>{
            const template=`
            <div style="margin-top: 1em; ">
            <div>
            <h5>${v.titulo}<h5/>
            <div/>
            <div>
            <h6>${v.instituto}<h6/>
            <div/>
            <div>
            <h6>${v.duración}<h6/>
            <div/>
            <div/>`
            educación=educación+template;
            //console.log("estoy en el array: v: ",v," e: ",e," a: ",a)
        })

        let idiomas="";

        data['idiomas'].map((v,e,a)=>{
            const template=`<h6 style="margin-top: 1em; ">${v}</h6>`
            
            idiomas=idiomas+template;
            console.log("estoy en el array: v: ",v," e: ",e," a: ",a)
        })

        let intereses="";

        data['intereses'].map((v,e,a)=>{
            const template=`<h6 style="margin-top: 1em; ">${v}</h6>`
            
            intereses=intereses+template;
            console.log("estoy en el array: v: ",v," e: ",e," a: ",a)
        })
       
        

        container.insertAdjacentHTML('afterBegin', `
                <div id="perfil" style="margin-top: 1em; ">
                <img src="${data.foto}">
               
                 <h1 style="margin-bottom: 10px"> ${data.perfil.nombre}</h1>
                 <p>${data.perfil.rol}</p>

                <div id="redes" style="margin-top: 1em;">   
                 ${redes}
                </div>

                
                <div id="educacion" style="margin-top: 2em;">
                    <h2>EDUCACIÓN</h2>
                    
                    ${educación}
                   
                </div>
                
                <div id="lenguajes" style="margin-top: 2em;">
                    <h2>LENGUAJES</h2>
                    ${idiomas}
                </div>

                <div id="intereses" style="margin-top: 2em;">
                    <h2>INTERESES</h2>
                    ${intereses}
                </div>

                <div id="cv" style="margin-top: 2em;">
                    
                   <h5 id="curriculun">Descargar CV/Curriculun</h5>
                </div>

        `);
        console.log("datos desde rigth html.json: ", data)
    });




    }); */

})
