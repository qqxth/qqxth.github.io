import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink, useNavigate} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('refresh')
    localStorage.removeItem('access')
    localStorage.removeItem('username')
    localStorage.removeItem('user_id')
  }
  return (
    <header className={'header'}>
      <nav className={'header__nav'}>
        <div className={'nav__item'}>
          <NavLink to={HOME_ROUTE} className={'nav__logo'}>
            TODO
          </NavLink>
        </div>
        <div className={'nav__item'}>
          {user.isAuth ?
            <div className={'buttons items-center'}>
              <div className='text-lg '>
                {localStorage.username}
              </div>
              <button className={'button'} onClick={() => logOut()}>
                Log Out
              </button>
            </div>
            :
            <div className={'buttons'}>
              <button className={'button'} onClick={() => navigate(LOGIN_ROUTE)}>
                Log In
              </button>
              <button className={'button'} onClick={() => navigate(REGISTRATION_ROUTE)}>
                Sign Up
              </button>
            </div>
          }
        </div>
      </nav>
    </header>
  );
});

export default Header;