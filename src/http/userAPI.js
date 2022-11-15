import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const registration = async (email, username, password) => {
  return await $host.post('auth/users/', {username, email, password})
}

export const login = async (username, password) => {
  const {data} =  await $host.post('auth/jwt/create/', {username, password})
  const token = data.access
  const refreshToken = data.refresh
  localStorage.setItem('access', token)
  localStorage.setItem('refresh', refreshToken)
  const decoded = jwt_decode(token)
  localStorage.setItem('username', decoded.username)
  localStorage.setItem('user_id', decoded.user_id)
  return decoded
}

export const activate = async  (uid, token) => {
  return await $host.post('auth/users/activation/', {uid, token})
}

async function updateRefreshToken () {
  const refreshToken = localStorage.getItem('refresh')
  const refresh = await $authHost.post('auth/jwt/refresh', {refreshToken})
  const data = refresh.data
  const token= data.access
  const newRefreshToken = data.refresh
  if (refresh.status === 200){
    localStorage.setItem('access', token)
    localStorage.setItem('refresh', newRefreshToken)
  } else{ 
    localStorage.removeItem('refresh')
    localStorage.removeItem('access')
    localStorage.removeItem('user')
  }
}

export const check = async () => {
  const token = localStorage.getItem('access')
  const response = await $authHost.post('auth/jwt/verify/', {token})
  console.log('status - ', response.status)
  if(response.status === 200)
    return true
  await updateRefreshToken()
}
