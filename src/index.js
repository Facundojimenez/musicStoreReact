import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import estilo from './styles/estiloGeneral.css'
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App style={estilo}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//Esto es para arreglar el bug del drawer que muestra un error por consola. (Es un problema de material UI)

ReactDOM.render(
    <App style={estilo}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
