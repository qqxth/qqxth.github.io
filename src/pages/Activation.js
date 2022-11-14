import React from 'react';
import {activate} from "../http/userAPI";
const Activation = () => {
  const params = new URLSearchParams(window.location.pathname)
  console.log(params)
  const uid = params.get('/activate/uid')
  const token = params.get('token')
  console.log(uid, token)
  return (
    <div onLoadedData={activate(uid, token)} className='my-[20%] text-3xl mx-auto'>
      <div className='w-8/12 text-center mx-auto'>
        Your account has been successfully activated
      </div>
    </div>
  );
};

export default Activation;