import './index.css';
import NavBar from "./component/NavBar";
import TextForm from "./component/Textarea";
import React , {useState} from 'react';

function App() {
  const [mode ,setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#131313';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div className="bg-dark vh-100">
    <NavBar mode = {mode} toggleMode = {toggleMode}/>
    <TextForm mode = {mode}/>
    </div>
  );
}

export default App;
