import React from 'react';  
import AdivinanzaContainer from './components/AdivinanzaContainer/AdivinanzaContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; 
import './App.css';  

function App() {  
  return (  
    <div className="App">  
      <Header />  {/* Añadido Header */}
      <div className="container">  
        <AdivinanzaContainer />  
      </div>  
      <Footer />  {/* Añadido Footer */}
    </div>  
  );  
}  

export default App;