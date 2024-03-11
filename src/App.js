import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom"
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setMode]=useState('light');
  const[alt,setAlt]=useState('dark');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      });
      setTimeout(()=>{
        setAlert(null)
      },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setAlt('light');
      document.body.style.backgroundColor='#10294C';
      showAlert("dark mode has been enabled","success")
    }
    else{
      setMode('light')
      setAlt('dark');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} alt={alt}/>
  <Alert alert={alert}/>
 <div className="container"> 
    <Routes>
        <Route exact path='/' element={ <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} alt={alt}/>}>
        </Route>
        <Route exact path='/about' element={<About/>}>
        </Route>
    </Routes>
  </div>
    </Router>
    </>
  );
}

export default App;
