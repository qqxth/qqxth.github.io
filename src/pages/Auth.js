import React, {useContext, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TASKS_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {check, login, registration} from "../http/userAPI";
import {Context} from "../index";

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const auth_click = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(username, password)
        localStorage.setItem('user', data.data)
      } else {
        data = await registration(email, username, password)
      }
      user.setUser(data)
      user.setIsAuth(true)
      navigate(TASKS_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }

  }

  return (
    <div className='auth'>
      <div className='auth_container'>
        <div
          className='front shadow-inner shadow-lg rounded-lg mx-auto md:w-3/4 lg:w-2/4 p-6'>
          <h1>{isLogin ? 'Sign In' : 'Create your Account'}</h1>
          <form className='flex flex-col w-full'>

            {isLogin ? null :
              <input
                type="email"
                name="email"
                id="email"
                placeholder='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />}
            <input
              type="text"
              name="username"
              id="username"
              placeholder='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {isLogin ?
              <div className='flex justify-between'>
                <div className='space-x-2 flex items-center'>
                  <div>Have no account?</div>
                  <NavLink
                    to={REGISTRATION_ROUTE}
                    className='block underline'>
                    <div>Join Us</div>
                  </NavLink>
                </div>
                <button
                  className='p-2 bg-green-600 rounded-3xl'
                  type='button'
                  onClick={auth_click}
                >
                  Log In
                </button>
              </div>
              :
              <div className='flex justify-between'>
                <div className='space-x-2 flex items-center'>
                  <div>Already have an account?</div>
                  <NavLink
                    to={LOGIN_ROUTE}
                    className='block underline'>
                    <div>Log In</div>
                  </NavLink>
                </div>
                <button
                  className='p-2 bg-blue-600 rounded-3xl'
                  type='button'
                  onClick={auth_click}
                >
                  Sign Up
                </button>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
});

export default Auth;