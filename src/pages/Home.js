import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import Tasks from "../compontents/Tasks";
import {getTasks} from "../http/tasksAPI";
import tasks from "../compontents/Tasks";


const Home = observer(() => {
  const {user} = useContext(Context)
  const {task} = useContext(Context)

  useEffect(() => {
    getTasks().then(data => task.setTasks(data))
  }, [])

  return (
    <div className=''>
      {user.isAuth
        ?
        <Tasks/>
        :
          <div className='w-2/3 text-center mx-auto text-3xl my-[20%]'>
            <h1>To use this application, <NavLink to={REGISTRATION_ROUTE} className='underline'>register</NavLink> or <NavLink to={LOGIN_ROUTE} className='underline'>login</NavLink> to your account</h1>
          </div>
      }
    </div>
  );
});

export default Home;