import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./compontents/AppRouter";
import Header from "./compontents/Header";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";

function App() {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))

  }, [])

  return (
    <BrowserRouter>
      <Header/>
      <main>
        <AppRouter/>
      </main>
    </BrowserRouter>
  );
}

export default App;
