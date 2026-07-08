
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import './App.css'
import LeftPanel from './components/cv/LeftPanel';
import RigthPanel from './components/cv/RigthPanel';
import allJson from './assets/jsons/all.json';
import allLeng from './assets/jsons/lenguajes.json';
import MainPanel from './components/ats/MainPanel';
import React, { useCallback, useEffect, useState } from 'react';
import Checkbox from './components/checkboxCV/Checkbox';
import MultiSelect from './components/selectLanguage/MultiSelect';

function App() {

  const [showConfig, setShowConfig] = useState(false);
  const [showATS, setShowATS] = useState(false);
  const [showCV, setShowCV] = useState(true);
  const [valueCheck, setValueCheck] = useState(false);
  const [leng, setLeng] = useState('es');
  const [selectedLanguage, setSelectedLanguage] = useState('Inglés');
  const [label, setLabel] = useState('CV')

  // Opciones de lenguajes
  const languageOptions = [
    'Español',
    'Inglés',
    'Francés',
    'Alemán',
    'Italiano',
    'Portugués',
    'Ruso',
    'Chino Mandarín',
    'Japonés',
    'Coreano'
  ];

  // Manejadores para checkbox
  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setValueCheck(checked)

    if (checked == false) {
      setShowATS(false)
      setShowCV(true)
      setLabel("CV")
    } else {
      setShowATS(true)
      setShowCV(false)
      setLabel("ATS")
    }

    //console.log('value: ', valueCheck, "  ats: ", showATS, "  cv: ", showCV)
  };

  // Manejador para el select de lenguaje único - CORREGIDO
  const handleLanguageSelection = (selected) => {
    setSelectedLanguage(selected);

    if (selected == 'Español') {
      //console.log(`Has seleccionado: ${selected}`);
      setLeng('es')
    } else if (selected == 'Inglés') {
      setLeng('en')
    } else {
      console.log('Has deseleccionado el lenguaje');
    }
  };


  // Definir el handler con useCallback para evitar recreaciones
  const handleKeyDown = useCallback((event) => {
    const key = event.key.toLowerCase();

    // Cambiar idioma
    if (key === 'e') {
      setShowConfig(prev => !prev);
    } 
    
  }, []); // Dependencias vacías si no usa variables externas

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);



  return (
    <div>

    {showConfig && (
      <div id='config'>
        
        <div className="config-section">
          <MultiSelect
            options={languageOptions}
            label="Selecciona lenguaje"
            placeholder="Elige el idioma"
            onSelectionChange={handleLanguageSelection}
            selectedOption={selectedLanguage}
          />
        </div>

        <div className="config-section">
          <Checkbox onChange={handleCheckboxChange} label={label} checked={valueCheck} />
        </div>

      </div>
      )}


      <div>
        {showATS && (
          <MainPanel data={allJson.ats} leng={leng} type={allLeng[''+leng]}></MainPanel>
        )}
      </div>

      {showCV && (
        <div>
          <div id="container">

            <div id='left'>
              <LeftPanel data={allJson.cv[''+leng]['left']} type={allLeng[''+leng]}></LeftPanel>
            </div>

            <div id='rigth'>
              <RigthPanel data={allJson.cv[''+leng]['rigth']} type={allLeng[''+leng]}></RigthPanel>
            </div>

          </div>


          <div id='idfooter'>
            <div id='footer'>
              <div>
                <p>Autor: fmps91</p>
              </div>
              <div>
                <a href="https://github.com/fmps91">github: github.com/fmps91</a>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  )
}

export default App
