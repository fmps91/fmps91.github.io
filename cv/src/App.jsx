
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import './App.css'
import LeftPanel from './components/LeftPanel';
import RigthPanel from './components/RigthPanel';
import leftJson from './assets/jsons/left.json';
import rigthJson from './assets/jsons/rigth.json';


function App() {
 
  return (
    <div id="container">
        
        <div id='left'>
        <LeftPanel data={leftJson}></LeftPanel>
        
        </div>

        <div id='rigth'>
        <RigthPanel data={rigthJson}></RigthPanel>
        </div>

    </div>
  )
}

export default App
