import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post('http://localhost:3001/login', {
        code,
      })
      .then((res) => {
        console.log(res.data);
        // window.history.pushState({}, null, '/');
        // setAccessToken(res.data.accessToken);
        // setRefreshToken(res.data.refreshToken);
        // setExpiresIn(res.data.expiresIn);
      })
      .catch((err) => {
        console.log(err);
        window.location = '/';
      });
  }, [code]);

  return <div>UseAuth</div>;
}

export default UseAuth;
