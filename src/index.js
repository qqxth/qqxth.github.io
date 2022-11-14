import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";
import TasksStore from "./store/TasksStore";


export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    task: new TasksStore(),
  }}>
    <App/>
  </Context.Provider>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
